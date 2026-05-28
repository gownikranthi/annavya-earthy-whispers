import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Leaf, Phone, ShieldCheck, Sparkles, TestTube2, Truck } from "lucide-react";

import heroFarmer from "@/assets/millet-farmer-hero-new.jpeg";
import farmerCouple from "@/assets/farmer-couple.jpeg";
import fieldFarmer from "@/assets/millet-farmer-field.jpeg";
import processingUnit from "@/assets/millet-processing-new.png";
import productRange from "@/assets/products-range.png";
import foxtailPack from "@/assets/foxtail-pack.png";
import barnyardPack from "@/assets/barnyard-pack.png";
import browntopPack from "@/assets/browntop-pack.png";
import littlePack from "@/assets/little-pack.png";
import kodoPack from "@/assets/kodo-pack.png";
import {
  benefits,
  blogPosts,
  certifications,
  instagramHandle,
  facebookHandle,
  phoneNumber,
  processSteps,
  products,
  trustMetrics,
  whatsappNumber,
  type ProductImageKey,
} from "@/lib/site-data";

const productImageMap: Record<ProductImageKey, string> = {
  "foxtail-pack": foxtailPack,
  "barnyard-pack": barnyardPack,
  "browntop-pack": browntopPack,
  "little-pack": littlePack,
  "kodo-pack": kodoPack,
};

