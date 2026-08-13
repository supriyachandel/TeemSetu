"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  suggestions?: string[];
}

function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,    // Deletion
          dp[i][j - 1] + 1,    // Insertion
          dp[i - 1][j - 1] + 1 // Substitution
        );
      }
    }
  }
  return dp[m][n];
}

function isWordFuzzyMatch(word: string, target: string): boolean {
  if (word === target) return true;
  if (word.length < 4 || target.length < 4) return word === target;
  if (target.includes(word) || word.includes(target)) return true;
  
  const dist = levenshteinDistance(word, target);
  const allowedDist = target.length > 5 ? 2 : 1;
  return dist <= allowedDist;
}

const INTENT_KEYWORDS: Record<string, string[]> = {
  greetings: ["hi", "hello", "hey", "greetings", "yo", "morning", "afternoon", "evening", "hola", "heyy", "hlo", "hlw", "helo", "hllo", "hii", "hy", "heey", "sup"],
  goodbyes: ["bye", "goodbye", "farewell", "cya", "exit", "quit", "later", "tata", "byee", "byy", "see ya", "see you"],
  thanks: ["thanks", "thank", "ty", "appreciate", "grateful", "awesome", "cool", "nice", "thx", "thnk", "thnks", "tysm"],
  identity: ["teemsetu", "teamsetu", "temsetu", "setu", "website", "platform", "about", "identity", "who"],
  pricing: ["price", "pricing", "pricing plans", "cost", "subscription", "plan", "plans", "pay", "starter", "professional", "enterprise", "cheap", "expensive"],
  features: ["feature", "features", "module", "modules", "capability", "capabilities", "function", "functions"],
  attendance: ["attendance", "clock", "checkin", "checkout", "hours", "tracking", "time"],
  leave: ["leave", "leaves", "holiday", "holidays", "vacation", "vacations", "calendar", "timeoff"],
  payroll: ["payroll", "payslip", "payslips", "salary", "salaries", "paycheck"],
  projects: ["project", "projects", "task", "tasks", "assign", "assignment", "todo", "progress"],
  reports: ["report", "reports", "analytic", "analytics", "dashboard", "dashboards", "chart", "charts"],
  chat: ["chat", "chats", "message", "messages", "notification", "notifications", "notify"],
  admin: ["admin", "administrator", "owner", "settings", "permission", "permissions"],
  hr: ["hr", "human resource", "human resources", "recruitment", "onboard", "onboarding"],
  employee: ["employee", "employees", "self-service", "staff", "member", "portal"],
  demo: ["demo", "book", "contact", "schedule", "call", "sales", "customer support", "tech support"],
  faq: ["faq", "faqs", "question", "questions", "answer", "answers", "help"]
};

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Lead capture states
  const [contactId, setContactId] = useState<string>("");
  const [showLeadForm, setShowLeadForm] = useState<boolean>(true);
  const [leadName, setLeadName] = useState<string>("");
  const [leadEmail, setLeadEmail] = useState<string>("");
  const [leadPhone, setLeadPhone] = useState<string>("");
  const [leadError, setLeadError] = useState<string>("");
  const [isSubmittingLead, setIsSubmittingLead] = useState<boolean>(false);

  // Note/CRM Sync states
  const [noteId, setNoteId] = useState<string>("");
  const syncTimeoutRef = useRef<any>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-welcome",
      sender: "bot",
      text: "Hi there! 👋 Welcome to **TeemSetu**. I'm your virtual assistant, **Setu Bot**.\n\nI can help you understand our workforce management platform, features, pricing, and dashboards. What would you like to know today?",
      timestamp: new Date(),
      suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features", "Book a Demo"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Retrieve stored lead session
    const storedId = localStorage.getItem("teemsetu_lead_contact_id");
    const storedName = localStorage.getItem("teemsetu_lead_name");
    
    // Clear temporary note ID on refresh so we start a clean timeline note block
    localStorage.removeItem("teemsetu_lead_note_id");

    if (storedId && storedName) {
      setContactId(storedId);
      setShowLeadForm(false);
      
      const firstname = storedName.trim().split(/\s+/)[0] || "";
      setMessages([
        {
          id: "initial-welcome",
          sender: "bot",
          text: `Hi **${firstname}**! 👋 Welcome back to **TeemSetu**. I'm **Setu Bot**.\n\nI can help you understand our workforce management platform, features, pricing, and dashboards. What would you like to know today?`,
          timestamp: new Date(),
          suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features", "Book a Demo"],
        }
      ]);
    }
  }, []);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError("");

    if (!leadName.trim()) {
      setLeadError("Please enter your name.");
      return;
    }
    if (!leadEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail)) {
      setLeadError("Please enter a valid email address.");
      return;
    }

    setIsSubmittingLead(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          phone: leadPhone,
          source: "chatbot",
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit lead details.");
      }

      localStorage.setItem("teemsetu_lead_contact_id", data.contactId);
      localStorage.setItem("teemsetu_lead_name", leadName);
      setContactId(data.contactId);
      setShowLeadForm(false);

      const firstname = leadName.trim().split(/\s+/)[0] || "";
      setMessages([
        {
          id: "initial-welcome",
          sender: "bot",
          text: `Thanks for introducing yourself, **${firstname}**! 👋 Welcome to **TeemSetu**. I'm **Setu Bot**.\n\nI can help you understand our workforce management platform, features, pricing, and dashboards. What would you like to know today?`,
          timestamp: new Date(),
          suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features", "Book a Demo"],
        },
      ]);
    } catch (err: any) {
      setLeadError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const syncChatToHubSpot = async () => {
    try {
      const transcript = messages
        .map((msg) => {
          const sender = msg.sender === "user" ? "User" : "Setu Bot";
          const time = msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          const cleanText = msg.text
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .replace(/\[(.*?)\]\((.*?)\)/g, "$1 ($2)");
          return `[${time}] ${sender}: ${cleanText}`;
        })
        .join("\n\n");

      const storedNoteId = localStorage.getItem("teemsetu_lead_note_id") || noteId;

      const response = await fetch("/api/leads/sync-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactId,
          noteId: storedNoteId,
          transcript: `TeemSetu Chat Session started on ${new Date().toLocaleDateString()}\n\n${transcript}`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.noteId && data.noteId !== storedNoteId) {
          setNoteId(data.noteId);
          localStorage.setItem("teemsetu_lead_note_id", data.noteId);
        }
      }
    } catch (err) {
      console.error("Failed to sync chat to HubSpot:", err);
    }
  };

  // Trigger debounced HubSpot notes synchronizer
  useEffect(() => {
    if (!contactId || messages.length <= 1) return;

    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    syncTimeoutRef.current = setTimeout(() => {
      syncChatToHubSpot();
    }, 3000);

    return () => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, [messages, contactId]);

  // Conversational response engine matching TeemSetu information with fuzzy matching and off-topic checks
  const getBotResponse = (userInput: string): { text: string; suggestions?: string[] } => {
    const rawQuery = userInput.toLowerCase().trim();
    const queryCleaned = rawQuery.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
    const words = queryCleaned.split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      return {
        text: "It looks like you sent an empty message. I'm here to answer questions about **TeemSetu** (its features, pricing, or dashboards). How can I help?",
        suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features"],
      };
    }

    // Compute matching scores for each intent
    const intentScores: Record<string, number> = {};
    for (const intent in INTENT_KEYWORDS) {
      intentScores[intent] = 0;
    }

    // Calculate score based on exact phrases, substrings and fuzzy words
    for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
      // 1. Direct phrase or substring matches on the raw query (with word boundaries) get a high weight
      for (const keyword of keywords) {
        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');
        if (regex.test(rawQuery)) {
          intentScores[intent] += 3;
        }
      }

      // 2. Individual word-level fuzzy matching
      for (const word of words) {
        for (const keyword of keywords) {
          const keywordWords = keyword.split(/\s+/);
          for (const kwWord of keywordWords) {
            if (isWordFuzzyMatch(word, kwWord)) {
              intentScores[intent] += 1;
            }
          }
        }
      }
    }

    // Find highest matching intent
    let bestIntent = "";
    let highestScore = 0;
    for (const [intent, score] of Object.entries(intentScores)) {
      if (score > highestScore) {
        highestScore = score;
        bestIntent = intent;
      }
    }

    // Irrelevant/Off-topic messages check
    if (highestScore === 0) {
      return {
        text: "I'm sorry, but I can only answer questions related to **TeemSetu** (such as our features, pricing plans, role dashboards, or booking a demo). \n\nCould you please ask a question about our platform? For example: *'What is TeemSetu?'* or *'How does attendance tracking work?'*",
        suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features", "Book a Demo"],
      };
    }

    // Return response based on bestIntent
    switch (bestIntent) {
      case "greetings":
        return {
          text: "Hello! Welcome to **TeemSetu**. I'm here to help you navigate our workforce management solutions. What can I help you find today?",
          suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features"],
        };

      case "goodbyes":
        return {
          text: "Goodbye! Thank you for exploring **TeemSetu**. If you have more questions later, I'll be here. Have a productive day! 🚀",
          suggestions: ["Start new chat"],
        };

      case "thanks":
        return {
          text: "You're very welcome! I'm glad I could help. Let me know if you want to explore anything else, like our role-based solutions or features.",
          suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Book a Demo"],
        };

      case "identity":
        return {
          text: "**TeemSetu** is an all-in-one workforce management platform that connects teams and streamlines company operations. It centralizes employee management, attendance tracking, leave requests, payroll processing, projects, tasks, and analytics in a single, intuitive system.",
          suggestions: ["Key Features", "Compare Pricing Plans", "Who uses TeemSetu?"],
        };

      case "pricing":
        return {
          text: "**TeemSetu** offers simple, transparent monthly pricing plans:\n\n• **Starter ($29/month)**: Built for small teams (up to 25 employees). Includes employee profiles, attendance, leaves, and basic reports.\n• **Professional ($79/month)**: Our most popular plan for growing companies (up to 100 employees). Adds payroll, project & task management, advanced reports, and internal chat.\n• **Enterprise (Custom)**: For larger teams with unlimited employees. Adds custom configuration, advanced permissions, company branding, and dedicated support.",
          suggestions: ["Book a Demo", "Can employees self-serve?", "Does it support payroll?"],
        };

      case "features":
        return {
          text: "TeemSetu includes a comprehensive set of features to handle your workforce:\n\n• **Employee Management**: Centralize profiles and employment history.\n• **Attendance & Leaves**: Clock-in/out and request workflows.\n• **Payroll**: Secure payslips and salary configurations.\n• **Projects & Tasks**: Project boards and task assignments.\n• **Reports & Analytics**: Workforce dashboards and analytics.\n• **Chat & Notifications**: Seamless internal team communication.",
          suggestions: ["Attendance & Leave", "Payroll feature", "Projects & Tasks"],
        };

      case "attendance":
        return {
          text: "With **Attendance Tracking**, employees can mark their daily clock-in/out directly from their dashboard. HR teams can monitor logs, trace working hours, detect tardiness, and generate monthly logs instantly.",
          suggestions: ["Leave Management", "Employee dashboard", "Show features"],
        };

      case "leave":
        return {
          text: "Our **Leave Management** module makes time-off requests easy. Employees can submit leave applications and view holiday calendars. HR and managers review and approve requests via a clear dashboard workflow.",
          suggestions: ["Attendance Tracking", "HR Solution", "Show pricing"],
        };

      case "payroll":
        return {
          text: "The **Payroll** feature simplifies salary coordination. HR can manage pay configuration, and employees can securely view and download payslips. *Note: Payroll is included in the Professional ($79/mo) and Enterprise plans.*",
          suggestions: ["Compare Pricing Plans", "What can Admins manage?", "Key Features"],
        };

      case "projects":
        return {
          text: "The **Projects & Tasks** module enables clean collaboration. Managers create projects and assign tasks with deadlines, while employees update task statuses directly to showcase progress on active sprints.",
          suggestions: ["Employee portal", "HR Solution", "Show features"],
        };

      case "reports":
        return {
          text: "The **Reports & Analytics** module offers visual data dashboards. You can view attendance patterns, leave frequency, project completion metrics, and general business activities to drive planning decisions.",
          suggestions: ["Admin dashboard", "Show pricing", "What is TeemSetu?"],
        };

      case "chat":
        return {
          text: "TeemSetu supports internal **Chat** and instant system **Notifications** to facilitate seamless team communication. Keep up to date on leave approvals, task assignments, and organization announcements.",
          suggestions: ["Employee dashboard", "Key Features", "Compare Pricing Plans"],
        };

      case "admin":
        return {
          text: "The **Admin Solution** offers total workspace oversight. Admins configure user roles, permissions, manage subscriptions, customize company branding (logos, brand colors), and access all modules in the organization.",
          suggestions: ["HR dashboard", "Employee dashboard", "Pricing Plans"],
        };

      case "hr":
        return {
          text: "The **HR Solution** is built to save HR managers time. It supports employee records, attendance logs, leave request approvals, payroll processing, task assignments, and organization analytics dashboards.",
          suggestions: ["Admin dashboard", "Employee dashboard", "Key Features"],
        };

      case "employee":
        return {
          text: "The **Employee Solution** empowers employees with self-service. They can mark attendance, submit leave requests, view holiday schedules, update assigned tasks, check notifications, and download payroll payslips.",
          suggestions: ["HR dashboard", "Can employees self-serve?", "Show pricing"],
        };

      case "demo":
        return {
          text: "We'd love to walk you through a personalized demo of TeemSetu! Please visit our **[Book a Demo page](/contact)** and fill out the contact form. A team member will reach out to schedule a live call.",
          suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features"],
        };

      case "faq":
        return {
          text: "Here are some questions you can ask me about:\n\n• What is TeemSetu?\n• What are the pricing plans?\n• Does it support payroll?\n• Can permissions be customized?\n• Can employees request leave self-service?",
          suggestions: ["Does it support payroll?", "Can permissions be customized?", "What is TeemSetu?"],
        };

      default:
        return {
          text: "I'm sorry, I couldn't find a direct answer for that. I am trained on TeemSetu product information. \n\nFeel free to ask me about:\n• TeemSetu features (Attendance, Leave, Payroll, Tasks)\n• Pricing subscriptions and plan structures\n• Tailored solutions for Admins, HR, and Employees\n• Scheduling a live demo",
          suggestions: ["What is TeemSetu?", "Compare Pricing Plans", "Key Features", "Book a Demo"],
        };
    }
  };

  const handleSendMessage = (textToSend?: string) => {
    const textValue = textToSend || input;
    if (!textValue.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: `msg-${Date.now()}-user`,
      sender: "user",
      text: textValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) {
      setInput("");
    }

    // Trigger typing simulation
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(textValue);
      const botMsg: Message = {
        id: `msg-${Date.now()}-bot`,
        sender: "bot",
        text: response.text,
        timestamp: new Date(),
        suggestions: response.suggestions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 850);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Helper to format bot markdown text to standard HTML links and bullet boldings
  const formatText = (text: string) => {
    return text.split("\n").map((line, index) => {
      let content = line;

      // Handle Bold markdown (**text**)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = boldRegex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }
        parts.push(
          <strong key={`bold-${match.index}`} className="font-bold text-brand-dark">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }

      // Check if formatting was applied, otherwise fallback to standard text mapping
      let renderedContent: React.ReactNode = parts.length > 0 ? parts : content;

      // Render custom inline markdown links [text](url)
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      if (typeof content === "string" && linkRegex.test(content)) {
        linkRegex.lastIndex = 0; // reset
        const linkParts: React.ReactNode[] = [];
        let linkLastIndex = 0;
        let linkMatch: RegExpExecArray | null;

        while ((linkMatch = linkRegex.exec(content)) !== null) {
          if (linkMatch.index > linkLastIndex) {
            linkParts.push(content.substring(linkLastIndex, linkMatch.index));
          }
          linkParts.push(
            <Link
              key={`link-${linkMatch.index}`}
              href={linkMatch[2]}
              className="text-brand hover:underline font-semibold"
              onClick={() => {
                if (linkMatch && linkMatch[2].startsWith("/")) {
                  // close chatbot on navigate
                  setIsOpen(false);
                }
              }}
            >
              {linkMatch[1]}
            </Link>
          );
          linkLastIndex = linkRegex.lastIndex;
        }
        if (linkLastIndex < content.length) {
          linkParts.push(content.substring(linkLastIndex));
        }
        renderedContent = linkParts;
      }

      return (
        <p key={index} className={line.trim() === "" ? "h-3" : "leading-relaxed mb-1"}>
          {renderedContent}
        </p>
      );
    });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={handleOpenToggle}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none ${
          isOpen ? "bg-brand-dark rotate-90" : "hover:bg-brand-light"
        }`}
        aria-label="Chat with Setu Assistant"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-75"></span>
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-brand-light border-2 border-brand"></span>
              </span>
            )}
          </div>
        )}
      </button>

      {/* Chat Window Panel */}
      <div
        className={`fixed right-6 z-50 flex w-96 max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl transition-all duration-300 ${
          isOpen
            ? "bottom-24 scale-100 opacity-100 pointer-events-auto"
            : "bottom-16 scale-95 opacity-0 pointer-events-none"
        }`}
        style={{ height: "520px", maxHeight: "80vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4 rounded-t-2xl text-slate-800">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white shadow-inner">
              S
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-brand-light border-2 border-slate-50" />
            </div>
            <div>
              <h3 className="font-bold leading-tight text-sm">Setu Assistant</h3>
              <p className="text-xs text-slate-500">Online • Product Expert</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
            aria-label="Close chat"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {showLeadForm ? (
        <form onSubmit={handleLeadSubmit} className="flex flex-1 flex-col justify-between p-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-slate-800">Welcome! Let's get started</h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-semibold">
                  Please enter your basic details to start a chat with our product expert.
                </p>
              </div>

              {leadError && (
                <div className="rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-100">
                  {leadError}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="lead-name" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:bg-white focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-slate-400 font-semibold"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:bg-white focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-slate-400 font-semibold"
                  />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:bg-white focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-slate-400 font-semibold"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmittingLead}
              className="mt-6 w-full rounded-xl bg-brand py-3 text-sm font-bold text-white shadow-md hover:bg-brand-light active:scale-95 disabled:bg-slate-100 disabled:text-slate-400 disabled:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmittingLead ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Connecting...
                </>
              ) : (
                "Start Chatting"
              )}
            </button>
          </form>
        ) : (
          <>
            {/* Message Area */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 text-sm scrollbar-thin bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                      msg.sender === "user"
                        ? "bg-brand text-white rounded-tr-none"
                        : "bg-white border border-slate-200/60 text-slate-700 rounded-tl-none"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.sender === "bot" ? formatText(msg.text) : msg.text}</div>
                  </div>
                  <span className="mt-1 text-[10px] text-slate-400 px-1 font-semibold">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>

                  {/* Suggestions chips rendered inside the history block under the bot message */}
                  {msg.sender === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 max-w-[90%]">
                      {msg.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSendMessage(suggestion)}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 hover:border-brand/45 hover:bg-brand/[0.04] hover:text-brand transition-all cursor-pointer"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="bg-white border border-slate-200/60 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "0ms" }}></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "150ms" }}></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-slate-100 bg-slate-50 p-3 rounded-b-2xl">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm focus-within:border-brand/50 focus-within:ring-2 focus-within:ring-brand/20 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent text-sm text-slate-800 focus:outline-none placeholder:text-slate-400 font-semibold"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim()}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white transition-all hover:bg-brand-light active:scale-95 disabled:bg-slate-100 disabled:text-slate-400 disabled:scale-100 cursor-pointer"
                  aria-label="Send message"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
