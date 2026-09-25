import type { Metadata } from "next";
import GallerySlideshow from "@/components/GallerySlideshow";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Gallery | The Black Empowerment Group",
  description: "A photo gallery from The Black Empowerment Group.",
};

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero gallery-page-heading">
        <div className="page-width page-hero-inner">
          <p className="eyebrow">The Black Empowerment Group</p>
          <h1>Gallery</h1>
        </div>
      </section>
      <div className="page-width gallery-page-content">
        <GallerySlideshow />
      </div>
      <SiteFooter />
    </main>
  );
}
