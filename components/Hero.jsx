import ForecastChart from "./ForecastChart";
import { profile as p } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.15fr_1fr] md:pt-24">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-mute">
          <span className="h-2 w-2 rounded-full bg-sig" /> {p.role}, open to opportunities
        </p>
        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{p.tagline}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{p.sub}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-sig px-6 py-3 font-medium text-bg transition hover:brightness-110">See the live projects</a>
          <a href={`mailto:${p.contact.email}`} className="rounded-full border border-line px-6 py-3 font-medium transition hover:border-sig">Email me</a>
        </div>
        <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
          {p.stats.map((s) => (
            <div key={s.l}><dt className="text-2xl font-semibold">{s.v}</dt><dd className="mt-1 text-xs leading-snug text-mute">{s.l}</dd></div>
          ))}
        </dl>
      </div>
      <ForecastChart />
    </section>
  );
}
