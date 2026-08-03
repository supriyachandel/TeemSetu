import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

const baseUrl = "https://teamsetu.com";

const routes = [
  "",
  "/features",
  "/solutions",
  "/solutions/admin",
  "/solutions/hr",
  "/solutions/employees",
  "/pricing",
  "/about",
  "/resources",
  "/contact",
  "/login",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
