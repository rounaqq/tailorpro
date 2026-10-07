import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Elanza - From Fabric to Form",
  description:
    "Read Elanza - From Fabric to Form's Terms & Conditions, Refund Policy, Cancellation & Rescheduling, Fabric Handling, Safety, and Payment policies.",
};

const sections = [
  { id: "terms", title: "1. Terms & Conditions" },
  { id: "refund", title: "2. Refund Policy" },
  { id: "cancellation", title: "3. Cancellation & Rescheduling" },
  { id: "fabric", title: "4. Fabric Handling & Liability" },
  { id: "safety", title: "5. Safety Policy" },
  { id: "payment", title: "6. Payment Policy" },
  { id: "liability", title: "7. Limitation of Liability" },
];

export default function TermsPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO HEADER
      ══════════════════════════════════════════ */}
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
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
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
            <span>LEGAL & POLICIES</span>
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
            Terms of Use & <span style={{ color: "#c9a84c" }}>Service Policies</span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              maxWidth: 560,
              margin: "0 auto 20px",
            }}
          >
            Please read these terms and guidelines carefully. By accessing or using the Elanza - From Fabric to Form mobile application or platform, you agree to be bound by these policies.
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

      {/* ══════════════════════════════════════════
          MAIN CONTENT WITH SIDEBAR NAVIGATION
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fcfbf9", padding: "64px 0 96px" }}>
        <div
          className="section terms-layout"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Sticky Sidebar Navigation */}
          <aside
            style={{
              position: "sticky",
              top: 96,
              background: "#ffffff",
              borderRadius: 18,
              border: "1px solid #ede7dd",
              padding: "24px 20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#c9a84c",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              TABLE OF CONTENTS
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    fontSize: 13,
                    color: "#555",
                    textDecoration: "none",
                    padding: "6px 10px",
                    borderRadius: 8,
                    transition: "all 0.2s ease",
                    fontWeight: 500,
                  }}
                  className="hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.06)]"
                >
                  {s.title}
                </a>
              ))}
            </nav>

            <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid #f2ebe1" }}>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>
                Have questions about our terms?
              </div>
              <Link
                href="/faqs"
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#c9a84c",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                View FAQs →
              </Link>
            </div>
          </aside>

          {/* Main Legal Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {/* Section 1: Terms & Conditions */}
            <article
              id="terms"
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
                style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 20 }}
              >
                Terms & Conditions
              </h2>
              <p style={{ fontSize: 14.5, color: "#666", lineHeight: 1.8, marginBottom: 20 }}>
                By accessing or using the Elanza - From Fabric to Form application, you agree to comply with and be bound by these Terms & Conditions:
              </p>

              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
                <li>Users must provide accurate personal information and measurements during registration and booking.</li>
                <li>Orders are confirmed only after successful advance payment (except Cash on Delivery orders) and tailor assignment.</li>
                <li>Customers are responsible for ensuring that the service location is safe and accessible.</li>
                <li>Customers are responsible for providing sufficient fabric of suitable quality for the requested garment.</li>
                <li>Customers must treat tailors with respect and professionalism.</li>
                <li>Elanza - From Fabric to Form reserves the right to refuse service or suspend accounts for fraudulent, abusive, or inappropriate behaviour.</li>
                <li>Service prices displayed in the application are subject to change without prior notice.</li>
                <li>Elanza - From Fabric to Form is a platform connecting customers with verified tailoring professionals and is not liable for delays caused by unforeseen circumstances beyond its reasonable control.</li>
              </ul>
            </article>

            {/* Section 2: Refund Policy */}
            <article
              id="refund"
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
                style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 20 }}
              >
                Refund Policy
              </h2>
              <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
                Our refund policy ensures fair resolution for cancellations and service modifications:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 16, marginBottom: 24 }}>
                <div style={{ background: "#faf8f5", padding: "20px", borderRadius: 14, border: "1px solid #eee5d8" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#2c2c2c", marginBottom: 4 }}>100% Refund</div>
                  <div style={{ fontSize: 13, color: "#777" }}>Cancellations 12 hours or more before the scheduled visit.</div>
                </div>

                <div style={{ background: "#faf8f5", padding: "20px", borderRadius: 14, border: "1px solid #eee5d8" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#2c2c2c", marginBottom: 4 }}>50% Refund</div>
                  <div style={{ fontSize: 13, color: "#777" }}>Cancellations made between 12 and 6 hours before the visit.</div>
                </div>

                <div style={{ background: "#faf8f5", padding: "20px", borderRadius: 14, border: "1px solid #eee5d8" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#d9534f", marginBottom: 4 }}>No Refund</div>
                  <div style={{ fontSize: 13, color: "#777" }}>Bookings cancelled within 6 hours of the scheduled visit.</div>
                </div>
              </div>

              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
                <li>If cancelled after fabric pickup but before stitching begins, the fabric is returned and the stitching charge alone is refunded, less a handling fee.</li>
                <li>Refunds are processed only to the original payment method after approval by the Elanza - From Fabric to Form Admin.</li>
                <li>Refund processing times may vary depending on the payment provider.</li>
              </ul>
            </article>

            {/* Section 3: Cancellation & Rescheduling */}
            <article
              id="cancellation"
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
                style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 20 }}
              >
                Cancellation & Rescheduling Policy
              </h2>
              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
                <li>Customers may reschedule a home visit at least 6 hours before the scheduled time, subject to tailor availability.</li>
                <li>Same-day visits may also be rescheduled provided the request is made more than six hours before the visit and an alternative slot is available.</li>
                <li>Tailors are not permitted to cancel confirmed visits except under exceptional circumstances managed directly by the Elanza - From Fabric to Form Admin.</li>
              </ul>
            </article>

            {/* Section 4: Fabric Handling & Liability */}
            <article
              id="fabric"
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #ede7dd",
                padding: "36px 32px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#c9a84c", marginBottom: 8 }}>
                SECTION 04
              </div>
              <h2
                className="font-serif"
                style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 20 }}
              >
                Fabric Handling & Liability Policy
              </h2>
              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
                <li>Customers supply their own fabric for stitching.</li>
                <li>Fabric quantity and condition are inspected and acknowledged by both parties at the time of pickup.</li>
                <li>Elanza - From Fabric to Form is not responsible for pre-existing defects in customer-supplied fabric that were not identified at pickup.</li>
                <li>In the event of fabric damage or loss caused by Elanza - From Fabric to Form&apos;s error, the Admin will assess and approve an appropriate resolution (replacement, re-stitching, or compensation) based on the declared value of the fabric.</li>
              </ul>
            </article>

            {/* Section 5: Safety Policy */}
            <article
              id="safety"
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #ede7dd",
                padding: "36px 32px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#c9a84c", marginBottom: 8 }}>
                SECTION 05
              </div>
              <h2
                className="font-serif"
                style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 20 }}
              >
                Safety Policy
              </h2>
              <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
                Safety and trust are core pillars of the Elanza - From Fabric to Form platform. Every tailor undergoes a mandatory 4-step verification process before joining:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: 12, marginBottom: 24 }}>
                {[
                  "Government ID Verification",
                  "Police Verification",
                  "Background Verification",
                  "Stitching Skill Assessment",
                ].map((step) => (
                  <div
                    key={step}
                    style={{
                      background: "rgba(201,168,76,0.06)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      borderRadius: 12,
                      padding: "14px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#2c2c2c",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ color: "#c9a84c", fontSize: 12 }}>✓</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
                <li>The application includes an SOS feature that allows tailors to immediately notify the Elanza - From Fabric to Form support team during emergencies.</li>
                <li>Any reports of harassment, misconduct, fraud, or unsafe behaviour may result in temporary suspension of the customer account while an investigation is conducted.</li>
              </ul>
            </article>

            {/* Section 6: Payment Policy */}
            <article
              id="payment"
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #ede7dd",
                padding: "36px 32px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#c9a84c", marginBottom: 8 }}>
                SECTION 06
              </div>
              <h2
                className="font-serif"
                style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 20 }}
              >
                Payment Policy
              </h2>
              <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                Elanza - From Fabric to Form accepts multiple secure digital and cash payment options:
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                {["UPI", "Credit Cards", "Debit Cards", "Net Banking", "Digital Wallets", "Cash on Delivery"].map((m) => (
                  <span
                    key={m}
                    style={{
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "#333",
                      background: "#f4efe8",
                      padding: "6px 14px",
                      borderRadius: 20,
                      border: "1px solid #e5dec3",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
                <li>A fixed travel fee of ₹150 is added to every home-visit booking.</li>
                <li>Premium (Master) Tailor services incur an additional surcharge per garment.</li>
              </ul>
            </article>

            {/* Section 7: Limitation of Liability */}
            <article
              id="liability"
              style={{
                background: "#ffffff",
                borderRadius: 20,
                border: "1px solid #ede7dd",
                padding: "36px 32px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#c9a84c", marginBottom: 8 }}>
                SECTION 07
              </div>
              <h2
                className="font-serif"
                style={{ fontSize: 24, fontWeight: 700, color: "#2c2c2c", marginBottom: 20 }}
              >
                Limitation of Liability
              </h2>
              <p style={{ fontSize: 14.5, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                Elanza - From Fabric to Form makes every effort to provide reliable and professional stitching services. However, Elanza - From Fabric to Form shall not be liable for losses resulting from:
              </p>

              <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "#444", lineHeight: 1.7 }}>
                <li>Incorrect customer information or measurements provided by the customer.</li>
                <li>Pre-existing defects or insufficient quantity in customer-supplied fabric not identified at the time of pickup.</li>
                <li>Delays caused by traffic, weather, or emergencies.</li>
                <li>Events beyond Elanza - From Fabric to Form&apos;s reasonable control.</li>
              </ul>
            </article>

            {/* Bottom Support Banner */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e1a16 0%, #2a241e 100%)",
                borderRadius: 24,
                padding: "36px 32px",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h3
                className="font-serif"
                style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}
              >
                Need Further Clarification?
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: "0 auto 24px" }}>
                Our support team is available to assist you with any legal, order, or safety queries.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                <a href="mailto:hello@elanza.in" className="btn-gold">
                  Contact Legal Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
