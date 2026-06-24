"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "default" | "navbar";
}

export function ThemeToggle({ className, variant = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center transition-colors",
        variant === "navbar"
          ? "navbar-action-glass h-10 w-10 rounded-xl border-0 text-text-muted hover:text-wood-dark"
          : "h-9 w-9 rounded-full border-0 bg-blush text-wood-dark hover:bg-blush/80",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-[16px] w-[16px]" strokeWidth={1.75} />
      ) : (
        <Sun className="h-[16px] w-[16px]" strokeWidth={1.75} />
      )}
    </button>
  );
}
