import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { campaigns, campaignName } from "@/data/site";
import { CampaignVisual, Eyebrow, usePageMeta } from "@/components/site/Editorial";

export default function CaseStudy() {
  const { slug } = useParams();
  const index = campaigns.findIndex((item) => item.slug === slug);
  const campaign = campaigns[index];
  usePageMeta(campaign ? `${campaignName(campaign)} | Daufin Advertising` : "Daufin Advertising", campaign?.shortDescription ?? "");
  if (index < 0) return <Navigate to="/work" replace />;
  const prev = campaigns[(index - 1 + campaigns.length) % campaigns.length];
  const next = campaigns[(index + 1) % campaigns.length];
  const blocks: [string, string | undefined][] = [["Objective", campaign.objective], ["The connection", campaign.connection], ["The campaign", campaign.campaign], ["Takeaway", campaign.impact]];
  return <article>
    <section className="px-5 pt-10 md:px-10"><div className="mx-auto max-w-[1500px]">
      <Link to="/work" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] hover:text-primary"><ArrowLeft className="h-4 w-4" />All work</Link>
      <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-primary">{String(index + 1).padStart(2, "0")} / {campaign.categories.join(" · ")}</p><h1 className="font-display text-6xl leading-[0.9] md:text-8xl">{campaign.client}<span className="text-primary"> × </span><br />{campaign.property}</h1></div>
        <p className="font-display text-3xl italic leading-tight text-muted-foreground md:text-5xl">{campaign.tagline}</p>
      </div>
      <div className="group aspect-[16/9] overflow-hidden bg-muted"><CampaignVisual campaign={campaign} eager className="group-hover:scale-100" /></div>
      {campaign.links?.length ? <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">{campaign.links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex items-center gap-3 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">{l.label}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-1" />
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary/40" />
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover/link:scale-x-100" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>))}</div> : null}
    </div></section>
    {campaign.artworkLine && <section className="px-5 pt-20 md:px-10"><div className="mx-auto max-w-[1500px]"><Eyebrow>From the campaign artwork</Eyebrow><p className="font-display text-4xl italic md:text-6xl">“{campaign.artworkLine}”</p></div></section>}
    <section className="px-5 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-px bg-border md:grid-cols-2">
      {blocks.filter(([, t]) => t).map(([label, text]) => <div key={label} className="bg-background p-8 md:p-12"><p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{label}</p><p className="mt-6 text-xl leading-relaxed">{text}</p></div>)}
    </div></section>
    {campaign.activation && <section className="dark bg-background px-5 py-20 text-foreground md:px-10 md:py-28"><div className="mx-auto max-w-[1500px]"><Eyebrow>Activation</Eyebrow><ul className="divide-y divide-border border-y border-border">{campaign.activation.map((a, i) => <li key={a} className="flex gap-6 py-5 font-display text-3xl md:text-5xl"><span className="mt-3 font-sans text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>{a}</li>)}</ul></div></section>}
    {campaign.gallery && <section className="px-5 py-20 md:px-10"><div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2">{campaign.gallery.map((src) => <img key={src} src={src} alt={`${campaignName(campaign)} campaign visual`} loading="lazy" className="w-full object-cover" />)}</div></section>}
    <section className="px-5 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-2">
      <Link to={`/work/${prev.slug}`} className="group border-b border-border pb-6"><p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />Previous project</p><h2 className="font-display text-3xl md:text-5xl">{campaignName(prev)}</h2></Link>
      <Link to={`/work/${next.slug}`} className="group border-b border-border pb-6 md:text-right"><p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary md:justify-end">Next project<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></p><h2 className="font-display text-3xl md:text-5xl">{campaignName(next)}</h2></Link>
    </div></section>
  </article>;
}
