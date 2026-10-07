"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface PolicySection {
  id: string;
  num: string;
  title: string;
  category: "orders" | "payments" | "fabric" | "safety" | "operations";
  content: React.ReactNode;
}

const policyCategories = [
  { id: "all", label: "All Policies" },
  { id: "orders", label: "Orders & Booking" },
  { id: "payments", label: "Payments & Refunds" },
  { id: "fabric", label: "Fabric & Tailoring" },
  { id: "safety", label: "Safety & Verification" },
  { id: "operations", label: "Operations & Delivery" },
];

const policies: PolicySection[] = [
  {
    id: "refund-policy",
    num: "01",
    title: "Refund Policy",
    category: "payments",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Customers may cancel a home-visit booking 3 hours or more before the scheduled visit.
        </p>
        <p style={{ marginBottom: 12 }}>
          Booking cannot be cancelled after the representative has collected the customer&apos;s fabric. Once stitching work has begun, the order is non-refundable, since fabric and tailor time have already been committed.
        </p>
        <p>
          Refunds are processed only to the original payment method and require Admin approval. Only the Admin can initiate and approve cancellations resulting in refunds.
        </p>
      </div>
    ),
  },
  {
    id: "coupons",
    num: "02",
    title: "Coupon & Discount Rules",
    category: "payments",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Elanza - From Fabric to Form offers a <strong>5% First Order Discount</strong> and a <strong>5% Referral Reward Discount</strong>.
        </p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>Coupons cannot be combined or stacked.</li>
          <li>Each coupon is valid for one-time use only.</li>
          <li>Coupons are applicable only on orders with a minimum value of ₹1000.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "subscriptions",
    num: "03",
    title: "Subscription Plans",
    category: "orders",
    content: (
      <p>
        Elanza - From Fabric to Form does not offer subscription or membership plans in the current phase. All services are booked and charged on a per-order basis.
      </p>
    ),
  },
  {
    id: "pricing",
    num: "04",
    title: "Pricing Policy",
    category: "payments",
    content: (
      <p>
        Final pricing based on garment type, design complexity, and embellishments is displayed to customers before order confirmation.
      </p>
    ),
  },
  {
    id: "measurement-profile",
    num: "05",
    title: "Measurement & Profile Policy",
    category: "fabric",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Body measurements are recorded by the representative during the home visit and securely saved to the customer&apos;s profile for reuse in future orders.
        </p>
        <p style={{ marginBottom: 12 }}>
          Customers may request a re-measurement before placing a new order to account for changes in body size.
        </p>
        <p>
          Measurement data is treated as sensitive personal information and is visible only to the assigned tailor and Admin.
        </p>
      </div>
    ),
  },
  {
    id: "slot-scheduling",
    num: "06",
    title: "Slot & Scheduling Rules",
    category: "operations",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Home visits are available between <strong>8:00 AM and 7:00 PM</strong>. The minimum visit duration is 30 minutes.
        </p>
        <p style={{ marginBottom: 12 }}>
          Customers may book a visit 1 hour to 30 days in advance. Same-day visits are permitted subject to representative availability.
        </p>
        <p>
          A 30 to 45 minute buffer is maintained between visits, which may be extended depending on travel time to the next customer&apos;s location.
        </p>
      </div>
    ),
  },
  {
    id: "order-turnaround",
    num: "07",
    title: "Order Turnaround & Delivery Timeline",
    category: "operations",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Standard turnaround time (from fabric pickup to garment delivery) is <strong>48 hours</strong> (exact timelines by garment category to be finalized by Admin).
        </p>
        <p style={{ marginBottom: 12 }}>
          Express/rush stitching may be offered at an additional charge, subject to tailor availability.
        </p>
        <p>
          The finished garment is delivered to the customer via a scheduled home-delivery visit.
        </p>
      </div>
    ),
  },
  {
    id: "cancellation-rescheduling",
    num: "08",
    title: "Cancellation & Rescheduling Policy",
    category: "orders",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Customers may reschedule a home visit up to 6 hours before the scheduled time, subject to tailor availability. Rescheduling requests made within 6 hours of the visit are not permitted.
        </p>
        <p>
          Tailors are not permitted to cancel confirmed visits except in exceptional circumstances handled by the Admin.
        </p>
      </div>
    ),
  },
  {
    id: "fabric-handling",
    num: "09",
    title: "Fabric Handling & Liability Policy",
    category: "fabric",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Customers provide their own fabric. Fabric quantity and condition are jointly inspected and digitally acknowledged (photo/checklist) by the customer and tailor at the time of pickup.
        </p>
        <p style={{ marginBottom: 12 }}>
          Elanza - From Fabric to Form is not liable for pre-existing fabric defects (e.g., shrinkage, colour bleeding, insufficient quantity) that were not identified at pickup.
        </p>
        <p style={{ marginBottom: 12 }}>
          If the fabric is later found insufficient for the requested design, the customer is notified and the design is adjusted, or additional fabric is requested, before stitching begins.
        </p>
        <p>
          If fabric is damaged due to a tailor&apos;s error during stitching, Elanza - From Fabric to Form will bear the cost of a reasonable resolution (replacement, re-stitching, or compensation) as assessed and approved by the Admin on a case-by-case basis, based on the declared fabric value.
        </p>
      </div>
    ),
  },
  {
    id: "trial-fitting",
    num: "10",
    title: "Trial Fitting Policy",
    category: "fabric",
    content: (
      <p>
        No complimentary trial-fitting home visit is included per order to check preliminary fit before final finishing. Additional trial visits, if requested by the customer, may incur a nominal visit charge as determined by Admin.
      </p>
    ),
  },
  {
    id: "wallet-policy",
    num: "11",
    title: "Wallet Policy",
    category: "payments",
    content: (
      <p>
        Elanza - From Fabric to Form does not currently provide an in-app wallet. Refunds are processed only to the customer&apos;s original payment method. Promotional credits and wallet balances are not supported in the current release.
      </p>
    ),
  },
  {
    id: "rating-review",
    num: "12",
    title: "Rating & Review Policy",
    category: "safety",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Customers may rate completed orders based on the following parameters:
        </p>
        <ul style={{ paddingLeft: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: 8 }}>
          <li>✓ Overall Experience</li>
          <li>✓ Stitching Quality & Fit Accuracy</li>
          <li>✓ Punctuality</li>
          <li>✓ Professionalism</li>
          <li>✓ Hygiene</li>
          <li>✓ Behaviour</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Ratings help maintain service quality and are visible to the Admin for performance monitoring.
        </p>
      </div>
    ),
  },
  {
    id: "travel-fee",
    num: "13",
    title: "Travel Fee Policy",
    category: "payments",
    content: (
      <p>
        A fixed ₹150 travel fee is applied to every home-visit booking (covering measurement/fabric pickup, or delivery) unless otherwise modified by the Admin through promotional campaigns or future policy updates.
      </p>
    ),
  },
  {
    id: "payment-policy",
    num: "14",
    title: "Payment Policy",
    category: "payments",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Elanza - From Fabric to Form accepts UPI, Credit Cards, Debit Cards, Net Banking, Digital Wallets, and Cash on Delivery (COD), payable when the finished garment is picked up.
        </p>
        <p>
          Full payment details are displayed before order confirmation.
        </p>
      </div>
    ),
  },
  {
    id: "tipping-policy",
    num: "15",
    title: "Tipping Policy",
    category: "payments",
    content: (
      <p>
        Elanza - From Fabric to Form does not currently support tipping through the application. Customers are not provided with an in-app tipping option.
      </p>
    ),
  },
  {
    id: "tailor-verification",
    num: "16",
    title: "Tailor Verification Policy",
    category: "safety",
    content: (
      <div>
        <p style={{ marginBottom: 12 }}>
          Every tailor must successfully complete a mandatory 4-step verification before accepting orders:
        </p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>1. Government ID Verification</li>
          <li>2. Police Verification</li>
          <li>3. Background Verification</li>
          <li>4. Stitching Skill Assessment</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Only verified tailors may accept bookings.
        </p>
      </div>
    ),
  },
  {
    id: "order-confirmation",
    num: "17",
    title: "Order Confirmation",
    category: "orders",
    content: (
      <p>
        An order is confirmed only after successful advance payment and tailor assignment for the measurement/fabric-pickup visit.
      </p>
    ),
  },
  {
    id: "fabric-handover",
    num: "18",
    title: "Fabric Handover Confirmation",
    category: "fabric",
    content: (
      <p>
        Customers share a one-time OTP with the tailor at the time of fabric pickup to confirm the handover and prevent fraudulent pickups. A digital fabric receipt (recording fabric type, quantity, and condition) is generated and shared with the customer at this time.
      </p>
    ),
  },
  {
    id: "late-arrival",
    num: "19",
    title: "Late Arrival Policy",
    category: "operations",
    content: (
      <p>
        If a tailor is delayed by more than 15 minutes, the customer is notified. If the delay exceeds 30 minutes, the customer may reschedule or cancel the visit without penalty.
      </p>
    ),
  },
  {
    id: "customer-no-show",
    num: "20",
    title: "Customer No-Show",
    category: "operations",
    content: (
      <p>
        If the customer is unavailable at the service location after a reasonable waiting period (e.g., 15 minutes), the visit is marked as a no-show and any advance paid for that visit is not eligible for a refund.
      </p>
    ),
  },
  {
    id: "order-completion",
    num: "21",
    title: "Order Completion & Delivery Confirmation",
    category: "operations",
    content: (
      <p>
        The order is marked complete only after the finished garment is delivered and the customer confirms receipt and satisfaction (fit/quality check) in the app. A delivery OTP is shared with the customer to confirm the identity of the delivering tailor and prevent fraudulent handover.
      </p>
    ),
  },
  {
    id: "admin-override",
    num: "22",
    title: "Admin Override",
    category: "safety",
    content: (
      <p>
        The Admin may override refund, cancellation, pricing, scheduling, and fabric-liability decisions in exceptional cases such as technical issues, emergencies, or customer disputes.
      </p>
    ),
  },
  {
    id: "service-area",
    num: "23",
    title: "Service Area",
    category: "operations",
    content: (
      <p>
        Services are available only within Elanza - From Fabric to Form&apos;s designated operational zones. Bookings outside these areas cannot be confirmed.
      </p>
    ),
  },
  {
    id: "promotional-campaigns",
    num: "24",
    title: "Promotional Campaigns",
    category: "payments",
    content: (
      <p>
        The Admin may create, modify, activate, or deactivate promotional offers, discounts, and coupon campaigns at any time.
      </p>
    ),
  },
];

