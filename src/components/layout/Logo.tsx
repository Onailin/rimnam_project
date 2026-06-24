import Image from "next/image";
import Link from "next/link";
import { logo } from "@/constants/logo";
import { siteConfig } from "@/constants/theme";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

const heightClasses: Record<LogoSize, string> = {
  sm: "h-10",
  md: "h-12",
  lg: "h-14",
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
  href?: string;
  priority?: boolean;
  alt?: string;
  onClick?: () => void;
}

export function Logo({
  size = "md",
  className,
  href = "/",
  priority = false,
  alt = siteConfig.name.th,
  onClick,
}: LogoProps) {
  const image = (
    <Image
      src={logo.src}
      alt={alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={cn("w-auto object-contain", heightClasses[size], className)}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} onClick={onClick} className="inline-flex shrink-0 items-center">
      {image}
    </Link>
  );
}
