import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Elanza - From Fabric to Form",
  description:
    "Elanza - From Fabric to Form's Privacy Policy describes how we collect, protect, and use your personal information and measurement data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Header */}
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
            <span>DATA PROTECTION & PRIVACY</span>
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
            Privacy <span style={{ color: "#c9a84c" }}>Policy</span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              maxWidth: 580,
              margin: "0 auto 20px",
            }}
          >
            At Elanza - From Fabric to Form, we value your privacy and are committed to protecting your personal information.
          </p>

          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              color: "#c9a84c",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.25)",
              padding: "6px 16px",
              borderRadius: 20,
            }}
          >
            Last Updated: September 2026
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: "#fcfbf9", padding: "64px 0 96px" }}>
        <div
          className="section"
          style={{
            maxWidth: 840,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {/* Overview & Collection */}
          <article
            style={{
              background: "#ffffff",
              borderRadius: 20,
              border: "1px solid #ede7dd",
              padding: "36px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#c9a84c", marginBottom: 8 }}>
              SECTION 01
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 16 }}
            >
              Information We Collect & Privacy Commitment
            </h2>
            <p style={{ fontSize: 14.5, color: "#444", lineHeight: 1.8, marginBottom: 16 }}>
              At Elanza - From Fabric to Form, we value your privacy and are committed to protecting your personal information. We collect only the information necessary to provide our stitching services, including your name, contact details, address, body measurements, order history, and payment information.
            </p>

            <div style={{ background: "rgba(201,168,76,0.06)", borderLeft: "3px solid #c9a84c", padding: "16px 20px", borderRadius: "0 12px 12px 0", marginBottom: 16 }}>
              <div style={{ fontSize: 13.5, color: "#2c2c2c", lineHeight: 1.7, fontWeight: 600 }}>
                Payment Security:
              </div>
              <div style={{ fontSize: 13.5, color: "#555", lineHeight: 1.7 }}>
                Payment details are processed securely through our payment gateway partners and are not stored on Elanza - From Fabric to Form&apos;s servers.
              </div>
            </div>

            <div style={{ background: "rgba(201,168,76,0.06)", borderLeft: "3px solid #c9a84c", padding: "16px 20px", borderRadius: "0 12px 12px 0" }}>
              <div style={{ fontSize: 13.5, color: "#2c2c2c", lineHeight: 1.7, fontWeight: 600 }}>
                Body Measurement Privacy:
              </div>
              <div style={{ fontSize: 13.5, color: "#555", lineHeight: 1.7 }}>
                Body measurements are treated as sensitive information and are accessible only to your assigned tailor and the Admin.
              </div>
            </div>
          </article>

          {/* Usage */}
          <article
            style={{
              background: "#ffffff",
              borderRadius: 20,
              border: "1px solid #ede7dd",
              padding: "36px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#c9a84c", marginBottom: 8 }}>
              SECTION 02
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 16 }}
            >
              How Your Information is Used
            </h2>
            <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
              Your information is used strictly to:
            </p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
              <li>Create and manage your account.</li>
              <li>Schedule and manage home visits for measurement, fabric pickup, and delivery.</li>
              <li>Process payments and refunds.</li>
              <li>Send order confirmations, reminders, and promotional offers.</li>
              <li>Improve our services and customer experience.</li>
              <li>Comply with applicable legal and regulatory requirements.</li>
            </ul>
          </article>

          {/* Third-Party Sharing */}
          <article
            style={{
              background: "#ffffff",
              borderRadius: 20,
              border: "1px solid #ede7dd",
              padding: "36px 32px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#c9a84c", marginBottom: 8 }}>
              SECTION 03
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 16 }}
            >
              Data Sharing & Non-Disclosure
            </h2>
            <p style={{ fontSize: 14.5, color: "#444", lineHeight: 1.8, marginBottom: 16 }}>
              Elanza - From Fabric to Form does not sell customer data to third parties. Information is shared only with authorized tailors and trusted service providers when necessary to deliver the requested services.
            </p>
          </article>

          {/* Bottom Callout */}
          <div
            style={{
              background: "linear-gradient(135deg, #1e1a16 0%, #2a241e 100%)",
              borderRadius: 24,
              padding: "36px 32px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h3 className="font-serif" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
              Questions About Privacy?
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>
              Review our Terms of Use or contact our compliance desk at hello@elanza.in
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/terms-of-use" className="btn-gold">
                View Terms & Conditions
              </Link>
              <Link href="/help" className="btn-ghost">
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
