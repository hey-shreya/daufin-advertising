import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow, PageIntro, TextLink } from "@/components/site/Editorial";
import { CONTACT_EMAIL, leaders, method, services, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/data/site";
import ctaImage from "@/assets/home-cta.jpg";

export function About() {
  return (
    <>
      <PageIntro
        eyebrow="Who we are"
        title="Built between brand ambition and audience instinct."
        copy="Daufin is a Mumbai-based creative agency working where entertainment, culture and commerce converge."
      />
      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1500px]">
          {/* Hero image — now uses home-cta.jpg for atmospheric feel */}
          <img
            src={ctaImage}
            alt="Daufin Advertising — where creativity meets culture"
            width={1600}
            height={900}
            className="aspect-[16/8] w-full object-cover rounded-md"
          />

          <div className="grid gap-10 border-b border-border py-16 md:grid-cols-2">
            <h2 className="font-display text-5xl md:text-7xl">We know the story and the spreadsheet.</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>Our work combines entertainment relationships, creative thinking and commercial clarity. That means ideas can feel culturally alive and remain accountable to the business behind them.</p>
              <p>From film integrations to digital communities, we build collaborations around a simple belief: the audience should get something worth caring about.</p>
            </div>
          </div>

          <div className="border-b border-border py-16">
            <Eyebrow>How we work</Eyebrow>
            <div className="mt-8 grid gap-8 md:grid-cols-5">
              {method.map(([n, t, d]) => (
                <div key={n}>
                  <span className="text-xs font-bold text-primary">{n}</span>
                  <h3 className="mt-3 font-display text-3xl">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="leadership" className="py-20">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="font-display text-5xl md:text-7xl">The people<br />behind the connections.</h2>
            <div className="mt-14 grid gap-14 md:grid-cols-2">
              {leaders.map((l, i) => (
                <article key={l.name} className={i === 0 ? "border-l-2 border-primary pl-8" : "border-l border-border pl-8"}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{l.role}</p>
                  <h3 className="mt-3 font-display text-4xl md:text-6xl">{l.name}</h3>
                  <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                    {l.bio.map((b) => <p key={b}>{b}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="Ideas designed to travel."
        copy="From the screen to the street to the feed, we build connected work around how people actually experience culture."
      />
      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1500px] divide-y divide-border border-t border-border">
          {services.map((service) => (
            <article key={service.number} className="grid gap-6 py-10 md:grid-cols-[100px_1fr_1fr] md:py-16">
              <span className="text-xs font-bold text-primary">{service.number}</span>
              <h2 className="font-display text-4xl md:text-5xl">{service.title}</h2>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="glass-activation px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <Eyebrow>Across the ecosystem</Eyebrow>
          <p className="font-display text-4xl leading-tight md:text-6xl">
            Bollywood · OTT · Television · Music · Digital · Live Experiences · Brand Films · Custom Activations
          </p>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const openWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hi Daufin,",
      `Name: ${data.get("name")}`,
      data.get("company") ? `Company: ${data.get("company")}` : null,
      `Email: ${data.get("email")}`,
      data.get("project") ? `Project: ${data.get("project")}` : null,
      "",
      `Brief: ${data.get("brief")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.slice(0, 3000))}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's create something worth remembering."
        copy="Tell us what you want to move — a brand, a launch, an audience or an entire category."
      />
      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <MapPin className="mb-3 h-5 w-5 text-primary" />
              <p className="font-display text-2xl">Mumbai, Maharashtra</p>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Prefer a direct conversation?</p>
            <div>
              <MessageCircle className="mb-3 h-5 w-5 text-primary" />
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">WhatsApp</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-display text-2xl hover:text-primary">{WHATSAPP_DISPLAY}</a>
            </div>
            <div>
              <Mail className="mb-3 h-5 w-5 text-primary" />
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-all font-display text-2xl hover:text-primary">{CONTACT_EMAIL}</a>
            </div>
          </div>
          {sent ? (
            <div className="flex min-h-80 flex-col items-center justify-center border border-border rounded-md text-center p-8">
              <Check className="mb-5 h-8 w-8 text-primary" />
              <h2 className="font-display text-4xl">Opening WhatsApp.</h2>
              <p className="mt-3 max-w-md text-muted-foreground">Your brief is ready to send — just press send in WhatsApp and Daufin will reply directly.</p>
            </div>
          ) : (
            <form onSubmit={openWhatsApp} className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Input aria-label="Name" name="name" maxLength={100} placeholder="Your name" required />
                <Input aria-label="Email" name="email" maxLength={255} type="email" placeholder="Email address" required />
              </div>
              <Input aria-label="Company" name="company" maxLength={120} placeholder="Company / brand" />
              <Input aria-label="Project type" name="project" maxLength={120} placeholder="What are we making?" />
              <Textarea aria-label="Brief" name="brief" maxLength={2000} placeholder="Tell us about the ambition" rows={6} required />
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" className="w-fit uppercase tracking-[0.12em]">
                  Send enquiry <ArrowRight />
                </Button>
                <p className="text-sm text-muted-foreground">
                  Opens WhatsApp with your brief. Or email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline-offset-4 hover:underline">{CONTACT_EMAIL}</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
