import Link from "next/link";

const mainCollections = [
  {
    title: "Women's Wear",
    sub: "Everyday & Festive Ethnic Outfits",
    image: "/cat-womens-wear.jpg",
    itemsCount: "120+ Designs",
    tag: "Custom Stitching",
    position: "center 20%",
    href: "/?category=Women%27s%20Wear",
  },
  {
    title: "Bridal Collection",
    sub: "Lehengas, Sarees & Gowns",
    image: "/cat-bridal.jpg",
    itemsCount: "80+ Designs",
    tag: "Bespoke Couture",
    position: "center 25%",
    href: "/bridal",
  },
  {
    title: "Pherans",
    sub: "Kashmir's Signature Garment",
    image: "/cat-pheran.jpg",
    itemsCount: "60+ Designs",
    tag: "Aari & Tilla Work",
    position: "center 20%",
    href: "/?category=Pherans",
  },
  {
    title: "Men's Wear",
    sub: "Sherwanis & Pathani Sets",
    image: "/cat-mens-wear.jpg",
    itemsCount: "90+ Designs",
    tag: "Master Tailored",
    position: "center 15%",
    href: "/?category=Men%27s%20Wear",
  },
  {
    title: "Kids Wear",
    sub: "Festive & Occasion Outfits",
    image: "/cat-kids-wear.jpg",
    itemsCount: "50+ Designs",
    tag: "Junior Collection",
    position: "35% center",
    href: "/?category=Kids%20Wear",
  },
];

const pillars = [
  {
    title: "Custom Fit, Always",
    body: "Nothing leaves our ateliers without going through multiple fittings. Every garment is adjusted until it's perfect, because your body is unique and your clothes should be too.",
  },
  {
    title: "Sourced from Kashmir",
    body: "We use only the finest fabrics from Kashmir's renowned mills, such as pure pashmina, hand-woven silk, and premium cotton. Sourcing locally means supporting artisan communities.",
  },
  {
    title: "Generational Craftsmanship",
    body: "Our embroidery specialists are second and third-generation artisans. Techniques like sozni, tilla, and kasida are not just skills; they are living traditions.",
  },
];

export default function CollectionsPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 110,
          paddingBottom: 72,
          background: "#1e1a16",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/hero-fabric.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.25,
          }}
        />
        <div
          className="section-sm"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 16,
            }}
          >
            ✦ &nbsp; OUR COLLECTIONS &nbsp; ✦
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(34px, 5.5vw, 68px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Crafted for Every Occasion
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: 540,
              margin: "0 auto 36px",
              lineHeight: 1.8,
            }}
          >
            Explore our signature bespoke collections featuring authentic Kashmiri craftsmanship,
            handcrafted embroidery, and made-to-measure elegance.
          </p>
          <Link href="/download" className="btn-gold">
            Explore 500+ Designs in App
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COLLECTIONS GRID — HOMEPAGE MATCHED
      ══════════════════════════════════════════ */}
      <section style={{ background: "#faf7f3", padding: "72px 0" }}>
        <div className="section" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#c9a84c", marginBottom: 10 }}>
              ✦ &nbsp; BESPOKE CATEGORIES &nbsp; ✦
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Our Master Collections
            </h2>
            <p style={{ fontSize: 14, color: "#888", marginTop: 10, maxWidth: 460, margin: "10px auto 0" }}>
              Select a collection below to view popular custom stitching designs and styles.
            </p>
          </div>

          {/* Responsive Collection Cards Grid */}
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
            {mainCollections.map((col) => (
              <Link
                key={col.title}
                href={col.href}
                className="lift"
                style={{
                  position: "relative",
                  flex: "1 1 310px",
                  maxWidth: 320,
                  minWidth: 260,
                  height: 340,
                  borderRadius: 20,
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #ede8df",
                  display: "block",
                }}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${col.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: col.position,
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(15,10,5,0.85) 0%, rgba(15,10,5,0.2) 60%, rgba(0,0,0,0.1) 100%)",
                  }}
                />

                {/* Top Badge */}
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
                    padding: "6px 12px",
                    borderRadius: 20,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {col.tag}
                </div>

                {/* Bottom Content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: "#c9a84c",
                      marginBottom: 6,
                    }}
                  >
                    {col.itemsCount.toUpperCase()}
                  </div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 24, fontWeight: 700, color: "#ffffff", marginBottom: 6 }}
                  >
                    {col.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>
                    {col.sub}
                  </p>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#c9a84c",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Explore Collection <span style={{ fontSize: 14 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Banner Nudge */}
          <div
            className="banner-nudge"
            style={{
              marginTop: 64,
              padding: "40px 32px",
              borderRadius: 24,
              background: "#ffffff",
              border: "1px solid #ede7dc",
              boxShadow: "0 10px 32px rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#c9a84c",
                  marginBottom: 8,
                }}
              >
                ✦ &nbsp; CRAFTED IN KASHMIR &nbsp; ✦
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: 26, fontWeight: 700, color: "#2c2c2c", marginBottom: 8 }}
              >
                500+ Custom Styles Await
              </h3>
              <p style={{ fontSize: 14, color: "#777", maxWidth: 520, lineHeight: 1.7 }}>
                Filter by fabric, occasion, neckline, and embroidery pattern. Connect directly with master artisans inside the app.
              </p>
            </div>
            <Link href="/download" className="btn-gold" style={{ textAlign: "center" }}>
              Download Elanza App
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CRAFT STANDARDS
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
              OUR STANDARDS
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Why Elanza - From Fabric to Form is Different
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  background: "#faf7f3",
                  borderRadius: 20,
                  padding: "36px 28px",
                  border: "1px solid #f0ece3",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.03)",
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
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