export default function BusinessPolicyPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPolicies = useMemo(() => {
    return policies.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const searchLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        searchLower === "" ||
        p.title.toLowerCase().includes(searchLower) ||
        p.num.includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
            <span>OFFICIAL GOVERNANCE & OPERATIONS</span>
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
            Business <span style={{ color: "#c9a84c" }}>Policy</span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Comprehensive operational rules, refund policies, scheduling parameters, fabric liability standards, and service guidelines for Elanza - From Fabric to Form.
          </p>

          {/* Search Input */}
          <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
            <input
              type="text"
              placeholder="Search business policies (e.g., refund, fabric, travel fee, OTP)..."
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

      {/* Main Content */}
      <section style={{ background: "#fcfbf9", padding: "64px 0 96px" }}>
        <div className="section" style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>
          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 48,
            }}
          >
            {policyCategories.map((cat) => {
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

          {/* Policy Cards Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {filteredPolicies.map((p) => (
              <article
                key={p.id}
                id={p.id}
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  border: "1px solid #ede7dd",
                  padding: "32px 36px",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.02)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#c9a84c",
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    POLICY {p.num}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#888",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                <h2
                  className="font-serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#2c2c2c",
                    marginBottom: 16,
                  }}
                >
                  {p.title}
                </h2>

                <div
                  style={{
                    fontSize: 14.5,
                    color: "#444",
                    lineHeight: 1.8,
                  }}
                >
                  {p.content}
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Banner */}
          <div
            style={{
              marginTop: 64,
              background: "linear-gradient(135deg, #1e1a16 0%, #2a241e 100%)",
              borderRadius: 24,
              padding: "40px 32px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Need Help With a Specific Order Policy?
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 28px" }}>
              Our dedicated Srinagar Admin team is available to assist you with order overrides, dispute resolutions, and scheduling support.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/terms-of-use" className="btn-gold">
                View Terms of Use
              </Link>
              <Link href="/faqs" className="btn-ghost">
                Browse FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
