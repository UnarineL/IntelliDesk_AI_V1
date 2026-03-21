import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-gradient-to-r from-accent via-accent2 to-accent3 text-white shadow-glow hover:scale-[1.01]",
  secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
