import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { type Campaign } from "@/data/site";
import { cn } from "@/lib/utils";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [title, description]);
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{children}</p>;
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy: string }) {
  return <section className="px-5 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-[1500px]"><Eyebrow>{eyebrow}</Eyebrow><h1 className="max-w-6xl font-display text-6xl leading-[0.92] md:text-8xl lg:text-[8.5rem]">{title}</h1><p className="ml-auto mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">{copy}</p></div></section>;
}

/** Shows real campaign artwork when supplied, otherwise an editorial typographic cover. */
export function CampaignVisual({ campaign, className, eager }: { campaign: Campaign; className?: string; eager?: boolean }) {
  if (campaign.image) return <img src={campaign.image} alt={`${campaign.client} × ${campaign.property} campaign artwork`} loading={eager ? "eager" : "lazy"} className={cn("h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]", className)} />;
  return <div className={cn("dark flex h-full w-full flex-col justify-between bg-campaign-cover p-6 text-foreground transition-transform duration-700 group-hover:scale-[1.03] md:p-10", className)} role="img" aria-label={`${campaign.client} × ${campaign.property}`}>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">{campaign.categories[0]}</span>
    <div><p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">{campaign.client}</p><p className="mt-2 font-display text-4xl italic leading-none md:text-6xl">{campaign.property}</p></div>
  </div>;
}

export function CampaignCard({ campaign, index, priority = false, aspect = "aspect-[4/3]" }: { campaign: Campaign; index?: number; priority?: boolean; aspect?: string }) {
  return <Link to={`/work/${campaign.slug}`} className="group block">
    <div className={cn("relative overflow-hidden bg-muted", aspect)}><CampaignVisual campaign={campaign} eager={priority} /></div>
    <div className="border-b border-border py-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{index !== undefined && <span className="mr-3 text-primary">{String(index + 1).padStart(2, "0")}</span>}{campaign.categories.join(" · ")}</p>
      <h3 className="mt-2 font-display text-3xl transition-colors group-hover:text-primary">{campaign.client} × {campaign.property}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{campaign.shortDescription}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em]">View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
    </div>
  </Link>;
}

export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <Link to={to} className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:text-primary">{children}<ArrowRight className="h-4 w-4" /></Link>;
}
