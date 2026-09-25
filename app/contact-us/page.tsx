import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Us | The Black Empowerment Group",
  description:
    "Start a conversation with The Black Empowerment Group about your project, goals, or partnership.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="page-width page-hero-inner">
          <p className="eyebrow">Contact / Let’s talk</p>
          <h1>Let’s move your vision forward.</h1>
          <p className="section-copy">Share a little about your project and what you hope to make possible. We’ll use your note as a starting point for the conversation.</p>
        </div>
      </section>
      <section className="page-width contact-layout">
        <div className="contact-aside">
          <p className="eyebrow">Start here</p>
          <h2>Every meaningful partnership begins with a conversation.</h2>
          <p>Tell us what you’re working on, what support you need, and where you’d like to go next.</p>
        </div>
        <InquiryForm />
      </section>
      <SiteFooter />
    </main>
  );
}
