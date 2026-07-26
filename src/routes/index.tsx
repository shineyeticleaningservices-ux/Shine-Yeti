import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin, Star, Phone, Shield, Users, Tag, CalendarClock, Leaf, CheckCircle2,
  Home, Building2, Sparkles, KeyRound, Truck, Store, Check, ArrowRight, Mail, Clock,
  Menu, X, HeartHandshake,
} from "lucide-react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendEnquiry } from "@/lib/send-enquiry.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shine Yeti Cleaning — Trusted Adelaide Cleaners" },
      {
        name: "description",
        content:
          "Reliable, insured residential and commercial cleaning across Adelaide. House, office, deep, end-of-lease and move in/out cleans. Rated 5.0 on Google.",
      },
      { property: "og:title", content: "Shine Yeti Cleaning — Trusted Adelaide Cleaners" },
      {
        property: "og:description",
        content: "Reliable, insured residential and commercial cleaning across Adelaide. House, office, deep, end-of-lease and move in/out cleans. Rated 5.0 on Google.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, image: "/images/service-house.jpg", title: "House Cleaning", desc: "Regular or one-off home cleans that leave every room fresh, spotless and calm." },
  { icon: Building2, image: "/images/service-office.jpg", title: "Office Cleaning", desc: "Reliable weekly or daily office cleaning that keeps your team healthy and productive." },
  { icon: Sparkles, image: "/images/service-deep.jpg", title: "Deep Cleaning", desc: "Top-to-bottom detail: appliances, skirting, tile grout, tracks and hard-to-reach spots." },
  { icon: KeyRound, image: "/images/service-lease.jpg", title: "End of Lease", desc: "Thorough end-of-lease cleans built around Adelaide agent inspection checklists." },
  { icon: Truck, image: "/images/service-move.jpg", title: "Move In / Move Out", desc: "Fresh-start cleans for new places or handover cleans as you move out." },
  { icon: Store, image: "/images/service-commercial.jpg", title: "Commercial Cleaning", desc: "Retail, hospitality and strata — tailored programmes with consistent, quality crews." },
  { icon: HeartHandshake, image: "/images/service-ndis.jpg", title: "NDIS Cleaning", desc: "Reliable, respectful NDIS cleaning support tailored to participants' plans and homes." },
];

const reasons = [
  { icon: Shield, title: "Fully Insured", desc: "Public liability cover on every job for total peace of mind." },
  { icon: Users, title: "Experienced Team", desc: "Trained, vetted cleaners who take real pride in their work." },
  { icon: Tag, title: "Affordable Pricing", desc: "Clear, upfront quotes with no hidden fees or surprises." },
  { icon: CalendarClock, title: "Flexible Scheduling", desc: "Weekly, fortnightly, one-off or after-hours — you choose." },
  { icon: Leaf, title: "Eco-Friendly Products", desc: "Low-tox, pet and family safe products by default." },
  { icon: CheckCircle2, title: "Quality Assured", desc: "Every clean is checked against our detailed quality checklist." },
];

const testimonials = [
  {
    name: "Sarah M.",
    image: "/images/testimonial-kitchen.jpg",
    role: "Cottage kitchen deep clean",
    text: "We have had several different cleaning companies over the last five years, and Shine Yeti Cleaning is by far the best. They go over and beyond every single time, with amazing attention to detail.",
  },
  {
    name: "James P.",
    image: "/images/testimonial-bedroom.jpg",
    role: "End-of-lease · Norwood",
    text: "Booked an end-of-lease clean at short notice. The property was spotless — got the full bond back with zero fuss. Friendly team, fair price.",
  },
  {
    name: "Stephanie Mace",
    image: "/images/testimonial-bathroom.jpg",
    role: "Regular house clean · Adelaide",
    text: "I've been so impressed with Shine Yeti's service. The quality of the cleaning is consistently excellent, communication is always prompt and easy, and they're accommodating when it comes to availability. Their rates are also very reasonable, especially for the high standard of work they provide. I wouldn't hesitate to recommend Shine Yeti to anyone looking for a trustworthy and professional cleaner.",
  },
];

