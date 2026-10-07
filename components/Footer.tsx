import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1e1a16", color: "#fff" }}>
      {/* Top strip */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "56px 32px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Image
              src="/logo-light.png"
              alt="Elanza logo"
              width={72}
              height={72}
              style={{ flexShrink: 0 }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#fff",
                }}
              >
                Elanza
              </div>
              <div style={{ fontSize: 9, letterSpacing: "0.15em", color: "#c9a84c", fontWeight: 600 }}>
                FROM FABRIC TO FORM
              </div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 240 }}>
            Custom-stitched Pherans, bridal wear & ethnic outfits, crafted by master artisans
            with 30+ years of tradition.
          </p>
        </div>

        {/* Links */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#c9a84c", marginBottom: 16 }}>
            EXPLORE
          </div>
          {[
            { href: "/collections", label: "Collections" },
            { href: "/bridal", label: "Bridal Wear" },
            { href: "/about", label: "Our Story" },
            { href: "/download", label: "Download App" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: "block",
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                marginBottom: 10,
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#c9a84c", marginBottom: 16 }}>
            CONTACT
          </div>
          {[
            "Residency Road, Srinagar",
            "Kashmir, 190001",
            "hello@elanza.in",
            "+91 94190 00000",
          ].map((line) => (
            <div
              key={line}
              style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 8, lineHeight: 1.6 }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Support */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#c9a84c", marginBottom: 16 }}>
            SUPPORT
          </div>
          {[
            { href: "/faqs", label: "FAQs" },
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-of-use", label: "Terms of Use" },
            { href: "/business-policy", label: "Business Policy" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: "block",
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                marginBottom: 10,
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © 2024 Elanza - From Fabric to Form. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Use"].map((t) => (
            <span
              key={t}
              style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
