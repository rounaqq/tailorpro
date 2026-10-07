"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/cat-bridal.jpg", caption: "Bridal Lehenga", position: "center" },
  { src: "/bridal-gown.png", caption: "Artisan Gown", position: "center top" },
  { src: "/lehenga-choli-set.png", caption: "Lehenga Choli Set", position: "center" },
  { src: "/ghagra-choli-set.jpg", caption: "Ghagra Choli", position: "center" },
  { src: "/bridal-feature.jpg", caption: "Hand Embroidery", position: "70% center" },
];

const INTERVAL = 3000;
const SLIDE_MS = 700;

// Auto-sliding image carousel that fills a phone-mockup screen.
export default function PhoneSlider() {
  // index runs 0..slides.length; slides.length is a clone of slide 0 for a seamless loop
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      setAnimate(true);
      setIndex((i) => Math.min(i + 1, slides.length));
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  // after sliding onto the clone, jump back to the real first slide without animating
  useEffect(() => {
    if (index !== slides.length) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE_MS);
    return () => clearTimeout(id);
  }, [index]);

  const active = index % slides.length;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "absolute", inset: 0 }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: animate ? `transform ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)` : "none",
        }}
      >
        {[...slides, slides[0]].map((s, i) => (
          <div
            key={i}
            role="img"
            aria-label={s.caption}
            aria-hidden={i === slides.length || undefined}
            style={{
              flex: "0 0 100%",
              height: "100%",
              backgroundImage: `url(${s.src})`,
              backgroundSize: "cover",
              backgroundPosition: s.position,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 78%, rgba(0,0,0,0.9) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 22,
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontSize: 9,
            letterSpacing: "0.15em",
            color: "#c9a84c",
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          ELANZA
        </div>
        <div
          key={active}
          className="font-serif slide-caption"
          style={{ fontSize: 16, fontWeight: 700, color: "#fff", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
        >
          {slides[active].caption}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
          {slides.map((s, i) => (
            <button
              key={s.src}
              aria-label={`Show ${s.caption}`}
              onClick={() => {
                setAnimate(true);
                setIndex(i);
              }}
              style={{
                width: i === active ? 16 : 6,
                height: 6,
                borderRadius: 3,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === active ? "#c9a84c" : "rgba(255,255,255,0.45)",
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
