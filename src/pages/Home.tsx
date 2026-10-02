import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ArrowLeft, ChevronDown, Megaphone, Gem, MonitorSmartphone, BarChart3, Lightbulb, LineChart, Target, Layers, Quote, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CampaignVisual, usePageMeta } from "@/components/site/Editorial";
import { campaigns } from "@/data/site";
import heroImg from "@/assets/home-hero.jpg";
import approachImg from "@/assets/home-approach.jpg";
import ctaImg from "@/assets/home-cta.jpg";
import ribbonImg from "@/assets/home-ribbon.jpg";
import cinemaImg from "@/assets/campaign-cinema.jpg";

const bySlug = (s: string) => campaigns.find((c) => c.slug === s)!;
const featured = bySlug("bru-aisha");
const minis = [["parker-pens-aarakshan", "Film Integration"], ["monster-transformers", "Global Campaign"], ["godrej-roy", "Brand Film"]] as const;

const whatWeDo = [
  [Megaphone, "Advertising", "Campaigns that capture attention."],
  [Gem, "Branding", "Distinct identities with lasting impact."],
  [MonitorSmartphone, "Digital", "Engaging experiences across platforms."],
  [BarChart3, "Strategy", "Ideas backed by insights."],
] as const;
const approach = [
  ["Strategy", "Understand the brand, audience and opportunity."],
  ["Creative", "Turn insight into bold, culturally relevant ideas."],
  ["Execution", "Bring ideas to life across media, content and experiences."],
  ["Growth", "Create lasting impact and measurable results."],
];
const experience = ["Advertising.", "Entertainment.", "Digital.", "Content."];
const deep = [
  ["Advertising", "Campaigns that create conversations.", heroImg],
  ["Branding", "Identities that stand out and stay relevant.", ribbonImg],
  ["Digital", "Experiences that connect across platforms.", cinemaImg],
] as const;
const pillars = [[Lightbulb, "Creative Thinking"], [LineChart, "Data Insights"], [Target, "Strategic Approach"], [Layers, "Seamless Execution"]] as const;
const stories = [{ quote: "Brands become more meaningful when they become part of culture." }];
const faqs = [
  ["What does Daufin do?", "Daufin connects brands with culture through advertising, branded entertainment, brand integration, content, digital and experiential campaigns."],
  ["How does the process work?", "We move from strategy to creative to execution to growth — understanding the brand and audience first, then building and delivering the idea across the right media."],
  ["What industries do you work with?", "Our work spans FMCG, consumer electronics, telecom, education, retail, jewellery, building materials, travel and more."],
  ["Can you handle end-to-end campaigns?", "Yes. From the first idea to on-ground activation and digital amplification, Daufin can run the full campaign."],
  ["Can you work with existing brand teams?", "Absolutely. We regularly partner with in-house marketing teams and their agencies."],
];

function Label({ children, n }: { children: React.ReactNode; n?: string }) {
  return <div className="mb-8 flex items-center gap-4"><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{children}</span><span className="h-px flex-1 bg-border" />{n && <span className="text-[10px] font-bold tracking-[0.2em] text-primary">{n}</span>}</div>;
}
const wrap = "mx-auto max-w-[1400px] px-5 md:px-10";
const circle = "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground";

