import Link from "next/link";
import Image from "next/image";
import brandLogo from "../The Black Empowerment Group logo.pptx.png";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="page-width home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">A family-owned enterprise / Ghana + United States</p>
            <h1>End-to-End Services.<br /><span>To Help You Thrive.</span></h1>
            <p className="hero-lede">Bridging cultures, expertise, and international resources to create high-value developments and lasting connections between West Africa and its global diaspora.</p>
            <div className="hero-actions">
              <Link href="/services" className="button button-gold">Explore our services</Link>
              <Link href="/contact-us" className="text-link">Start a conversation <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="hero-index"><span>01</span><span className="index-rule" /><span>Our work starts with you</span></div>
          </div>
          <div className="home-hero-image">
            <Image src={brandLogo} alt="The Black Empowerment Group logo: Building Dreams. Empowering Lives." fill priority sizes="(max-width: 760px) 90vw, 42vw" className="hero-logo-image" />
          </div>
        </div>
      </section>

      <section className="summary-section section-pad" id="executive-summary">
        <div className="page-width summary-grid">
          <p className="eyebrow">01 / Executive summary</p>
          <div>
            <h2>Cross-continental vision. Dedicated quality work.</h2>
            <p className="section-copy">The Black Empowerment Group (TBEG) is a dynamic, family-owned enterprise rooted in faith, guided by purpose, and built for prosperity. Co-owned by family members from Ghana and the United States, we bridge cultures, expertise, and international resources to create high-value developments and foster deep connections between West Africa and its global diaspora. We deliver exceptional solutions that empower our clients and turn dreams into reality.</p>
            <Link href="/services" className="text-link">See how we work <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="impact-section section-pad" id="impact">
        <div className="page-width impact-grid">
          <div>
            <p className="eyebrow">02 / Impact statement</p>
            <h2>Building dreams and empowering lives.</h2>
          </div>
          <p className="impact-copy">To build dreams and empower lives by delivering excellence across real estate development, architectural design, construction, transportation, and diaspora consulting, grounded in family values, integrity, and cross-continental collaboration.</p>
          <div className="impact-pillars">
            <div><span>01</span><h3>Integrity</h3><p>Grounded in family values and a commitment to quality work.</p></div>
            <div><span>02</span><h3>Collaboration</h3><p>Bringing Ghanaian and American perspectives together.</p></div>
            <div><span>03</span><h3>Connection</h3><p>Building relationships between West Africa and its diaspora.</p></div>
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about-us">
        <div className="page-width about-grid">
          <div className="about-marker"><span>TBEG</span><span className="marker-line" /><span>People-led<br />by design</span></div>
          <div>
            <p className="eyebrow">03 / About us</p>
            <h2>A shared vision across borders.</h2>
            <p className="section-copy">Welcome to The Black Empowerment Group. We are a family-owned business whose members originate from both Ghana and the United States. Our story is one of unity, shared vision, and cross-continental heritage. By bringing together African and American perspectives, experience, and passion, we create unique synergies that enrich every project. Whether you are creating your dream home, expanding international ventures, or seeking reliable transport, our family is dedicated to treating your vision with the care, warmth, and excellence it deserves.</p>
            <Link href="/contact-us" className="text-link">Get to know us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="outlook-section section-pad" id="future-outlook">
        <div className="page-width outlook-grid">
          <p className="eyebrow">04 / Future outlook &amp; growth</p>
          <div>
            <h2>Growing with purpose.<br /><span>Building a legacy.</span></h2>
            <p className="section-copy">As a forward-looking enterprise, TBEG is committed to continuous growth, innovation, and evolution. We will adapt to new opportunities, expand our service offerings, and elevate our standards, ensuring our business remains a trusted partner for our clients and a growing legacy for generations to come.</p>
            <Link href="/contact-us" className="button button-outline">Build with us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
