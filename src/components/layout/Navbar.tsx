"use client";

import { useEffect, useState } from "react";
import { Menu, SquareTerminal, X } from "lucide-react";
import { academy } from "@/lib/data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 h-[72px] border-b bg-bg/85 backdrop-blur-xl ${
        scrolled ? "border-border shadow-[0_1px_0_rgba(15,23,42,0.03)]" : "border-transparent"
      }`}
    >
      <div className="container-shell flex h-full items-center justify-between gap-6">
        <a
          href="#top"
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg text-primary-strong"
          aria-label={`${academy.name} home`}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-primary text-white shadow-sm">
            <SquareTerminal size={19} strokeWidth={2.25} aria-hidden="true" />
          </span>
          <span className="heading-tight truncate text-[15px] font-bold tracking-[-0.025em] sm:text-base">
            {academy.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {academy.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-3 text-sm font-medium text-body hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#"
            className="rounded-[10px] px-4 py-3 text-sm font-semibold text-body hover:bg-primary-tint hover:text-primary-strong"
          >
            {academy.loginLabel}
          </a>
          <a
            href="#enroll"
            className="rounded-[10px] bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-strong active:translate-y-px"
          >
            {academy.getStartedLabel}
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border border-border bg-surface text-ink hover:border-primary hover:text-primary lg:hidden"
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-b border-border bg-bg transition-[max-height,opacity] duration-200 lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {academy.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-[10px] px-4 py-3 text-sm font-semibold text-body hover:bg-primary-tint hover:text-primary-strong"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-3">
            <a
              href="#"
              onClick={closeMenu}
              className="rounded-[10px] border border-border px-4 py-3 text-center text-sm font-semibold text-body hover:border-primary hover:text-primary-strong"
            >
              {academy.loginLabel}
            </a>
            <a
              href="#enroll"
              onClick={closeMenu}
              className="rounded-[10px] bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-strong"
            >
              {academy.getStartedLabel}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
