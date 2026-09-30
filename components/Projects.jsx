import Section from "./Section";
import { profile as p } from "@/data/profile";

function Card({ pr }) {
  return (
    <article className={`group flex flex-col rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-sig/70 ${pr.featured ? "md:col-span-1" : ""}`}>
      <p className="text-sm text-amb">{pr.kind}</p>
      <h3 className="mt-1 text-xl font-semibold">{pr.title}</h3>
      <p className="mt-3 leading-relaxed text-mute">{pr.summary}</p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {pr.points.map((t) => (<li key={t} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sig" />{t}</li>))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {pr.metrics.map((m) => (<span key={m} className="rounded-md bg-sig/10 px-2 py-1 text-xs font-medium text-sig">{m}</span>))}
      </div>
      <p className="mt-4 font-mono text-xs text-mute">{pr.stack.join(", ")}</p>
      <a href={pr.live} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition group-hover:border-sig group-hover:text-sig">
        Open live demo <span className="transition group-hover:translate-x-1">↗</span>
      </a>
    </article>
  );
}

export default function Projects() {
  const top = p.projects.filter((x) => x.featured), rest = p.projects.filter((x) => !x.featured);
  return (
    <Section id="work" title="Selected work">
      <div className="grid gap-5 md:grid-cols-2">{top.map((x) => <Card key={x.title} pr={x} />)}</div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">{rest.map((x) => <Card key={x.title} pr={x} />)}</div>
    </Section>
  );
}
