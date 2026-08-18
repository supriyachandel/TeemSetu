import Image from "next/image";
import Link from "next/link";

const LOGO_RATIO = 1024 / 647;

type LogoProps = {
  height?: number;
  linked?: boolean;
  className?: string;
};

export default function Logo({
  height = 64,
  linked = true,
  className = "",
}: LogoProps) {
  const width = Math.round(height * LOGO_RATIO);

  const image = (
    <>
      <Image
        src="/logo-light.png"
        alt="TeemSetu — Connecting Teams, Building Futures."
        width={width}
        height={height}
        className={`object-contain object-left logo-light ${className}`}
        priority
      />
      <Image
        src="/logo-dark.png"
        alt="TeemSetu — Connecting Teams, Building Futures."
        width={width}
        height={height}
        className={`object-contain object-left logo-dark ${className}`}
        priority
      />
    </>
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
