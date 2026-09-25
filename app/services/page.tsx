import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { serviceOptions } from "@/components/serviceOptions";

export const metadata: Metadata = {
  title: "Services | The Black Empowerment Group",
  description:
    "Explore real estate development, architectural design, construction, project management, transportation, and diaspora consulting services.",
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero service-page-heading">
        <div className="page-width page-hero-inner">
          <p className="eyebrow">The Black Empowerment Group</p>
          <h1>Portfolio of Services</h1>
        </div>
      </section>
      <section className="page-width service-portfolio" aria-label="Portfolio of services">
        {serviceOptions.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-label">
              <h2>{service.title}</h2>
            </div>
            <div className="service-card-description">
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
