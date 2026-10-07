"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/bridal", label: "Bridal" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(250,247,243,0.96)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 28,
          paddingRight: 28,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
        >
          <Image
            src={scrolled ? "/logo.png" : "/logo-light.png"}
            alt="Elanza logo"
            width={56}
            height={56}
            priority
            style={{ flexShrink: 0 }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: 17,
                color: scrolled ? "#2c2c2c" : "#fff",
                lineHeight: 1.2,
                transition: "color 0.3s",
              }}
            >
              Elanza
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: "0.15em",
                color: "#c9a84c",
                fontWeight: 600,
              }}
            >
              FROM FABRIC TO FORM
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color:
                  pathname === l.href
                    ? "#c9a84c"
                    : scrolled
                    ? "#2c2c2c"
                    : "rgba(255,255,255,0.9)",
                transition: "color 0.2s",
                borderBottom: pathname === l.href ? "1.5px solid #c9a84c" : "1.5px solid transparent",
                paddingBottom: 2,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="/download"
            className="hidden md:inline-flex"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, #c9a84c, #b8860b)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 50,
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
            }}
          >
            Download App
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: scrolled ? "#2c2c2c" : "#fff",
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#faf7f3",
            borderTop: "1px solid #ede8e0",
            padding: "16px 32px 24px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                fontWeight: 500,
                color: pathname === l.href ? "#c9a84c" : "#2c2c2c",
                textDecoration: "none",
                borderBottom: "1px solid #ede8e0",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: 16,
              textAlign: "center",
              background: "linear-gradient(135deg,#c9a84c,#b8860b)",
              color: "#fff",
              padding: "12px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Download App
          </Link>
        </div>
      )}
    </header>
  );
}
