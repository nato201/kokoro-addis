"use client";

import { useState } from "react";

type SiteHeaderProps = {
  pageMode?: boolean;
};

const navItems = [
  { label: "Menu", href: "/#menu" },
  { label: "Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ pageMode = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={pageMode ? "site-header page-header" : "site-header"}>
      <button
        className={menuOpen ? "menu-toggle is-active" : "menu-toggle"}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>

      <a className="brand" href="/" aria-label="KOKORO home">
        <img className="brand-logo" src="/kokoro-logo-horizontal-white.png" alt="" />
      </a>

      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
      </nav>

      <a className="header-cta" href="/reservation">Book a table</a>
    </header>
  );
}
