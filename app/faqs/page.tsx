"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
  category: string;
}

const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General & Booking" },
  { id: "fabric", label: "Fabric & Fitting" },
  { id: "payments", label: "Payments & Pricing" },
  { id: "cancellation", label: "Cancellations & Refunds" },
  { id: "safety", label: "Safety & Support" },
];

const faqs: FAQItem[] = [
  {
    id: 1,
    category: "general",
    question: "What is Elanza - From Fabric to Form?",
    answer:
      "Elanza - From Fabric to Form is a home-visit stitching platform that sends professional tailors to your location to take measurements, collect fabric, and later deliver your finished, custom-stitched garment.",
  },
  {
    id: 2,
    category: "general",
    question: "How do I place an order?",
    answer:
      "Select your desired garment type, choose a date and time for the home visit, confirm your address, complete the advance payment (or select Cash on Delivery), and receive booking confirmation.",
  },
  {
    id: 3,
    category: "general",
    question: "Can I book a same-day home visit?",
    answer:
      "Yes. Same-day visits are available depending on tailor availability.",
  },
  {
    id: 4,
    category: "general",
    question: "How early should I book?",
    answer:
      "Home visits can be booked from 1 hour up to 30 days in advance.",
  },
  {
    id: 5,
    category: "general",
    question: "Can I reschedule my visit?",
    answer:
      "Yes. Visits can be rescheduled at least 6 hours before the scheduled time, subject to availability.",
  },
  {
    id: 6,
    category: "cancellation",
    question: "What is the cancellation policy?",
    answer: (
      <div>
        <p style={{ marginBottom: 12 }}>Refund eligibility depends on when you cancel your visit:</p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          <li>
            <strong>12 hours or more before visit:</strong> Full 100% refund.
          </li>
          <li>
            <strong>Between 12 and 6 hours before visit:</strong> 50% refund.
          </li>
          <li>
            <strong>Within 6 hours of visit:</strong> Not eligible for a refund.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    category: "cancellation",
    question: "How will I receive my refund?",
    answer:
      "Approved refunds are credited back to the original payment method used during booking.",
  },
  {
    id: 8,
    category: "safety",
    question: "Are your tailors verified?",
    answer:
      "Yes. Every tailor completes Government ID verification, Police verification, Background verification, and a Stitching Skill Assessment before joining Elanza - From Fabric to Form.",
  },
  {
    id: 9,
    category: "payments",
    question: "What payment methods are accepted?",
    answer:
      "Elanza - From Fabric to Form accepts UPI, Credit Cards, Debit Cards, Net Banking, Digital Wallets, and Cash on Delivery.",
  },
  {
    id: 10,
    category: "payments",
    question: "Is there a travel charge?",
    answer:
      "Yes. A fixed travel fee of ₹150 is applied to every home-visit booking.",
  },
  {
    id: 11,
    category: "payments",
    question: "What are Premium (Master) Tailor services?",
    answer:
      "Premium Tailors are experienced professionals who provide enhanced stitching and finishing. An additional surcharge per garment applies.",
  },
  {
    id: 12,
    category: "payments",
    question: "Can I apply multiple coupons?",
    answer:
      "No. Only one coupon can be applied per order.",
  },
  {
    id: 13,
    category: "payments",
    question: "Is there a minimum order amount to use a coupon?",
    answer:
      "Yes. Coupons can be applied only on orders with a minimum value of ₹500.",
  },
  {
    id: 14,
    category: "fabric",
    question: "Do I need to provide my own fabric?",
    answer:
      "Yes. Elanza - From Fabric to Form currently offers stitching services only, so customers must provide their own fabric, which is inspected and acknowledged by the tailor at pickup.",
  },
  {
    id: 15,
    category: "fabric",
    question: "What happens if my fabric is damaged during stitching?",
    answer:
      "If damage results from a tailor's error, Elanza - From Fabric to Form's Admin will assess the case and arrange a suitable resolution, such as replacement, re-stitching, or compensation.",
  },
  {
    id: 16,
    category: "fabric",
    question: "How long does it take to receive my stitched garment?",
    answer:
      "Standard turnaround is typically 5 to 7 business days from fabric pickup, depending on garment type and design complexity; express stitching may be available at an added charge.",
  },
  {
    id: 17,
    category: "fabric",
    question: "Is a trial fitting included?",
    answer:
      "Yes. One complimentary trial-fitting visit is included per order to check fit before final finishing.",
  },
  {
    id: 18,
    category: "safety",
    question: "How can I contact customer support?",
    answer:
      "You can contact Elanza - From Fabric to Form through the in-app support section, customer support email, or the official support phone number during business hours.",
  },
  {
    id: 19,
    category: "safety",
    question: "What happens in case of an emergency?",
    answer:
      "Elanza - From Fabric to Form provides an SOS feature for tailors. When activated, the Admin is immediately notified, and appropriate action is taken to ensure the safety of all parties involved.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;

      const qText = faq.question.toLowerCase();
      const aText =
        typeof faq.answer === "string" ? faq.answer.toLowerCase() : "";
      const searchLower = searchQuery.toLowerCase().trim();

      const matchesSearch =
        searchLower === "" ||
        qText.includes(searchLower) ||
        aText.includes(searchLower);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
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
            <span>HELP & KNOWLEDGE BASE</span>
            <span>✦</span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Frequently Asked <span style={{ color: "#c9a84c" }}>Questions</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 580,
              margin: "0 auto 36px",
            }}
          >
            Find answers to all your questions about our doorstep tailoring process, home visits, fabric guidelines, and payments.
          </p>

          {/* Search Box */}
          <div
            style={{
              position: "relative",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              placeholder="Search questions (e.g. fabric, refund, doorstep visit)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 48px 16px 20px",
                borderRadius: 50,
                border: "1px solid rgba(201,168,76,0.4)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                color: "#fff",
                fontSize: 14,
                outline: "none",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                transition: "border-color 0.2s, background 0.2s",
              }}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fcfbf9", padding: "64px 0 96px" }}>
        <div
          className="section"
          style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 48,
            }}
          >
            {faqCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 30,
                    border: isActive
                      ? "1px solid #c9a84c"
                      : "1px solid rgba(0,0,0,0.08)",
                    background: isActive
                      ? "linear-gradient(135deg, #c9a84c, #b8860b)"
                      : "#fff",
                    color: isActive ? "#fff" : "#444",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: isActive
                      ? "0 4px 14px rgba(201,168,76,0.3)"
                      : "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Result Count / Filter indicator */}
          {(searchQuery !== "" || activeCategory !== "all") && (
            <div
              style={{
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 13,
                color: "#777",
              }}
            >
              <div>
                Showing <strong>{filteredFAQs.length}</strong> {filteredFAQs.length === 1 ? "result" : "results"}
                {searchQuery && (
                  <span>
                    {" "}
                    for &ldquo;<strong style={{ color: "#2c2c2c" }}>{searchQuery}</strong>&rdquo;
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "#c9a84c",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Accordion List */}
          {filteredFAQs.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 24px",
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
              <h3
                className="font-serif"
                style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 8 }}
              >
                No questions found
              </h3>
              <p style={{ fontSize: 14, color: "#888", maxWidth: 400, margin: "0 auto 20px" }}>
                We couldn&apos;t find any FAQs matching your search query. Try searching for other terms or reach out to our team.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="btn-gold"
              >
                View All FAQs
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {filteredFAQs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    style={{
                      background: "#ffffff",
                      borderRadius: 18,
                      border: isOpen
                        ? "1px solid rgba(201,168,76,0.4)"
                        : "1px solid #eee7dd",
                      boxShadow: isOpen
                        ? "0 6px 24px rgba(201,168,76,0.08)"
                        : "0 2px 10px rgba(0,0,0,0.02)",
                      overflow: "hidden",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      style={{
                        width: "100%",
                        padding: "22px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        background: "transparent",
                        border: "none",
                        textAlign: "left",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 800,
                            color: isOpen ? "#c9a84c" : "#aaa",
                            background: isOpen
                              ? "rgba(201,168,76,0.12)"
                              : "#f5f2eb",
                            padding: "4px 8px",
                            borderRadius: 8,
                            minWidth: 32,
                            textAlign: "center",
                          }}
                        >
                          Q{faq.id < 10 ? `0${faq.id}` : faq.id}
                        </span>
                        <span
                          className="font-serif"
                          style={{
                            fontSize: 17,
                            fontWeight: 700,
                            color: isOpen ? "#c9a84c" : "#2c2c2c",
                            lineHeight: 1.4,
                            transition: "color 0.2s",
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: isOpen ? "#c9a84c" : "rgba(0,0,0,0.04)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isOpen ? "#fff" : "#666",
                          flexShrink: 0,
                          transition: "transform 0.25s ease, background 0.2s",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 22px 64px",
                          fontSize: 14.5,
                          color: "#555",
                          lineHeight: 1.75,
                          borderTop: "1px solid #faf5ee",
                          marginTop: -4,
                          paddingTop: 16,
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Support Banner */}
          <div
            style={{
              marginTop: 64,
              background: "linear-gradient(135deg, #1e1a16 0%, #2a241e 100%)",
              borderRadius: 24,
              padding: "40px 32px",
              color: "#fff",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#c9a84c", marginBottom: 12 }}>
              STILL HAVE QUESTIONS?
            </div>
            <h3
              className="font-serif"
              style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, marginBottom: 12 }}
            >
              We&apos;re Here to Help You
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>
              Can&apos;t find the answer you&apos;re looking for? Reach out directly to our dedicated customer support team.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/download" className="btn-gold">
                Download App & Support
              </Link>
              <a
                href="mailto:hello@elanza.in"
                className="btn-ghost"
              >
                Email Customer Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
