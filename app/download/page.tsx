import { APP_STORE_URL, PLAY_STORE_URL, storeLinkProps } from "@/lib/storeLinks";
import Link from "next/link";
import PhoneSlider from "@/components/PhoneSlider";

const exclusiveFeatures = [
  {
    icon: "◈",
    title: "500+ Curated Designs",
    body: "Browse the full catalog across Women's Wear, Men's Wear, Bridal, Pherans, and Kids. Filter by occasion, fabric, and price.",
  },
  {
    icon: "✦",
    title: "Custom Measurements",
    body: "Save your exact measurements in the app. Share with any of our tailors in seconds, or book a free home visit.",
  },
  {
    icon: "❋",
    title: "Live Tailor Chat",
    body: "Message our artisans directly. Discuss fabrics, embroidery styles, and personalisation before you commit.",
  },
  {
    icon: "◇",
    title: "Real-Time Order Tracking",
    body: "From cutting to stitching to delivery, see exactly where your outfit is at every stage.",
  },
  {
    icon: "△",
    title: "Bridal Consultations",
    body: "Book a dedicated bridal session with our senior designers. Available in-person and via video call.",
  },
  {
    icon: "○",
    title: "Saved Wishlist",
    body: "Create mood boards, save your favourite designs, and share with family before placing your order.",
  },
];

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 72,
          background: "#1e1a16",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative rings */}
        {[600, 400, 240].map((size) => (
          <div
            key={size}
            style={{
              position: "absolute",
              top: "50%",
              right: -size / 3,
              transform: "translateY(-50%)",
              width: size,
              height: size,
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.1)",
              pointerEvents: "none",
            }}
          />
        ))}

        <div
          className="section download-hero"
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#c9a84c",
                marginBottom: 20,
              }}
            >
              ELANZA - FROM FABRIC TO FORM APP
            </div>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.05,
                marginBottom: 24,
              }}
            >
              The Full
              <br />
              <span style={{ color: "#c9a84c" }}>Elanza - From Fabric to Form</span>
              <br />
              Experience
            </h1>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.65)",
                maxWidth: 460,
                lineHeight: 1.85,
                marginBottom: 40,
              }}
            >
              This website shows you the surface. The app is where the real experience lives, with
              500+ designs, custom measurements, live artisan chat, and doorstep delivery.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
              <a
                {...storeLinkProps(APP_STORE_URL)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "14px 22px",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#2c2c2c">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div style={{ fontSize: 11, color: "#999" }}>Download on the</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#2c2c2c" }}>App Store</div>
                </div>
              </a>

              <a
                {...storeLinkProps(PLAY_STORE_URL)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "14px 22px",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <path fill="#4CAF50" d="M1.22 0C.847 0 .5.325.5.77v22.46c0 .445.347.77.72.77l.13-.022L12.54 12.5 1.35.022A.714.714 0 001.22 0z" />
                  <path fill="#FFC107" d="M23.25 11.5l-2.78-1.61-3.13 3.13L20.47 16l2.78-1.61A1.4 1.4 0 0024 13.2a1.4 1.4 0 00-.75-1.7z" />
                  <path fill="#FF3D00" d="M1.35.022L13.01 11.68l3.33-3.33L2.76.155A.75.75 0 001.35.022z" />
                  <path fill="#3DDC84" d="M1.35 23.978l11.66-11.498-3.33-3.33L1.35 23.978z" />
                </svg>
                <div>
                  <div style={{ fontSize: 11, color: "#999" }}>Get it on</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#2c2c2c" }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", gap: 36 }}>
              {[
                { n: "10K+", l: "Downloads" },
                { n: "4.9★", l: "App Store Rating" },
                { n: "Free", l: "To Download" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="font-serif"
                    style={{ fontSize: 26, fontWeight: 800, color: "#c9a84c", lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="hidden lg:block" style={{ flexShrink: 0, paddingBottom: 40 }}>
            <div
              style={{
                width: 260,
                height: 520,
                borderRadius: 44,
                background: "#111",
                border: "7px solid #2a2a2a",
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <PhoneSlider />
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 80,
                  height: 24,
                  borderRadius: 12,
                  background: "#111",
                  zIndex: 10,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's in the app */}
      <section style={{ background: "#fff" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              WHY DOWNLOAD
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Everything You Can&apos;t Do on This Website
            </h2>
            <p style={{ fontSize: 14, color: "#aaa", marginTop: 12, maxWidth: 440, margin: "12px auto 0" }}>
              The website tells the story. The app lets you live it.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {exclusiveFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "32px",
                  borderRadius: 18,
                  background: "var(--bg)",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    color: "#c9a84c",
                    flexShrink: 0,
                    lineHeight: 1,
                    marginTop: 3,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 17, fontWeight: 700, color: "#2c2c2c", marginBottom: 8 }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final download CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #c9a84c 0%, #b8860b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          className="section"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Ready to Wear Kashmir?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 400,
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            Download Elanza - From Fabric to Form. It&apos;s free, it&apos;s fast, and your first consultation
            is on us.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              {...storeLinkProps(APP_STORE_URL)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#fff",
                borderRadius: 14,
                padding: "12px 22px",
                textDecoration: "none",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#2c2c2c">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div style={{ fontSize: 10, color: "#999" }}>Download on the</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#2c2c2c" }}>App Store</div>
              </div>
            </a>
            <a
              {...storeLinkProps(PLAY_STORE_URL)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#fff",
                borderRadius: 14,
                padding: "12px 22px",
                textDecoration: "none",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4CAF50" d="M1.22 0C.847 0 .5.325.5.77v22.46c0 .445.347.77.72.77l.13-.022L12.54 12.5 1.35.022A.714.714 0 001.22 0z" />
                <path fill="#FFC107" d="M23.25 11.5l-2.78-1.61-3.13 3.13L20.47 16l2.78-1.61A1.4 1.4 0 0024 13.2a1.4 1.4 0 00-.75-1.7z" />
                <path fill="#FF3D00" d="M1.35.022L13.01 11.68l3.33-3.33L2.76.155A.75.75 0 001.35.022z" />
                <path fill="#3DDC84" d="M1.35 23.978l11.66-11.498-3.33-3.33L1.35 23.978z" />
              </svg>
              <div>
                <div style={{ fontSize: 10, color: "#999" }}>Get it on</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#2c2c2c" }}>Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