export default function Home() {
  usePageMeta("Daufin Advertising | Where Brands Meet Culture", "Daufin Advertising builds brands that get noticed through advertising, branded entertainment, digital and strategy.");
  const story = 0;
  const s = stories[story];
  const scrollNext = () => document.getElementById("trusted")?.scrollIntoView({ behavior: "smooth" });

  return <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-hero-wash">
      <img src={heroImg} alt="" width={1408} height={1056} className="hero-photo absolute inset-y-0 right-0 h-full w-full object-cover md:w-[62%]" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className={`${wrap} relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16`}>
        <p className="animate-fade-in text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Daufin Advertising</p>
        <h1 className="animate-fade-in mt-5 max-w-3xl font-display text-6xl uppercase leading-[0.88] md:text-8xl lg:text-[8.5rem]">We build brands that get <span className="italic text-primary">noticed.</span></h1>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">Advertising <span className="text-primary">×</span> Digital <span className="text-primary">×</span> Strategy</p>
        <p className="mt-4 max-w-md text-muted-foreground">We create bold ideas, engaging content and impactful campaigns that help brands become part of culture.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Start a project <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="outline" className="bg-background/40"><Link to="/work">Explore our work <ArrowRight /></Link></Button>
        </div>
        <button onClick={scrollNext} className="mt-14 inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"><span className="flex h-9 w-6 items-start justify-center rounded-full border border-border pt-1.5"><ChevronDown className="h-3 w-3 animate-bounce" /></span>Scroll</button>
      </div>
    </section>

    {/* Trusted by */}
    <section id="trusted" className="scroll-mt-20 border-y border-border py-12"><div className={wrap}>
      <Label n="01">Trusted by</Label>
      <div className="flex flex-wrap items-center justify-between gap-8 text-muted-foreground">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/80 text-sm font-extrabold text-background">BRU</span>
        <span className="font-display text-2xl uppercase tracking-[0.25em]">Parker</span>
        <span className="font-display text-3xl italic">Godrej</span>
        <span className="text-xl font-extrabold uppercase tracking-[0.15em]">Monster</span>
        <span className="font-display text-3xl italic font-semibold">AirAsia</span>
      </div>
    </div></section>

    {/* What we do */}
    <section className="py-20 md:py-28"><div className={wrap}>
      <Label n="02">What we do</Label>
      <h2 className="font-display text-5xl leading-[1.02] md:text-6xl">We turn ideas into<br />brands <span className="italic text-primary">people remember.</span></h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whatWeDo.map(([Icon, t, d], i) => <Link key={t} to="/services" className="group flex flex-col rounded-md border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
          <Icon className="h-7 w-7 text-primary" strokeWidth={1.4} />
          <span className="mt-8 text-xs text-muted-foreground">0{i + 1}</span>
          <h3 className="mt-1 font-display text-2xl">{t}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          <span className={`${circle} mt-8 self-end`}><ArrowUpRight className="h-4 w-4" /></span>
        </Link>)}
      </div>
    </div></section>

    {/* Approach */}
    <section className="border-t border-border py-20 md:py-28"><div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
      <div>
        <Label n="03">Our approach</Label>
        <ol className="relative ml-2 border-l border-border">
          {approach.map(([t, d], i) => <li key={t} className="relative pb-10 pl-10 last:pb-0">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border border-primary bg-background" />
            <p className="flex items-baseline gap-4"><span className="text-sm text-primary">0{i + 1}</span><span className="font-display text-3xl">{t}</span></p>
            <p className="mt-2 max-w-xs pl-9 text-sm text-muted-foreground">{d}</p>
          </li>)}
        </ol>
      </div>
      <div className="overflow-hidden rounded-md"><img src={approachImg} alt="Cinematographer filming on a purple-lit set" loading="lazy" width={1200} height={1200} className="aspect-square w-full object-cover" /></div>
    </div></section>

    {/* Selected work */}
    <section className="border-t border-border py-20 md:py-28"><div className={wrap}>
      <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Selected work</span><Link to="/work" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary hover:gap-3 transition-all">View all work <ArrowRight className="h-4 w-4" /></Link></div>
      <Link to={`/work/${featured.slug}`} className="group mt-8 grid overflow-hidden rounded-md border border-border bg-card md:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden"><CampaignVisual campaign={featured} /></div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <h3 className="font-display text-4xl uppercase">{featured.client} × {featured.property}</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">Brand Campaign</p>
          <p className="mt-5 text-muted-foreground">{featured.shortDescription}</p>
          <span className="mt-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">View case study <span className={circle}><ArrowRight className="h-4 w-4" /></span></span>
        </div>
      </Link>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {minis.map(([slug, label]) => { const c = bySlug(slug); return <Link key={slug} to={`/work/${slug}`} className="group">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md"><CampaignVisual campaign={c} /></div>
          <div className="mt-3 flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.12em]">{c.client} × {c.property}</p><p className="text-xs text-muted-foreground">{label}</p></div><span className={circle}><ArrowUpRight className="h-4 w-4" /></span></div>
        </Link>; })}
      </div>
    </div></section>

    {/* The experience */}
    <section className="border-t border-border py-16"><div className={wrap}>
      <Label n="05">The experience</Label>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
        <p className="font-display text-5xl leading-[1.02] md:text-6xl">{experience.map((w, i) => <span key={w} className={i % 2 ? "block italic text-primary" : "block"}>{w}</span>)}</p>
        <p className="max-w-md text-muted-foreground">We create connections between brands, entertainment and audiences through integrated creative solutions.</p>
      </div>
    </div></section>

    {/* Deep-dive services */}
    <section className="border-t border-border py-20"><div className={wrap}>
      <div className="mb-8 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Deep-dive services</span><Link to="/services" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">Explore all services <ArrowRight className="h-4 w-4" /></Link></div>
      <div className="space-y-4">
        {deep.map(([t, d, img]) => <Link key={t} to="/services" className="group relative flex min-h-[150px] items-center overflow-hidden rounded-md border border-border bg-card">
          <img src={img} alt="" loading="lazy" className="absolute inset-y-0 right-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-deep-fade" />
          <div className="relative flex w-full items-center justify-between p-8"><div><h3 className="text-2xl font-semibold uppercase tracking-[0.06em]">{t}</h3><p className="mt-2 max-w-[14rem] text-sm text-muted-foreground">{d}</p></div><span className={`${circle} bg-background/60`}><ArrowUpRight className="h-4 w-4" /></span></div>
        </Link>)}
      </div>
    </div></section>

    {/* Why Daufin */}
    <section className="border-t border-border py-20 md:py-28"><div className={wrap}>
      <Label n="07">Why Daufin?</Label>
      <div className="grid gap-8 md:grid-cols-2"><h2 className="font-display text-5xl leading-tight md:text-6xl">Creative thinking.<br />Real impact.</h2><p className="max-w-md self-end text-muted-foreground">We bring together creativity, data, strategy and flawless execution to create work that doesn't just get seen — it gets remembered.</p></div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
        {pillars.map(([Icon, t], i) => <div key={t} className="flex items-center gap-6">
          <div className="flex flex-col items-center text-center"><Icon className="h-9 w-9 text-primary" strokeWidth={1.2} /><p className="mt-3 text-sm font-semibold">{t}</p></div>
          {i < pillars.length - 1 && <span className="hidden text-2xl text-primary md:inline">+</span>}
        </div>)}
      </div>
    </div></section>

    {/* Client stories */}
    <section className="border-t border-border py-20"><div className={wrap}>
      <div className="mb-8 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Our belief</span>
      </div>
      <figure key={story} className="animate-fade-in rounded-md border border-border bg-card p-8 md:p-12">
        <Quote className="h-12 w-12 fill-primary text-primary" strokeWidth={0} />
        <blockquote className="mt-4 max-w-3xl font-display text-2xl leading-snug md:text-3xl">{s.quote}</blockquote>
      </figure>
    </div></section>

    {/* FAQ */}
    <section className="border-t border-border py-20"><div className={wrap}>
      <div className="mb-6 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">FAQ</span><Link to="/contact" className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">Ask us anything →</Link></div>
      <Accordion type="single" collapsible>
        {faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">{q}</AccordionTrigger><AccordionContent className="max-w-2xl text-muted-foreground">{a}</AccordionContent></AccordionItem>)}
      </Accordion>
    </div></section>

    {/* Final CTA */}
    <section className="relative overflow-hidden bg-hero-wash">
      <img src={ctaImg} alt="" loading="lazy" width={1600} height={912} className="hero-photo absolute inset-y-0 right-0 h-full w-full object-cover md:w-[65%]" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className={`${wrap} relative py-24 md:py-32`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Ready to make</p>
        <h2 className="mt-4 font-display text-6xl uppercase leading-[0.9] md:text-8xl">Something<br /><span className="italic text-primary">impossible<br />to ignore?</span></h2>
        <p className="mt-6 text-muted-foreground">Let's create something people remember.</p>
        <Button asChild size="lg" className="mt-8"><Link to="/contact">Let's talk <ArrowRight /></Link></Button>
      </div>
    </section>
  </>;
}
