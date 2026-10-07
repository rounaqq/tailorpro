import Link from "next/link";

const lookbookImages = [
  {
    image: "/sharara-set-embroidery.jpg",
    caption: "Sharara Set With Embroidery",
    tag: "Sharara Set",
  },
  {
    image: "/bridal-gown.png",
    caption: "Heavy Silver Embellished Bridal Gown with delicate hand embroidery",
    tag: "Artisan Gown",
  },
  {
    image: "/velvet-lehenga-choli.jpg",
    caption: "Velvet Lehenga Choli",
    tag: "Bespoke Lehenga",
  },
];

const experience = [
  {
    title: "Personal Bridal Consultation",
    body: "A dedicated session with our lead designer to understand your vision, preferences, and the story behind your big day.",
    icon: "◈",
  },
  {
    title: "3 Rounds of Fitting",
    body: "We don't stop at one fitting. Your bridal outfit goes through at least three rounds of adjustments to ensure a flawless silhouette.",
    icon: "✦",
  },
  {
    title: "Custom Embroidery",
    body: "Your initials, a date, or a motif of significance, woven into the design by our artisans.",
    icon: "❋",
  },
  {
    title: "Ceremony to Reception",
    body: "We coordinate your entire bridal wardrobe, from the wedding look to mehendi, sangeet, and reception outfits.",
    icon: "◇",
  },
];

export default function BridalPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO (Compact & Mobile Responsive)
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          height: "75vh",
          minHeight: 520,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/bridal-feature.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,6,4,0.68)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: 680,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#c9a84c",
              marginBottom: 16,
            }}
          >
            ✦ &nbsp; BRIDAL COLLECTION &nbsp; ✦
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(30px, 4.5vw, 58px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 18,
            }}
          >
            Made for the
            <br />
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>
              Most Important Day
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.8,
              maxWidth: 480,
              margin: "0 auto 36px",
            }}
          >
            Every bride deserves a garment that fits her story perfectly.
            Our master tailors work with you personally, from the first sketch to the final fitting.
          </p>
          <Link href="/download" className="btn-gold">
            Book Your Bridal Consultation
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND PROMISE (With User's Royal Bridal Lehenga Image)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          className="section"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 56,
            alignItems: "center",
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 14,
              }}
            >
              THE ELANZA - FROM FABRIC TO FORM PROMISE
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(24px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "#2c2c2c",
                lineHeight: 1.25,
                marginBottom: 18,
              }}
            >
              A Bridal Experience
              <br />as Special as You
            </h2>
            <div className="gold-rule" style={{ marginBottom: 24 }} />
            <p
              style={{
                fontSize: 15,
                color: "#666",
                lineHeight: 1.85,
                marginBottom: 16,
              }}
            >
              Bridal wear at Elanza - From Fabric to Form is not a transaction; it&apos;s a collaboration. We take time
              to understand you: your family traditions, your aesthetic, your comfort level, and the
              emotions you want to carry on your wedding day.
            </p>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.85, marginBottom: 32 }}>
              The result is a garment that doesn&apos;t just look beautiful in photographs. It feels
              like a second skin.
            </p>
            <Link href="/download" className="btn-gold">
              Start On The App
            </Link>
          </div>

          {/* Bridal Showcase Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
              margin: "0 auto",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(0,0,0,0.14)",
              border: "1px solid #f0ece3",
              background: "#faf7f3",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: 540 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bridal.png"
                alt="Bridal Collection Showcase"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRIDAL EXPERIENCE STEPS
      ══════════════════════════════════════════ */}
      <section style={{ background: "#faf7f3", padding: "80px 0" }}>
        <div className="section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              YOUR JOURNEY
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              The Bridal Experience
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: 20,
            }}
          >
            {experience.map((e) => (
              <div
                key={e.title}
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "36px 28px",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.04)",
                  border: "1px solid #f0ece3",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: "#c9a84c",
                    marginBottom: 16,
                    lineHeight: 1,
                  }}
                >
                  {e.icon}
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: 18, fontWeight: 700, color: "#2c2c2c", marginBottom: 10 }}
                >
                  {e.title}
                </h3>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.75 }}>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRIDAL ARCHIVE LOOKBOOK (Responsive Grid)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div className="section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              LOOKBOOK
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              A Few Pieces from Our Bridal Archive
            </h2>
            <p style={{ fontSize: 14, color: "#888", marginTop: 10 }}>
              Every piece shown was crafted for a real bride. Yours awaits in the app.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {lookbookImages.map((img) => (
              <div
                key={img.caption}
                className="lift"
                style={{
                  height: 380,
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                  border: "1px solid #f0ece3",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${img.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,10,5,0.8) 0%, rgba(0,0,0,0.1) 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "rgba(201,168,76,0.9)",
                    backdropFilter: "blur(4px)",
                    color: "#ffffff",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "5px 12px",
                    borderRadius: 20,
                    letterSpacing: "0.06em",
                  }}
                >
                  {img.tag}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px",
                  }}
                >
                  <div
                    className="font-serif"
                    style={{ fontSize: 16, color: "#fff", fontWeight: 600, lineHeight: 1.4 }}
                  >
                    {img.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 52 }}>
            <p style={{ fontSize: 14, color: "#888", marginBottom: 20 }}>
              These are just a glimpse. The full bridal catalog lives in the app.
            </p>
            <Link href="/download" className="btn-gold">
              Explore Full Bridal Catalog in App
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL BRIDAL CTA BANNER
      ══════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1a16 0%, #2c2018 100%)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          padding: "80px 0",
        }}
      >
        <div className="section" style={{ textAlign: "center", padding: "0 24px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 18,
            }}
          >
            ✦ YOUR STORY BEGINS HERE ✦
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(26px, 4vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 18,
            }}
          >
            Ready to Design Your Bridal Look?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 460,
              margin: "0 auto 36px",
              lineHeight: 1.8,
            }}
          >
            Download the app, browse the bridal catalog, and book your free consultation with our
            senior designer.
          </p>
          <Link href="/download" className="btn-gold">
            Download Elanza App
          </Link>
        </div>
      </section>
    </>
  );
}
