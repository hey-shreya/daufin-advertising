import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, BookOpen } from "lucide-react";
import { campaigns, campaignName } from "@/data/site";
import { CampaignVisual, Eyebrow, usePageMeta } from "@/components/site/Editorial";

export default function CaseStudy() {
  const { slug } = useParams();
  const index = campaigns.findIndex((item) => item.slug === slug);
  const campaign = campaigns[index];
  usePageMeta(
    campaign ? `${campaignName(campaign)} | Daufin Advertising` : "Daufin Advertising",
    campaign?.shortDescription ?? "",
  );
  if (index < 0) return <Navigate to="/work" replace />;

  const prev = campaigns[(index - 1 + campaigns.length) % campaigns.length];
  const next = campaigns[(index + 1) % campaigns.length];
  const blocks: [string, string | undefined][] = [
    ["Objective", campaign.objective],
    ["The connection", campaign.connection],
    ["The campaign", campaign.campaign],
    ["Takeaway", campaign.impact],
  ];

  return (
    <article>
      {/* ── Header + hero visual ── */}
      <section className="px-5 pt-10 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <Link to="/work" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] hover:text-primary">
            <ArrowLeft className="h-4 w-4" />All work
          </Link>

          <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                {String(index + 1).padStart(2, "0")} / {campaign.categories.join(" · ")}
              </p>
              <h1 className="font-display text-6xl leading-[0.9] md:text-8xl">
                {campaign.client}<span className="text-primary"> × </span><br />{campaign.property}
              </h1>
            </div>
            <p className="font-display text-3xl italic leading-tight text-muted-foreground md:text-5xl">
              {campaign.tagline}
            </p>
          </div>

          {/* Campaign artwork */}
          <div className="group relative overflow-hidden rounded-sm border border-border bg-neutral-950/90" style={{ aspectRatio: campaign.image ? "21/9" : "16/9" }}>
            {campaign.image ? (
              <img
                src={campaign.image}
                alt={`${campaignName(campaign)} campaign artwork`}
                loading="eager"
                className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.01]"
              />
            ) : (
              <CampaignVisual campaign={campaign} eager className="group-hover:scale-100" />
            )}
          </div>

          {/* Watch / Read links — pill style, more visible */}
          {campaign.links?.length ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {campaign.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={l.type === "video" ? "promo-pill" : "article-pill"}
                >
                  {l.type === "video"
                    ? <ExternalLink className="h-3.5 w-3.5" />
                    : <BookOpen className="h-3.5 w-3.5" />
                  }
                  {l.label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* ── Artwork quote — tighter top padding, no excess gap ── */}
      {campaign.artworkLine && (
        <section className="px-5 pt-12 md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <Eyebrow>From the campaign artwork</Eyebrow>
            <p className="font-display text-4xl italic md:text-6xl">"{campaign.artworkLine}"</p>
          </div>
        </section>
      )}

      {/* ── Info blocks ── */}
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-px bg-border md:grid-cols-2">
          {blocks.filter(([, t]) => t).map(([label, text]) => (
            <div key={label} className="bg-background p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{label}</p>
              <p className="mt-6 text-xl leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Activation — glassmorphism panel, no harsh dark block ── */}
      {campaign.activation && (
        <section className="glass-activation px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <Eyebrow>Activation</Eyebrow>
            <ul className="divide-y divide-primary/15 border-y border-primary/15">
              {campaign.activation.map((a, i) => (
                <li key={a} className="flex gap-6 py-5 font-display text-3xl md:text-5xl">
                  <span className="mt-3 font-sans text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {campaign.gallery && (
        <section className="px-5 py-16 md:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2">
            {campaign.gallery.map((src) => (
              <img key={src} src={src} alt={`${campaignName(campaign)} campaign visual`} loading="lazy" className="w-full object-cover" />
            ))}
          </div>
        </section>
      )}

      {/* ── Prev / Next navigation — larger, more prominent ── */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2">
          <Link
            to={`/work/${prev.slug}`}
            className="group rounded-md border border-border p-8 transition-all duration-300 hover:border-primary/60 hover:bg-card"
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Previous project
            </p>
            <h2 className="font-display text-3xl md:text-5xl">{campaignName(prev)}</h2>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-primary">
              View case study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="group rounded-md border border-border p-8 text-right transition-all duration-300 hover:border-primary/60 hover:bg-card"
          >
            <p className="mb-4 flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
              Next project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </p>
            <h2 className="font-display text-3xl md:text-5xl">{campaignName(next)}</h2>
            <span className="mt-4 inline-flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-primary">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              View case study
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
