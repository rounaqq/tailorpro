import Link from "next/link";

export const metadata = {
  title: "Help Center | Elanza - From Fabric to Form",
  description:
    "Elanza - From Fabric to Form Help Center: Get assistance with home visits, order tracking, measurements, fabric pickup, and customer support.",
};

export default function HelpPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 80,
          paddingBottom: 72,
          position: "relative",
          overflow: "hidden",
          background: "#1e1a16",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, rgba(30,26,22,0.95) 80%)",
          }}
        />

        <div
          className="section"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            <span>✦</span>
            <span>CUSTOMER SUPPORT</span>
            <span>✦</span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Elanza - From Fabric to Form <span style={{ color: "#c9a84c" }}>Help Center</span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              maxWidth: 560,
              margin: "0 auto 28px",
            }}
          >
            How can we assist you today? Browse instant guides or reach out directly to our Srinagar support desk.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: "#fcfbf9", padding: "64px 0 96px" }}>
        <div className="section" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: 24,
              marginBottom: 48,
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #ede7dd",
                padding: "32px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>📋</div>
              <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 8 }}>
                FAQs & Answers
              </h3>
              <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.7, marginBottom: 20 }}>
                Find quick answers regarding home-visit scheduling, OTP verification, trial fittings, and payment options.
              </p>
              <Link href="/faqs" className="btn-gold" style={{ fontSize: 13, padding: "10px 20px" }}>
                Browse FAQs
              </Link>
            </div>

            {/* Card 2 */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #ede7dd",
                padding: "32px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>📜</div>
              <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 8 }}>
                Terms & Policies
              </h3>
              <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.7, marginBottom: 20 }}>
                Review our refund guidelines, cancellation windows, fabric damage liability rules, and tailor safety standards.
              </p>
              <Link href="/terms-of-use" className="btn-gold" style={{ fontSize: 13, padding: "10px 20px" }}>
                View Policies
              </Link>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #ede7dd",
                padding: "32px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>📱</div>
              <h3 className="font-serif" style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 8 }}>
                In-App Support
              </h3>
              <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.7, marginBottom: 20 }}>
                Chat live with our support team, track ongoing orders, or reschedule tailor visits directly inside the mobile app.
              </p>
              <Link href="/download" className="btn-gold" style={{ fontSize: 13, padding: "10px 20px" }}>
                Get The App
              </Link>
            </div>
          </div>

          {/* Contact Box */}
          <div
            style={{
              background: "linear-gradient(135deg, #1e1a16 0%, #2a241e 100%)",
              borderRadius: 24,
              padding: "40px 32px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Direct Contact Channels
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 28px" }}>
              Our customer care desk is open Monday to Saturday, 9:00 AM to 7:00 PM IST.
            </p>

            <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 12, color: "#c9a84c", fontWeight: 700 }}>EMAIL US</div>
                <a href="mailto:hello@elanza.in" style={{ fontSize: 16, color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                  hello@elanza.in
                </a>
              </div>

              <div>
                <div style={{ fontSize: 12, color: "#c9a84c", fontWeight: 700 }}>CALL US</div>
                <a href="tel:+919419000000" style={{ fontSize: 16, color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                  +91 94190 00000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
