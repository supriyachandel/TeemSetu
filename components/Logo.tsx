import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  height?: number;
  linked?: boolean;
  className?: string;
};

export default function Logo({
  height = 44,
  linked = true,
  className = "",
}: LogoProps) {
  const width = Math.round(height * (629 / 397));

  const image = (
    <Image
      src="/teamsetu-logo.png"
      alt="Team Setu"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );

  if (linked) {
    return (
      <Link href="/" className="inline-flex shrink-0">
        {image}
      </Link>
    );
  }

  return <span className="inline-flex shrink-0">{image}</span>;
}
