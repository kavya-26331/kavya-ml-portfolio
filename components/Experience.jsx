import Section from "./Section";
import { profile as p } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {p.experience.map((e) => (
        <div key={e.org} className="max-w-2xl">
          <h3 className="text-lg font-semibold">{e.role}, {e.org}</h3>
          <p className="text-sm text-mute">{e.when}</p>
          <ul className="mt-4 space-y-3 leading-relaxed text-mute">
            {e.points.map((t) => (<li key={t} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sig" />{t}</li>))}
          </ul>
        </div>
      ))}
      <h3 className="mb-3 mt-12 text-lg font-semibold">Certifications and training</h3>
      <ul className="max-w-2xl space-y-2 text-mute">{p.certs.map((c) => <li key={c}>{c}</li>)}</ul>
    </Section>
  );
}
