import Link from "next/link";
import Image from "next/image";
import brandLogo from "../The Black Empowerment Group logo.pptx.png";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <Link href="/" className="brand-lockup" aria-label="The Black Empowerment Group home">
          <Image src={brandLogo} alt="" width={768} height={768} className="brand-logo brand-logo-footer" />
        </Link>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>
        <span>© {new Date().getFullYear()} The Black Empowerment Group</span>
      </div>
    </footer>
  );
}