export function Ornament({ tone = "gold" }: { tone?: "gold" | "deep" }) {
  const color = tone === "gold" ? "text-[color:var(--brand-gold)]" : "text-[color:var(--brand-gold-deep)]";
  return (
    <div className={`ornament-divider ${color}`} aria-hidden="true">
      <span className="ornament-glyph">✦ ❀ ✦</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="section-shell overflow-hidden pt-0">
      <div className="relative min-h-[78svh] overflow-hidden border-b border-[color:var(--line)]">
        <img
          src={heroFarmer}
          alt="Farmer standing in lush millet field representing direct sourcing"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,9,0.88)_0%,rgba(11,12,9,0.72)_45%,rgba(11,12,9,0.42)_100%)]" />
        <div className="grain-overlay absolute inset-0 opacity-60" />

        <div className="relative mx-auto grid min-h-[78svh] max-w-7xl items-end gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl self-center pb-8 lg:pb-0">
            <p className="font-devanagari text-lg text-[color:var(--brand-gold-soft)] sm:text-xl">
              अन्न से परिवार तक — शुद्धता की परंपरा
            </p>
            <p className="eyebrow mt-4">Premium Millet Supplier · India</p>
            <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.02] text-[color:var(--paper)] sm:text-6xl lg:text-7xl">
              From sacred Indian soil to your family's table —{" "}
              <span className="bg-[var(--gradient-gold)] bg-clip-text text-transparent">premium heritage millets</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg sm:leading-8">
              Annavya Foods brings together direct farmer sourcing, premium grain quality, and modern healthy living — rooted in deeply traditional Indian agriculture. Built for families, retailers, and distributor partners across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary">
                <Sparkles className="h-4 w-4" />
                WhatsApp Inquiry
              </a>
              <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="btn-outline">
                <Phone className="h-4 w-4" />
                {phoneNumber}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)] sm:gap-3 sm:text-xs">
              {certifications.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(214,190,140,0.22)] bg-[color:rgba(15,29,20,0.5)] px-3 py-1.5 sm:px-4 sm:py-2">
                  <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl items-end justify-center lg:justify-end">
            <div className="pattern-panel w-full max-w-[30rem] border border-[color:rgba(214,190,140,0.18)] bg-[color:rgba(28,30,24,0.72)] p-5 backdrop-blur-sm">
              <img
                src={productRange}
                alt="Annavya Foods millet product range packaging"
                className="aspect-[4/3] w-full object-contain"
              />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="border-t border-[color:rgba(214,190,140,0.18)] pt-4">
                    <p className="font-serif text-2xl text-[color:var(--paper)]">{metric.value}</p>
                    <p className="mt-1 text-sm text-[color:var(--muted-ink)]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntroBand() {
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
        <div>
          <p className="eyebrow">Brand story</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
            A premium modern Indian organic food brand deeply rooted in traditional agriculture.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-[color:var(--muted-ink)]">
          <p>
            The Annavya Foods experience is built around trust, authenticity, and grain quality. We highlight real farmers, real sourcing, and real processing standards so every inquiry begins with confidence.
          </p>
          <p>
            This is not an ecommerce-first brand. It is a premium inquiry-led destination for families, retail partners, and distributors seeking certified millet products with a meaningful farm-to-family story.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const icons = [Leaf, ShieldCheck, TestTube2, Truck];

  return (
    <section className="section-shell section-light border-b border-[color:var(--line-soft)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-[color:var(--earth-brown)]">Farm to family</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            A disciplined process built for premium millet supply.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <article key={step.title} className="border border-[color:var(--line-soft)] bg-[color:var(--paper-warm)] p-6">
                <Icon className="h-8 w-8 text-[color:var(--brand-gold-deep)]" />
                <h3 className="mt-5 font-serif text-2xl text-[color:var(--ink-dark)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--earth-brown)]">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductShowcaseSection({ compact = false }: { compact?: boolean }) {
  const visibleProducts = compact ? products.slice(0, 5) : products;

  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Millet categories</p>
            <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
              Curated millet varieties for premium retail and bulk supply.
            </h2>
          </div>
          {compact ? (
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-gold-soft)]">
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <article key={product.name} className="flex h-full flex-col border border-[color:rgba(214,190,140,0.18)] bg-[color:rgba(30,32,26,0.72)]">
              {product.image ? (
                <div className="bg-[color:rgba(245,238,223,0.96)] p-6">
                  <img
                    src={productImageMap[product.image]}
                    alt={`${product.name} packaging by Annavya Foods`}
                    className="mx-auto h-72 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex min-h-72 items-end bg-[linear-gradient(180deg,rgba(38,45,34,0.4),rgba(12,14,11,0.2)),url('')] p-6">
                  <div>
                    <p className="eyebrow">Traditional grain</p>
                    <h3 className="mt-4 font-serif text-4xl text-[color:var(--paper)]">{product.name}</h3>
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-3xl text-[color:var(--paper)]">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{product.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">
                  Available in {product.packSize}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.benefits.map((benefit) => (
                    <span key={benefit} className="rounded-full border border-[color:rgba(214,190,140,0.16)] px-3 py-1 text-xs text-[color:var(--paper)]">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FarmersSection() {
  return (
    <section className="section-shell section-light border-b border-[color:var(--line-soft)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div className="grid gap-6">
          <img
            src={farmerCouple}
            alt="Farm couple standing in millet field"
            className="h-[18rem] w-full object-cover sm:h-[24rem]"
            loading="lazy"
          />
          <img
            src={fieldFarmer}
            alt="Farmer pointing across the millet field"
            className="h-[18rem] w-full object-cover sm:h-[24rem]"
            loading="lazy"
          />
        </div>
        <div className="lg:pl-8">
          <p className="eyebrow text-[color:var(--earth-brown)]">Farmers</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            Real farming communities are the heart of the brand.
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--earth-brown)]">
            Our sourcing approach keeps farmers visible, respected, and central to the story. That human connection strengthens brand credibility and helps buyers understand where their grain truly comes from.
          </p>
          <blockquote className="mt-8 border-l-2 border-[color:var(--brand-gold-deep)] pl-6 font-serif text-2xl leading-10 text-[color:var(--ink-dark)]">
            “From traditional farms to modern families, every grain carries a story of soil, care, and authenticity.”
          </blockquote>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border border-[color:var(--line-soft)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-deep)]">Why it matters</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--earth-brown)]">
                Direct sourcing improves trust, transparency, and premium storytelling for healthy food distribution.
              </p>
            </div>
            <div className="border border-[color:var(--line-soft)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-deep)]">For partners</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--earth-brown)]">
                A stronger sourcing narrative helps retailers and distributors position millet as premium, responsible, and rooted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HealthSection() {
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <p className="eyebrow">Healthy lifestyle</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
            A healthier grain choice for contemporary Indian living.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item.title} className="border border-[color:rgba(214,190,140,0.18)] p-5">
                <h3 className="font-serif text-2xl text-[color:var(--paper)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="pattern-panel flex flex-col justify-between gap-8 p-6 sm:p-8">
          <div>
            <p className="eyebrow">Why buyers inquire</p>
            <h3 className="mt-4 font-serif text-3xl text-[color:var(--paper)]">
              Premium healthy millet products for homes, retailers, and distributors.
            </h3>
          </div>
          <ul className="space-y-4 text-sm leading-7 text-[color:var(--muted-ink)]">
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--brand-gold)]" />Suitable for clean everyday diets and wellness-led food products.</li>
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--brand-gold)]" />Traditional Indian grains with stronger emotional and nutritional resonance.</li>
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--brand-gold)]" />Useful across breakfast, staples, ready mixes, and wholesale grain programs.</li>
          </ul>
          <Link to="/health-benefits" className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-gold-soft)]">
            Explore health benefits
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BulkOrderSection() {
  return (
    <section className="section-shell section-light border-b border-[color:var(--line-soft)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <img
          src={processingUnit}
          alt="Millet processing and sorting facility"
          className="h-full min-h-[22rem] w-full object-cover"
          loading="lazy"
        />
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-[color:var(--earth-brown)]">Bulk orders</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            Built for bulk distributor inquiries and large-format supply.
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--earth-brown)]">
            We support bulk orders starting from 30 KG and supply across India. Whether you are a distributor, retailer, wholesaler, or health-focused brand, we provide millet varieties with premium positioning and dependable quality assurance.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-[color:var(--line-soft)] p-5">
              <h3 className="font-serif text-2xl text-[color:var(--ink-dark)]">Minimum order</h3>
              <p className="mt-2 text-sm text-[color:var(--earth-brown)]">Bulk supply starts from 30 KG.</p>
            </div>
            <div className="border border-[color:var(--line-soft)] p-5">
              <h3 className="font-serif text-2xl text-[color:var(--ink-dark)]">Coverage</h3>
              <p className="mt-2 text-sm text-[color:var(--earth-brown)]">Supplies available across India.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary">
              Bulk WhatsApp Inquiry
            </a>
            <Link to="/contact" className="btn-outline-light">
              Distributor Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Blog</p>
            <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
              Content that strengthens authority around millet, health, and sourcing.
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-gold-soft)]">
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border border-[color:rgba(214,190,140,0.18)] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">Knowledge article</p>
              <h3 className="mt-4 font-serif text-3xl text-[color:var(--paper)]">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-ink)]">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-shell section-light">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div>
          <p className="eyebrow text-[color:var(--earth-brown)]">Contact</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            Start an inquiry for premium millet supply.
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--earth-brown)]">
            Reach out for WhatsApp inquiries, bulk distributor partnerships, phone assistance, and millet product discussions.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">WhatsApp</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">Fastest way to discuss product availability, bulk orders, and distribution requirements.</p>
          </a>
          <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">Phone</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">Call directly for immediate assistance and lead discussions.</p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">{phoneNumber}</p>
          </a>
          <a href={`https://instagram.com/${instagramHandle}`} target="_blank" rel="noreferrer" className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">Instagram</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">Follow authentic farmer stories, product moments, and brand updates.</p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">@{instagramHandle}</p>
          </a>
          <a href={`https://facebook.com/${facebookHandle}`} target="_blank" rel="noreferrer" className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">Facebook</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">Connect with the brand community and inquiry through social channels.</p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">/{facebookHandle}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-[color:var(--paper)] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--muted-ink)] sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
