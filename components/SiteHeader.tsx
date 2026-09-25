import Link from "next/link";
import Image from "next/image";
import brandLogo from "../The Black Empowerment Group logo.pptx.png";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <Link href="/" className="brand-lockup" aria-label="The Black Empowerment Group home">
          <Image src={brandLogo} alt="" width={768} height={768} className="brand-logo" priority />
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact-us" className="nav-contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
