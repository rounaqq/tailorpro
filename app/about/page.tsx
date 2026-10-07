import Link from "next/link";

const team = [
  {
    name: "Gulzar Ahmed",
    role: "Founder & Master Tailor",
    bio: "35+ years crafting bespoke garments in Srinagar. Gulzar founded Elanza - From Fabric to Form to preserve Kashmiri artisanship for the next generation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Noor Fatima",
    role: "Lead Fashion Designer",
    bio: "Trained in Mumbai, rooted in Kashmir. Noor blends contemporary silhouettes with traditional Kashmiri motifs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Iqbal Dar",
    role: "Embroidery Specialist",
    bio: "Third-generation artisan. Iqbal's sozni and tilla work has featured in international fashion exhibitions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

const values = [
  {
    title: "Authenticity",
    body: "We use only genuine Kashmiri materials and authentic embroidery techniques. No shortcuts, no substitutes.",
  },
  {
    title: "Precision",
    body: "Every garment is measured, cut, and fitted multiple times. A perfect fit is not optional; it is the minimum.",
  },
  {
    title: "Community",
    body: "We employ artisans from Kashmir's weaving and embroidery communities, preserving livelihoods and traditions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO (With Boutique Studio Background)
      ══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 110,
          paddingBottom: 80,
          position: "relative",
          overflow: "hidden",
          background: "#181410",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/about-boutique.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(24,20,16,0.95) 0%, rgba(24,20,16,0.6) 60%, rgba(24,20,16,0.85) 100%)",
          }}
        />
        <div
          className="section-sm"
          style={{
            position: "relative",
            zIndex: 1,
            paddingLeft: 24,
            paddingRight: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 18,
            }}
          >
            ✦ &nbsp; OUR STORY &nbsp; ✦
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(34px, 5.5vw, 68px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: 700,
              marginBottom: 20,
            }}
          >
            Rooted in Kashmir,
            <br />
            <span style={{ color: "#c9a84c" }}>Made for the World</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "rgba(255,255,255,0.72)",
              maxWidth: 540,
              lineHeight: 1.85,
            }}
          >
            For over three decades, we have been turning Kashmir&apos;s rich textile heritage into
            garments that people wear on their most meaningful days.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND STORY — BOUTIQUE STUDIO SHOWCASE
      ══════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div
          className="section"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 56,
            alignItems: "center",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Left: story */}
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
              SINCE 1992
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(24px, 3vw, 38px)",
                fontWeight: 700,
                color: "#2c2c2c",
                lineHeight: 1.25,
                marginBottom: 18,
              }}
            >
              A Workshop in Srinagar,
              <br />A Vision for the Valley
            </h2>
            <div className="gold-rule" style={{ marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 18 }}>
              Gulzar Ahmed opened his first workshop on Residency Road, Srinagar, in 1992. There
              were no apps, no websites, just a measuring tape, a sewing machine, and a reputation
              for getting the fit exactly right.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 18 }}>
              Over the following decades, word spread. Brides came from Delhi. Families from Jammu
              sent their daughters for bridal consultations. The workshop grew, but the philosophy
              never changed: every garment is made for one person, fitted to one body, finished by hand.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9 }}>
              Today, Elanza - From Fabric to Form has over 50 artisans, a design studio, and an app that brings this
              experience to anyone across India. The workshop on Residency Road still runs. The measuring
              tape still matters most.
            </p>
          </div>

          {/* Right: Studio interior image + stats */}
          <div>
            <div
              style={{
                height: 420,
                borderRadius: 24,
                overflow: "hidden",
                backgroundImage: "url(/about-boutique.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                border: "1px solid #f0ece3",
                marginBottom: 24,
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 16,
                padding: "24px",
                background: "#faf7f3",
                borderRadius: 20,
                border: "1px solid #f0ece3",
              }}
            >
              {[
                { n: "1992", l: "Founded" },
                { n: "50+", l: "Artisans" },
                { n: "10K+", l: "Garments" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div
                    className="font-serif"
                    style={{ fontSize: 26, fontWeight: 800, color: "#c9a84c" }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALUES (Mobile Responsive Grid)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#faf7f3", padding: "80px 0" }}>
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
              WHAT WE STAND FOR
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Our Values
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "36px 28px",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.04)",
                  border: "1px solid #f0ece3",
                }}
              >
                <div
                  className="font-serif"
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    color: "#e2d6be",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 12 }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.8 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TEAM (Mobile Responsive Grid)
      ══════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div className="section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              THE PEOPLE
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Meet the Artisans
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "#faf7f3",
                  borderRadius: 20,
                  padding: 16,
                  border: "1px solid #f0ece3",
                }}
              >
                <div
                  style={{
                    height: 320,
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    marginBottom: 16,
                  }}
                />
                <div
                  className="font-serif"
                  style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 4 }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#c9a84c",
                    marginBottom: 10,
                  }}
                >
                  {member.role.toUpperCase()}
                </div>
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL ABOUT CTA
      ══════════════════════════════════════════ */}
      <section style={{ background: "#181410", padding: "80px 0" }}>
        <div className="section" style={{ textAlign: "center", padding: "0 24px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 16,
            }}
          >
            ✦ EXPERIENCE ELANZA - FROM FABRIC TO FORM ✦
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(26px, 4vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Experience it for Yourself
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 440,
              margin: "0 auto 36px",
              lineHeight: 1.8,
            }}
          >
            Download the app and connect with our master artisans directly.
          </p>
          <Link href="/download" className="btn-gold">
            Download Elanza App
          </Link>
        </div>
      </section>
    </>
  );
}