const faqs = [
  { q: "Do you clean end-of-lease properties?", a: "Yes — our end-of-lease cleans follow the standard Adelaide agent inspection checklists and include oven, windows, walls spot-clean and carpet edge detail." },
  { q: "What products do you use?", a: "Low-tox, eco-friendly products by default — safe for kids and pets. We can also use client-supplied products on request." },
  { q: "How quickly can you book me in?", a: "Most weeks we can offer a same-week booking. For urgent end-of-lease jobs, we do our best to fit you in within 48 hours." },
  { q: "Which suburbs do you cover?", a: "The greater Adelaide metro area — from Gawler and Salisbury in the north to Morphett Vale in the south, and everywhere in between." },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <Header />
      <Hero />
      <Trust />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <img src="/images/shine-yeti-logo.jpg" alt="Shine Yeti Cleaning Services logo" width={44} height={44} className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-soft sm:h-11 sm:w-11" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-base font-extrabold text-brand">Shine Yeti</span>
            <span className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Cleaning Services
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="tel:0451211842" className="hidden items-center gap-2 text-sm font-semibold text-brand xl:flex">
            <Phone className="h-4 w-4" /> 0451211842
          </a>
          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-brand lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-5">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-foreground/80 hover:bg-accent/20 hover:text-brand"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:0451211842"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-base font-semibold text-brand"
            >
              <Phone className="h-4 w-4" /> 0451211842
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground shadow-soft"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-5 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground/80 shadow-soft">
            <MapPin className="h-3.5 w-3.5 text-accent" /> Adelaide, South Australia
            <span className="mx-1 h-3 w-px bg-border" />
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> Rated 5.0
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-brand sm:text-5xl lg:text-6xl">
            Professional cleaning services you can{" "}
            <span className="relative inline-block">
              <span className="relative z-10">trust</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-accent/60" />
            </span>
            .
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Reliable residential and commercial cleaning across Adelaide — with the kind of attention to detail
            that earns 5-star reviews and repeat customers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:0451211842" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-brand shadow-soft transition-colors hover:bg-accent/20">
              <Phone className="h-4 w-4" /> 0451211842
            </a>
          </div>
          <div className="mt-10 grid max-w-lg mx-auto grid-cols-3 gap-4 border-t border-border/70 pt-6 text-center sm:gap-6">
            <Stat top={<span className="flex items-center gap-1">5.0 <Star className="h-4 w-4 fill-accent text-accent" /></span>} label="50+ Google reviews" />
            <Stat top="Detail" label="Driven cleans" />
            <Stat top="Fully" label="Insured & vetted" />
          </div>
        </div>
        <div className="relative order-first lg:order-none">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/30 blur-2xl" />
          <img
            src="/images/hero-clean.jpg"
            alt="Professional cleaner mopping a sunlit living room in Adelaide"
            width={1400}
            height={1100}
            className="h-64 w-full rounded-[1.5rem] object-cover shadow-soft sm:h-96 lg:h-full lg:rounded-[1.75rem]"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ top, label }: { top: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="flex justify-center font-display text-lg font-extrabold text-brand sm:text-xl">{top}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Trust() {
  const items = ["Fully Insured", "Police-Checked Team", "Eco Products", "Same-Week Booking"];
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-sm font-medium text-muted-foreground sm:gap-x-10 sm:px-5 sm:py-5 lg:px-8">
        {items.map((i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-accent" /> {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-6 text-brand-foreground shadow-soft sm:p-10">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex justify-center">
            <div className="rounded-2xl bg-white/95 p-4 shadow-soft sm:p-6">
              <img
                src="/images/shine-yeti-logo.jpg"
                alt="Shine Yeti Cleaning Services logo"
                width={320}
                height={320}
                className="h-40 w-40 object-contain sm:h-64 sm:w-64"
              />
            </div>
          </div>
          <ul className="relative mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {[
              "Locally owned & operated",
              "Background-checked staff",
              "Non-toxic, pet-safe products",
              "Transparent, upfront pricing",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-accent text-brand">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="relative mt-6 rounded-2xl bg-white/10 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Trusted by 200+ Adelaide households & businesses
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            About Shine Yeti
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand sm:text-3xl lg:text-4xl">
            A locally trusted name in Adelaide cleaning.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Shine Yeti Cleaning Services is a family-run team dedicated to spotless homes, offices and
            end-of-lease properties across greater Adelaide. We combine meticulous attention to detail with
            genuinely friendly service — the kind of clean that makes you want to walk barefoot across the floor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:0451211842" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-brand hover:bg-accent/20">
              <Phone className="h-4 w-4" /> 0451211842
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-hero-gradient">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Our Services</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand sm:text-3xl lg:text-4xl">
            Cleaning tailored to how you live and work.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            From weekly homes to end-of-lease handovers, we bring the same standard of care to every job across Adelaide.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-card/95 text-brand shadow-card backdrop-blur transition-colors group-hover:bg-accent">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold text-brand">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Why Choose Us</p>
        <h2 className="mt-3 font-display text-2xl font-extrabold text-brand sm:text-3xl lg:text-4xl">
          Six reasons Adelaide keeps calling Shine Yeti.
        </h2>
      </div>
      <div className="mt-10 grid gap-x-8 gap-y-8 sm:mt-14 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-accent">
              <r.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-base font-bold text-brand">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Testimonials</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Rated 5.0 by Adelaide customers.
          </h2>
          <p className="mt-4 text-sm text-brand-foreground/70 sm:text-base">Real reviews from real Shine Yeti clients on Google.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <img
                src={t.image}
                alt={`${t.role} completed by Shine Yeti`}
                width={800}
                height={520}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 sm:p-7">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-brand-foreground/90">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-brand-foreground/60">{t.role}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-brand-foreground/60">
          We service the greater Adelaide metro area — from Gawler and Salisbury in the north to Morphett Vale
          in the south, and everywhere between. Not sure if we come to you? Just ask.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">FAQ</p>
        <h2 className="mt-3 font-display text-2xl font-extrabold text-brand sm:text-3xl lg:text-4xl">
          Common questions, answered.
        </h2>
      </div>
      <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card sm:mt-12">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="font-display text-sm font-semibold text-brand sm:text-base">{f.q}</span>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/25 text-brand transition-transform ${isOpen ? "rotate-45" : ""}`}>
                  <span className="text-lg leading-none">+</span>
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-6">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const submit = useServerFn(sendEnquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  return (
    <section id="contact" className="bg-hero-gradient">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-5 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Get In Touch</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand sm:text-3xl lg:text-4xl">
            Request a free quote.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Tell us about your space and preferred time. We'll reply within a few hours with a friendly,
            no-obligation quote.
          </p>
          <div className="mt-8 space-y-5 text-sm">
            <ContactRow icon={Phone} label="Phone" value="0451211842" href="tel:0451211842" />
            <ContactRow icon={MapPin} label="Service Area" value="Adelaide, South Australia" />
            <ContactRow icon={Clock} label="Hours" value="Mon – Sat · 7am – 7pm" />
            <ContactRow icon={Mail} label="Email" value="shineyeticleaningservices@gmail.com" href="mailto:shineyeticleaningservices@gmail.com" />
          </div>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (status === "sending") return;
            const form = e.currentTarget;
            const fd = new FormData(form);
            const data = {
              name: String(fd.get("name") || "").trim(),
              phone: String(fd.get("phone") || "").trim(),
              email: String(fd.get("email") || "").trim() || undefined,
              service: String(fd.get("service") || "").trim() || undefined,
              address: String(fd.get("address") || "").trim() || undefined,
              preferredTime: String(fd.get("preferredTime") || "").trim() || undefined,
              preferredDate: String(fd.get("preferredDate") || "").trim() || undefined,
              message: String(fd.get("message") || "").trim() || undefined,
            };
            setStatus("sending");
            setErrorMsg("");
            try {
              await submit({ data });
              setStatus("sent");
              form.reset();
            } catch (err) {
              console.error(err);
              setStatus("error");
              setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
            }
          }}
          className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7 lg:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your full name" required />
            <Field label="Phone" name="phone" placeholder="04xx xxx xxx" required />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand/70">Service</label>
              <select
                name="service"
                className="h-11 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
              >
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <Field label="Address" name="address" placeholder="Street address, suburb, postcode" required />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand/70">Preferred Time</label>
              <select
                name="preferredTime"
                className="h-11 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
              >
                <option>Morning · 7am – 12pm</option>
                <option>Afternoon · 12pm – 4pm</option>
                <option>Evening · 4pm – 7pm</option>
                <option>Anytime</option>
                <option>Weekend preferred</option>
              </select>
            </div>
            <Field label="Preferred Date" name="preferredDate" type="date" />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-brand/70">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us a bit about your space and any special requirements…"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            {status === "sending" ? "Sending…" : "Send Enquiry"} <ArrowRight className="h-4 w-4" />
          </button>
          {status === "sent" && (
            <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Thanks! Your enquiry has been sent — we'll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
              {errorMsg || "Couldn't send your enquiry. Please call 0451211842."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-brand/70">{label}</label>
      <input
        {...props}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        {href ? (
          <a href={href} className="truncate font-display text-base font-semibold text-brand hover:underline">
            {value}
          </a>
        ) : (
          <div className="truncate font-display text-base font-semibold text-brand">{value}</div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-muted-foreground sm:px-5 lg:flex-row lg:px-8 lg:text-left">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <img src="/images/shine-yeti-logo.jpg" alt="Shine Yeti logo" width={36} height={36} className="h-9 w-9 shrink-0 rounded-lg object-cover" />
          <span>
            <span className="font-display font-bold text-brand">Shine Yeti Cleaning</span> · Reliable, insured cleaning across Adelaide.
          </span>
        </div>
        <div>© {new Date().getFullYear()} Shine Yeti Cleaning Services</div>
      </div>
    </footer>
  );
}
