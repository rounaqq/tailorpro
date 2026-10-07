"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import TestimonialsScroll from "@/components/TestimonialsScroll";
import { APP_STORE_URL, PLAY_STORE_URL, storeLinkProps } from "@/lib/storeLinks";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    label: "Women's Wear",
    sub: "Anarkalis, Suits & Sarees",
    image: "/cat-womens-wear.jpg",
    position: "center 20%",
  },
  {
    label: "Bridal",
    sub: "Crafted for your biggest day",
    image: "/cat-bridal.jpg",
    position: "center 25%",
  },
  {
    label: "Pherans",
    sub: "Kashmir's signature garment",
    image: "/cat-pheran.jpg",
    position: "center 20%",
  },
  {
    label: "Men's Wear",
    sub: "Sherwanis & Pathani Sets",
    image: "/cat-mens-wear.jpg",
    position: "center 15%",
  },
  {
    label: "Kids Wear",
    sub: "Festive & Occasion Outfits",
    image: "/cat-kids-wear.jpg",
    position: "35% center",
  },
];

const catalogItems: Record<string, Array<{ id: string; title: string; price: string; image: string; tag?: string }>> = {
  "Women's Wear": [
    {
      id: "w1",
      title: "Anarkali Kurta",
      price: "₹1,200",
      image: "/anarkali-kurta.png",
      tag: "Stitching",
    },
    {
      id: "w2",
      title: "Straight Kurta",
      price: "₹850",
      image: "/straight-kurta.png",
      tag: "Stitching",
    },
    {
      id: "w3",
      title: "A-Line Suit Set",
      price: "₹950",
      image: "/aline-suit-set.png",
      tag: "Stitching",
    },
  ],
  "Bridal": [
    {
      id: "b1",
      title: "Lehenga Choli Set",
      price: "₹15,500",
      image: "/lehenga-choli-set.png",
      tag: "Custom Fit",
    },
    {
      id: "b2",
      title: "Ghagra Choli Set",
      price: "₹12,800",
      image: "/ghagra-choli-set.jpg",
      tag: "Bespoke",
    },
    {
      id: "b3",
      title: "Customized Saree",
      price: "₹8,500",
      image: "/customized-saree.png",
      tag: "Handcrafted",
    },
  ],
  "Pherans": [
    {
      id: "p1",
      title: "Aari Work Pheran",
      price: "₹2,800",
      image: "/aari-work-pheran.png",
      tag: "Stitching",
    },
    {
      id: "p2",
      title: "Tilla Work Pheran",
      price: "₹3,400",
      image: "/tilla-work-pheran.png",
      tag: "Artisan",
    },
    {
      id: "p3",
      title: "Short Pheran",
      price: "₹2,200",
      image: "/short-pheran.png",
      tag: "Custom Fit",
    },
  ],
  "Men's Wear": [
    {
      id: "m1",
      title: "Straight Kurta",
      price: "₹600",
      image: "/mens-straight-kurta.png",
      tag: "Stitching",
    },
    {
      id: "m2",
      title: "Pathani Kurta",
      price: "₹720",
      image: "/mens-pathani-kurta.png",
      tag: "Stitching",
    },
    {
      id: "m3",
      title: "Short Kurta",
      price: "₹500",
      image: "/mens-short-kurta.png",
      tag: "Stitching",
    },
  ],
  "Kids Wear": [
    {
      id: "k1",
      title: "Girls Anarkali Suit Set",
      price: "₹900",
      image: "/kids-anarkali-suit.png",
      tag: "Stitching",
    },
    {
      id: "k2",
      title: "Girls Kurti & Sharara Set",
      price: "₹1,000",
      image: "/kids-sharara-set.png",
      tag: "Stitching",
    },
    {
      id: "k3",
      title: "Boys Kurta Pajama Set",
      price: "₹650",
      image: "/boys-kurta-pajama.png",
      tag: "Stitching",
    },
  ],
};


const processSteps = [
  {
    n: "01",
    title: "Choose Your Design",
    body: "Browse our curated catalog inside the app, with 500+ designs across every category.",
  },
  {
    n: "02",
    title: "Share Measurements",
    body: "Enter your measurements yourself or schedule a free home visit with our tailor.",
  },
  {
    n: "03",
    title: "Expert Stitching",
    body: "Master artisans with decades of experience bring your garment to life.",
  },
  {
    n: "04",
    title: "Delivered To You",
    body: "Your outfit arrives at your doorstep in 7 to 10 days, perfectly finished.",
  },
];


// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCategoryClick = (catLabel: string) => {
    setSelectedCategory(catLabel);
    setTimeout(() => {
      const elem = document.getElementById("featured-collection");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const amount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay — dark left, transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(15,10,5,0.82) 0%, rgba(15,10,5,0.45) 55%, rgba(15,10,5,0.1) 100%)",
          }}
        />

        {/* ── Fabric image: absolutely fills the right 50% of the section ── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "52%",
            height: "100%",
            zIndex: 1,
            /* Fade the left edge so it dissolves into the dark overlay;
               fade the bottom edge to avoid a hard clip */
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 50%), " +
              "linear-gradient(to top, transparent 0%, black 12%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 50%), " +
              "linear-gradient(to top, transparent 0%, black 12%)",
            WebkitMaskComposite: "destination-in",
            mixBlendMode: "luminosity",
            opacity: 0.92,
          }}
        >
          <Image
            src="/hero-fabric.jpg"
            alt="Intricate golden embroidered fabric"
            fill
            sizes="52vw"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
            priority
          />
        </div>

        {/* ── Text content — left half ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            paddingLeft: 28,
            paddingRight: 28,
            paddingTop: 110,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                textTransform: "uppercase",
              }}
            >
              ✦ &nbsp; Welcome to Elanza - From Fabric to Form &nbsp; ✦
            </span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(34px, 5.5vw, 88px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.08,
              maxWidth: 560,
              marginBottom: 20,
            }}
          >
            Wear the Art
            <br />
            <span style={{ color: "#c9a84c" }}>of Kashmir</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 1.5vw, 18px)",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 460,
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            Custom-stitched Pherans, bridal wear &amp; ethnic outfits, crafted by
            master artisans with 30+ years of tradition.
          </p>

          {/* Proof points */}
          <div style={{ display: "flex", gap: "12px 20px", marginBottom: 36, flexWrap: "wrap" }}>
            {[
              { icon: "✦", text: "Custom Stitching" },
              { icon: "◈", text: "Made to Measure" },
              { icon: "★", text: "5★ Rated · 10K+ Customers" },
            ].map((p) => (
              <div
                key={p.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <span style={{ color: "#c9a84c", fontSize: 11 }}>{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/download" className="btn-gold">
              Download The App
            </Link>
            <Link href="/collections" className="btn-ghost">
              Services
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND STATEMENT
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div className="section brand-grid">
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#c9a84c", marginBottom: 16 }}>
              ✦ &nbsp; SINCE 1992 &nbsp; ✦
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: "#2c2c2c", lineHeight: 1.25, marginBottom: 20 }}
            >
              Every Stitch Tells
              <br />a Story
            </h2>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 20 }}>
              Founded in the heart of Srinagar, Elanza - From Fabric to Form was built on a single belief: that
              clothing should be crafted precisely for the person who wears it. Not off a rack,
              not in bulk. Just for you.
            </p>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 36 }}>
              Our artisans draw on generations of Kashmiri craftsmanship, such as sozni needlework,
              tilla embroidery, and hand-woven pashmina, to create garments that carry the soul
              of the valley.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 40px" }}>
              {[
                { n: "30+", l: "Years of tradition" },
                { n: "10K+", l: "Garments crafted" },
                { n: "50+", l: "Master artisans" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="font-serif"
                    style={{ fontSize: 32, fontWeight: 800, color: "#c9a84c", lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="brand-collage">
            {/* Top-left: tailoring tools and measuring workspace */}
            <div
              className="lift"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60%",
                height: "65%",
                borderRadius: 24,
                overflow: "hidden",
                backgroundImage: "url(/tailoring-table.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Bottom-right: tailor operating sewing machine */}
            <div
              className="lift"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "60%",
                height: "65%",
                borderRadius: 24,
                overflow: "hidden",
                backgroundImage: "url(/sewing-machine.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORIES — TEASER (not a catalog)
      ══════════════════════════════════════════ */}
      <section style={{ background: "var(--bg)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#c9a84c", marginBottom: 12 }}>
              ✦ &nbsp; WHAT WE MAKE &nbsp; ✦
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Something for Every Occasion
            </h2>
            <p style={{ fontSize: 14, color: "#888", marginTop: 12, maxWidth: 440, margin: "12px auto 0" }}>
              From everyday elegance to once-in-a-lifetime moments, explore the full range inside the app.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
              maxWidth: 1040,
              margin: "0 auto",
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.label;
              return (
                <div
                  key={cat.label}
                  onClick={() => handleCategoryClick(cat.label)}
                  className="lift"
                  style={{
                    position: "relative",
                    flex: "1 1 310px",
                    maxWidth: 320,
                    minWidth: 260,
                    height: 270,
                    borderRadius: 18,
                    overflow: "hidden",
                    cursor: "pointer",
                    border: isSelected ? "2px solid #c9a84c" : "1px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${cat.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: cat.position,
                      transition: "transform 0.4s",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "18px 16px",
                    }}
                  >
                    <div
                      className="font-serif"
                      style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 3 }}
                    >
                      {cat.label}
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)" }}>{cat.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/download" className="btn-gold">
              Explore All In App
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED COLLECTION — INLINE GALLERY
      ══════════════════════════════════════════ */}
      {selectedCategory && (
        <section id="featured-collection" style={{ background: "#fcfaf7", padding: "64px 0", borderTop: "1px solid #f0ece1" }}>
          <div className="section" style={{ maxWidth: 1140, margin: "0 auto" }}>
            {/* Header & Category Filter Pills */}
            <div style={{ position: "relative", textAlign: "center", marginBottom: 36 }}>
              {/* Circular Cross Close Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                aria-label="Close collection"
                title="Close collection"
                style={{
                  position: "absolute",
                  top: -10,
                  right: 0,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#ffffff",
                  border: "1px solid #e0d7c6",
                  color: "#444",
                  fontSize: 16,
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                  transition: "all 0.2s ease",
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#c9a84c", marginBottom: 10 }}>
                ✦ &nbsp; FEATURED COLLECTION &nbsp; ✦
              </div>
              <h2
                className="font-serif"
                style={{ fontSize: "clamp(24px, 3.2vw, 36px)", fontWeight: 700, color: "#2c2c2c", marginBottom: 24 }}
              >
                Popular Designs for Custom Stitching
              </h2>

              {/* Category Filter Pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 10,
                  maxWidth: 720,
                  margin: "0 auto",
                }}
              >
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.label;
                  return (
                    <button
                      key={cat.label}
                      onClick={() => handleCategoryClick(cat.label)}
                      style={{
                        padding: "9px 22px",
                        borderRadius: 30,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        border: isActive ? "1px solid #c9a84c" : "1px solid #e2ded5",
                        background: isActive ? "#c9a84c" : "#ffffff",
                        color: isActive ? "#ffffff" : "#555555",
                        boxShadow: isActive ? "0 4px 14px rgba(201,168,76,0.3)" : "0 2px 6px rgba(0,0,0,0.03)",
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Cards Grid — All 3 Cards Visible */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 20,
                maxWidth: 960,
                margin: "0 auto",
                padding: "8px 12px 20px",
              }}
            >
              {(catalogItems[selectedCategory || "Women's Wear"] || []).map((item) => {
                const isFav = !!favorites[item.id];
                return (
                  <div
                    key={item.id}
                    className="lift"
                    style={{
                      flex: "1 1 260px",
                      maxWidth: 290,
                      minWidth: 250,
                      background: "#ffffff",
                      borderRadius: 20,
                      border: "1px solid #f0ece1",
                      padding: 12,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                      cursor: "pointer",
                    }}
                  >
                    {/* Image Box */}
                    <div
                      style={{
                        position: "relative",
                        height: 250,
                        borderRadius: 14,
                        overflow: "hidden",
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                      }}
                    >
                      {/* Stitching Badge */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 10,
                          left: 10,
                          background: "rgba(35,30,25,0.8)",
                          backdropFilter: "blur(6px)",
                          color: "#ffffff",
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "5px 11px",
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <span style={{ fontSize: 11, color: "#c9a84c" }}>⚒</span>
                        {item.tag || "Stitching"}
                      </div>

                      {/* Heart Button */}
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        aria-label="Favorite design"
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "#ffffff",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={isFav ? "#e63946" : "none"}
                          stroke={isFav ? "#e63946" : "#666"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                    </div>

                    {/* Meta info */}
                    <div style={{ marginTop: 12, padding: "0 4px 4px" }}>
                      <div
                        className="font-serif"
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: "#2c2c2c",
                          marginBottom: 4,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#c9a84c",
                          }}
                        >
                          {item.price}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#2d6a4f",
                            background: "#e8f5e9",
                            padding: "3px 7px",
                            borderRadius: 5,
                            letterSpacing: "0.04em",
                          }}
                        >
                          CUSTOM FIT
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          BRIDAL FEATURE — full-bleed editorial
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/bridal-feature.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,12,8,0.68)",
          }}
        />
        <div
          className="section"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 20,
            }}
          >
            ✦ &nbsp; BRIDAL COLLECTION &nbsp; ✦
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: 700,
              marginBottom: 20,
            }}
          >
            Your Dream Bridal Look, Made to Measure
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 520,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Every bride deserves a garment that fits her story. Our master tailors work with you
            personally, from the first sketch to the final fitting.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/bridal" className="btn-gold">
              See Bridal Lookbook
            </Link>
            <Link href="/download" className="btn-ghost">
              Book Consultation on App
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff", position: "relative", overflow: "hidden" }}>

        <div className="section">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#c9a84c", marginBottom: 16 }}>
              ✦ &nbsp; THE PROCESS &nbsp; ✦
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#2c2c2c", lineHeight: 1.2, marginBottom: 16 }}>
              From Idea to <span style={{ color: "#c9a84c" }}>Doorstep</span>
            </h2>
            <p style={{ fontSize: 15, color: "#888", maxWidth: 480, margin: "0 auto" }}>
              A seamless experience designed around you, from the first tap to the final stitch.
            </p>
          </div>

          {/* Steps */}
          <div style={{ position: "relative" }}>
            {/* Connecting line — desktop only */}
            <div
              className="hidden lg:block"
              style={{
                position: "absolute",
                top: 44,
                left: "8%",
                right: "8%",
                height: 1,
                background: "repeating-linear-gradient(90deg, rgba(201,168,76,0.4) 0px, rgba(201,168,76,0.4) 8px, transparent 8px, transparent 18px)",
                zIndex: 0,
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5" style={{ position: "relative", zIndex: 1 }}>
              {[
                { n: "01", icon: "👗", title: "Select & Book", body: "Choose your garment type (Suit, Saree, Salwar, Pheran) & book on the app." },
                { n: "02", icon: "🏠", title: "Doorstep Visit", body: "Our expert tailor visits your home to take precise measurements." },
                { n: "03", icon: "🔐", title: "OTP & Pickup", body: "Secure digital OTP verification as we collect your fabric for stitching." },
                { n: "04", icon: "🪡", title: "Master Tailoring", body: "Fabric is taken to our warehouse where master artisans stitch your outfit." },
                { n: "05", icon: "⚡", title: "48-Hr Delivery", body: "Guaranteed delivery of your custom-fitted garment within 48 hours." },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className="lift"
                  style={{
                    background: "#faf7f3",
                    border: "1px solid #ede8e0",
                    borderTop: "2px solid #c9a84c",
                    borderRadius: 20,
                    padding: "28px 20px 24px",
                    position: "relative",
                    cursor: "default",
                  }}
                >
                  {/* Step number bubble */}
                  <div style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #c9a84c, #b8860b)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
                    position: "relative",
                    zIndex: 1,
                  }}>
                    <span className="font-serif" style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "0.05em" }}>{step.n}</span>
                  </div>

                  {/* Icon */}
                  <div style={{ fontSize: 26, marginBottom: 12, lineHeight: 1 }}>{step.icon}</div>

                  {/* Title */}
                  <div className="font-serif" style={{ fontSize: 16, fontWeight: 700, color: "#2c2c2c", marginBottom: 8, lineHeight: 1.3 }}>
                    {step.title}
                  </div>

                  {/* Body */}
                  <div style={{ fontSize: 12.5, color: "#777", lineHeight: 1.65 }}>
                    {step.body}
                  </div>

                  {/* Step connector arrow — desktop only */}
                  {i < 4 && (
                    <div
                      className="hidden lg:flex"
                      style={{
                        position: "absolute",
                        top: 40,
                        right: -11,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#fff",
                        border: "1.5px solid rgba(201,168,76,0.4)",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      <span style={{ color: "#c9a84c", fontSize: 10, lineHeight: 1 }}>›</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee banner */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 44, padding: "0 12px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: 24,
              padding: "12px 20px",
              fontSize: 13,
              color: "#2c2c2c",
              fontWeight: 600,
              flexWrap: "wrap",
              justifyContent: "center",
              textAlign: "center",
            }}>
              <span>✂️ You Provide The Fabric</span>
              <span className="hidden sm:inline" style={{ color: "#c9a84c" }}>•</span>
              <span>🏠 Doorstep Measurements</span>
              <span className="hidden sm:inline" style={{ color: "#c9a84c" }}>•</span>
              <span>⚡ 48-Hour Guaranteed Delivery</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/download" className="btn-gold">
              Start On The App
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          TESTIMONIALS — auto-scrolling
      ══════════════════════════════════════════ */}
      <TestimonialsScroll />

      {/* ══════════════════════════════════════════
          APP DOWNLOAD — THE MAIN CTA
      ══════════════════════════════════════════ */}
      <section className="grain-overlay" style={{ background: "#1e1a16", overflow: "hidden", position: "relative" }}>

        {/* Decorative rings */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />

        {/* Ambient gold glow orb behind the phone */}
        <div style={{ position: "absolute", top: "50%", right: "18%", transform: "translate(50%,-50%)", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none", zIndex: 0 }} />

        <div
          className="section flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* ── Left ── */}
          <div className="w-full lg:max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#c9a84c", marginBottom: 20 }}>
              ✦ &nbsp; THE FULL EXPERIENCE &nbsp; ✦
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              500+ Designs.
              <br />
              <span style={{ color: "#c9a84c" }}>One App.</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, maxWidth: 440, marginBottom: 40 }}>
              The website gives you a taste. The app gives you everything: full catalog, custom measurements,
              live chat with artisans, order tracking, and home consultations.
            </p>

            {/* App store badges — glass style */}
            <div
              className="justify-center lg:justify-start"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 28,
              }}
            >
              <a {...storeLinkProps(APP_STORE_URL)} className="badge-glass">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em" }}>Download on the</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>App Store</div>
                </div>
              </a>
              <a {...storeLinkProps(PLAY_STORE_URL)} className="badge-glass">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path fill="rgba(255,255,255,0.9)" d="M1.22 0C.847 0 .5.325.5.77v22.46c0 .445.347.77.72.77l.13-.022L12.54 12.5 1.35.022A.714.714 0 001.22 0z" />
                  <path fill="#fff" d="M23.25 11.5l-2.78-1.61-3.13 3.13L20.47 16l2.78-1.61A1.4 1.4 0 0024 13.2a1.4 1.4 0 00-.75-1.7z" />
                  <path fill="rgba(255,255,255,0.7)" d="M1.35.022L13.01 11.68l3.33-3.33L2.76.155A.75.75 0 001.35.022z" />
                  <path fill="rgba(255,255,255,0.9)" d="M1.35 23.978l11.66-11.498-3.33-3.33L1.35 23.978z" />
                </svg>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em" }}>Get it on</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* Feature chips */}
            <div
              className="justify-center lg:justify-start"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px 10px",
              }}
            >
              {[
                { icon: "✦", label: "500+ curated designs" },
                { icon: "💬", label: "Live tailor chat" },
                { icon: "📐", label: "Custom measurements" },
                { icon: "📦", label: "Order tracking" },
                { icon: "🏠", label: "Home visit booking" },
                { icon: "👰", label: "Bridal consultations" },
              ].map((f) => (
                <div key={f.label} className="feature-chip">
                  <span style={{ fontSize: 13 }}>{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: animated phone mockup ── */}
          <div style={{ flexShrink: 0 }} className="flex justify-center w-full lg:w-auto mt-4 lg:mt-0">
            <div className="phone-float" style={{ position: "relative" }}>
              {/* Phone frame */}
              <div style={{ width: 240, height: 480, borderRadius: 40, background: "#0d0d0d", border: "6px solid #2a2a2a", position: "relative", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)" }}>
                {/* Screen image */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/cat-womens-wear.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }} />
                {/* Screen overlay gradient */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)" }} />
                {/* Dynamic island notch */}
                <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 100, height: 28, borderRadius: 20, background: "#0d0d0d", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1a1a", border: "1px solid #333" }} />
                  <div style={{ width: 44, height: 12, borderRadius: 8, background: "#1a1a1a" }} />
                </div>
                {/* App UI elements */}
                <div style={{ position: "absolute", top: 56, left: 16, right: 16, zIndex: 5 }}>
                  <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>ELANZA</div>
                  <div style={{ fontSize: 7, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>From Fabric to Form</div>
                </div>
                {/* Bottom app label */}
                <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center", zIndex: 5, padding: "0 16px" }}>
                  <div style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: 10, padding: "8px 12px", backdropFilter: "blur(8px)" }}>
                    <div style={{ fontSize: 9, letterSpacing: "0.1em", color: "#c9a84c", fontWeight: 700 }}>FEATURED DESIGN</div>
                    <div className="font-serif" style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 2 }}>Crafted Just For You</div>
                  </div>
                </div>
              </div>
              {/* Reflection */}
              <div style={{ position: "absolute", bottom: -48, left: "50%", transform: "translateX(-50%)", width: 160, height: 24, background: "radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, transparent 70%)", filter: "blur(8px)" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
