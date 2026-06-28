"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";

import { useTheme } from "@/components/site/theme-provider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolved, toggleTheme } = useTheme();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        buttonVariants({ variant: "secondary", size: "icon-sm" }),
        "rounded-lg text-[color:var(--text-secondary)] hover:text-foreground",
        className
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <IconSun size={18} stroke={1.5} aria-hidden />
      ) : (
        <IconMoon size={18} stroke={1.5} aria-hidden />
      )}
    </button>
  );
}
