import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  MapPinned,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import logo from "@/assets/annavya-logo.png";
import {
  facebookHandle,
  instagramHandle,
  phoneNumber,
  seoKeywords,
  whatsappNumber,
} from "@/lib/site-data";

type NavItem = {
  to: string;
  label: string;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/farmers", label: "Farmers" },
  { to: "/health-benefits", label: "Health Benefits" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:rgba(16,16,12,0.94)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Annavya Foods home">
            <img src={logo} alt="Annavya Foods logo" className="h-12 w-auto sm:h-14" />
            <div className="hidden min-[480px]:block">
              <p className="font-serif text-lg text-[color:var(--brand-gold)]">Annavya Foods</p>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted-ink)]">
                Premium millet brand
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-[color:var(--muted-ink)] transition-colors hover:text-[color:var(--paper)]"
                activeProps={{ className: "text-[color:var(--paper)]" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="btn-outline">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--paper)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[color:var(--line)] bg-[color:rgba(16,16,12,0.98)] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-[color:rgba(214,190,140,0.12)] py-3 text-[color:var(--paper)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary justify-center">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Inquiry
                </a>
                <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="btn-outline justify-center">
                  <Phone className="h-4 w-4" />
                  Call {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface-strong)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
          <div>
            <img src={logo} alt="Annavya Foods emblem" className="h-16 w-auto" loading="lazy" />
            <h2 className="mt-6 font-serif text-3xl text-[color:var(--paper)]">
              Premium modern Indian millet sourcing rooted in traditional agriculture.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted-ink)]">
              Annavya Foods is a premium millet supplier in India focused on trust, clean sourcing, and traditional grain excellence. We support distributor requirements, healthy food brands, and family buyers with direct farmer millets, certified processing, and premium product quality.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-[color:var(--brand-gold-soft)]">
              {seoKeywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-[color:rgba(214,190,140,0.2)] px-3 py-1">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[color:var(--paper)]">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--muted-ink)]">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-[color:var(--paper)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[color:var(--paper)]">Connect</h3>
            <ul className="mt-5 space-y-4 text-sm text-[color:var(--muted-ink)]">
              <li>
                <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="hover:text-[color:var(--paper)]">
                  {phoneNumber}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-[color:var(--paper)]">
                  WhatsApp inquiries
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinned className="h-4 w-4 text-[color:var(--brand-gold)]" />
                Supplies across India
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`https://facebook.com/${facebookHandle}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] md:bottom-6 md:right-6"
        aria-label="Open WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[color:var(--line)] bg-[color:rgba(16,16,12,0.98)] p-3 md:hidden">
        <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="btn-outline justify-center">
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary justify-center">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
