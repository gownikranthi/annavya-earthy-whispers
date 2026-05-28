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
import { useT } from "@/lib/i18n";
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
  const t = useT();
  return (
    <section className="section-shell overflow-hidden pt-0">
      <div className="relative min-h-[78svh] overflow-hidden border-b border-[color:var(--line)]">
        <img
          src={heroFarmer}
          alt="Farmer standing in lush millet field representing direct sourcing"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,9,0.92)_0%,rgba(11,12,9,0.78)_45%,rgba(11,12,9,0.45)_100%)]" />
        <div className="grain-overlay absolute inset-0 opacity-60" />

        <div className="relative mx-auto grid min-h-[78svh] max-w-7xl items-end gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl self-center pb-8 lg:pb-0">
            <p className="font-devanagari text-lg text-[color:var(--brand-gold-soft)] sm:text-xl">
              अन्न से परिवार तक — शुद्धता की परंपरा
            </p>
            <p className="eyebrow mt-4">{t("Premium Millet Supplier · India")}</p>
            <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.05] text-[color:var(--paper)] sm:text-6xl lg:text-7xl">
              {t("From Indian soil to your family plate — pure heritage millets.")
                .split("—")
                .map((part, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="bg-[var(--gradient-gold)] bg-clip-text text-transparent">
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}—</span>
                  ),
                )}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg sm:leading-8">
              {t("Annavya Foods gives you millets sourced directly from Indian farmers. Pure quality, traditional taste, and modern healthy living — for families, shops, and bulk buyers across India.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary">
                <Sparkles className="h-4 w-4" />
                {t("WhatsApp Inquiry")}
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
                  {t(item)}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl items-end justify-center lg:justify-end">
            <div className="pattern-panel w-full max-w-[30rem] border border-[color:rgba(214,190,140,0.18)] bg-[color:rgba(28,30,24,0.78)] p-5 backdrop-blur-sm">
              <div className="rounded-md bg-[color:rgba(245,238,223,0.96)] p-4">
                <img
                  src={productRange}
                  alt="Annavya Foods millet product range packaging"
                  className="aspect-[4/3] w-full object-contain"
                  decoding="async"
                />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="border-t border-[color:rgba(214,190,140,0.18)] pt-4">
                    <p className="font-serif text-2xl text-[color:var(--paper)]">{t(metric.value)}</p>
                    <p className="mt-1 text-sm text-[color:var(--muted-ink)]">{t(metric.label)}</p>
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
  const t = useT();
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)] relative">
      <div className="mandala-bg absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Ornament />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">{t("Brand story")}</p>
            <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
              {t("A premium Indian millet brand rooted in traditional farming.")}
            </h2>
            <p className="mt-4 font-devanagari text-base text-[color:var(--brand-gold-soft)]">
              परंपरा · पवित्रता · पोषण
            </p>
          </div>
          <div className="space-y-5 text-base leading-8 text-[color:var(--muted-foreground)]">
            <p>{t("We highlight real farmers, real sourcing and real quality. So every inquiry starts with full trust.")}</p>
            <p>{t("This is not a shopping site. This is a trusted inquiry-first millet brand for families, retailers and distributors.")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const t = useT();
  const icons = [Leaf, ShieldCheck, TestTube2, Truck];

  return (
    <section className="section-shell section-light border-b border-[color:var(--line-soft)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-[color:var(--earth-brown)]">{t("Farm to family")}</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            {t("A clean process for premium millet supply.")}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <article key={step.title} className="border border-[color:var(--line-soft)] bg-[color:var(--paper-warm)] p-6">
                <Icon className="h-8 w-8 text-[color:var(--brand-gold-deep)]" />
                <h3 className="mt-5 font-serif text-2xl text-[color:var(--ink-dark)]">{t(step.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--earth-brown)]">{t(step.copy)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductShowcaseSection({ compact = false }: { compact?: boolean }) {
  const t = useT();
  const visibleProducts = compact ? products.slice(0, 5) : products;

  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("Millet categories")}</p>
            <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
              {t("Selected millet varieties for premium retail and bulk supply.")}
            </h2>
          </div>
          {compact ? (
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-gold-soft)]">
              {t("View all products")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <article key={product.name} className="flex h-full flex-col overflow-hidden rounded-md border border-[color:rgba(214,190,140,0.18)] bg-[color:rgba(30,32,26,0.72)] transition-transform hover:-translate-y-1">
              {product.image ? (
                <div className="flex items-center justify-center bg-[linear-gradient(180deg,#f7efd9_0%,#ecdfb6_100%)] p-6">
                  <img
                    src={productImageMap[product.image]}
                    alt={`${product.name} packaging by Annavya Foods`}
                    className="mx-auto h-64 w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.25)] sm:h-72"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="flex min-h-56 items-end bg-[linear-gradient(180deg,rgba(38,45,34,0.55),rgba(12,14,11,0.25))] p-6">
                  <div>
                    <p className="eyebrow">{t("Traditional grain")}</p>
                    <h3 className="mt-4 font-serif text-4xl text-[color:var(--paper)]">{t(product.name)}</h3>
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-3xl text-[color:var(--paper)]">{t(product.name)}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{t(product.description)}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">
                  {t("Available in")} {product.packSize}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.benefits.map((benefit) => (
                    <span key={benefit} className="rounded-full border border-[color:rgba(214,190,140,0.16)] px-3 py-1 text-xs text-[color:var(--paper)]">
                      {t(benefit)}
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
  const t = useT();
  return (
    <section className="section-shell section-light border-b border-[color:var(--line-soft)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div className="grid gap-6">
          <img
            src={farmerCouple}
            alt="Farm couple standing in millet field"
            className="h-[18rem] w-full rounded-md object-cover object-center shadow-[var(--shadow-elegant)] sm:h-[24rem]"
            loading="lazy"
            decoding="async"
          />
          <img
            src={fieldFarmer}
            alt="Farmer pointing across the millet field"
            className="h-[18rem] w-full rounded-md object-cover object-center shadow-[var(--shadow-elegant)] sm:h-[24rem]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="lg:pl-8">
          <p className="eyebrow text-[color:var(--earth-brown)]">{t("Farmers")}</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            {t("Real farming families are the heart of this brand.")}
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--earth-brown)]">
            {t("Our sourcing keeps farmers visible, respected and at the centre of the story. This human connection builds trust and shows buyers where their grain truly comes from.")}
          </p>
          <blockquote className="mt-8 border-l-2 border-[color:var(--brand-gold-deep)] pl-6 font-serif text-2xl leading-10 text-[color:var(--ink-dark)]">
            “{t("From traditional farms to modern families, every grain carries a story of soil, care and trust.")}”
          </blockquote>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border border-[color:var(--line-soft)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-deep)]">{t("Why it matters")}</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--earth-brown)]">
                {t("Direct sourcing builds trust, clear information and a premium story for healthy food supply.")}
              </p>
            </div>
            <div className="border border-[color:var(--line-soft)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-deep)]">{t("For partners")}</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--earth-brown)]">
                {t("A strong sourcing story helps retailers and distributors show millet as premium, responsible and rooted.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HealthSection() {
  const t = useT();
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <p className="eyebrow">{t("Healthy lifestyle")}</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
            {t("A healthier grain choice for modern Indian living.")}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item.title} className="border border-[color:rgba(214,190,140,0.18)] p-5">
                <h3 className="font-serif text-2xl text-[color:var(--paper)]">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{t(item.copy)}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="pattern-panel flex flex-col justify-between gap-8 p-6 sm:p-8">
          <div>
            <p className="eyebrow">{t("Why buyers inquire")}</p>
            <h3 className="mt-4 font-serif text-3xl text-[color:var(--paper)]">
              {t("Premium healthy millet products for homes, shops and distributors.")}
            </h3>
          </div>
          <ul className="space-y-4 text-sm leading-7 text-[color:var(--muted-ink)]">
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />{t("Good for daily clean eating and wellness food products.")}</li>
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />{t("Traditional Indian grains with strong feeling and good nutrition.")}</li>
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />{t("Useful in breakfast, daily meals, ready mixes and wholesale grain programs.")}</li>
          </ul>
          <Link to="/health-benefits" className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-gold-soft)]">
            {t("Explore health benefits")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BulkOrderSection() {
  const t = useT();
  return (
    <section className="section-shell section-light border-b border-[color:var(--line-soft)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <img
          src={processingUnit}
          alt="Millet processing and sorting facility"
          className="h-full min-h-[22rem] w-full rounded-md object-cover object-center shadow-[var(--shadow-elegant)]"
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-[color:var(--earth-brown)]">{t("Bulk orders")}</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            {t("Built for bulk distributor inquiries and large supply.")}
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--earth-brown)]">
            {t("We take bulk orders from 30 KG and supply across India. Whether you are a distributor, retailer, wholesaler or health food brand, we give you millet with premium quality and trusted supply.")}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-[color:var(--line-soft)] p-5">
              <h3 className="font-serif text-2xl text-[color:var(--ink-dark)]">{t("Minimum order")}</h3>
              <p className="mt-2 text-sm text-[color:var(--earth-brown)]">{t("Bulk supply starts from 30 KG.")}</p>
            </div>
            <div className="border border-[color:var(--line-soft)] p-5">
              <h3 className="font-serif text-2xl text-[color:var(--ink-dark)]">{t("Coverage")}</h3>
              <p className="mt-2 text-sm text-[color:var(--earth-brown)]">{t("Supplies available across India.")}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary">
              {t("Bulk WhatsApp Inquiry")}
            </a>
            <Link to="/contact" className="btn-outline-light">
              {t("Distributor Contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  const t = useT();
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("Blog")}</p>
            <h2 className="mt-4 font-serif text-4xl text-[color:var(--paper)] sm:text-5xl">
              {t("Stories that build trust on millet, health and sourcing.")}
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-gold-soft)]">
            {t("View all articles")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border border-[color:rgba(214,190,140,0.18)] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">{t("Knowledge article")}</p>
              <h3 className="mt-4 font-serif text-3xl text-[color:var(--paper)]">{t(post.title)}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-ink)]">{t(post.excerpt)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const t = useT();
  return (
    <section className="section-shell section-light">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div>
          <p className="eyebrow text-[color:var(--earth-brown)]">{t("Contact")}</p>
          <h2 className="mt-4 font-serif text-4xl text-[color:var(--ink-dark)] sm:text-5xl">
            {t("Start an inquiry for premium millet supply.")}
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--earth-brown)]">
            {t("Reach out for WhatsApp inquiries, bulk distributor talks, phone help and millet product discussions.")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">{t("WhatsApp")}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{t("Fastest way to talk about product, bulk orders and distribution.")}</p>
          </a>
          <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">{t("Phone")}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{t("Call us directly for quick help and inquiry talks.")}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">{phoneNumber}</p>
          </a>
          <a href={`https://instagram.com/${instagramHandle}`} target="_blank" rel="noreferrer" className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">{t("Instagram")}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{t("Follow real farmer stories, product moments and brand updates.")}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[color:var(--brand-gold-soft)]">@{instagramHandle}</p>
          </a>
          <a href={`https://facebook.com/${facebookHandle}`} target="_blank" rel="noreferrer" className="contact-panel">
            <h3 className="font-serif text-3xl text-[color:var(--paper)]">{t("Facebook")}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">{t("Connect with the brand and inquire through social media.")}</p>
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
  const t = useT();
  return (
    <section className="section-shell section-dark border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="eyebrow">{t(eyebrow)}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-[color:var(--paper)] sm:text-5xl lg:text-6xl">
          {t(title)}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--muted-ink)] sm:text-lg">
          {t(description)}
        </p>
      </div>
    </section>
  );
}
