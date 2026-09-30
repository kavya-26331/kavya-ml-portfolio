import Section from "./Section";
import { profile as p } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {p.skills.map((s) => (
          <div key={s.g} className="grid gap-2 sm:grid-cols-[110px_1fr]">
            <h3 className="font-medium">{s.g}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (<span key={i} className="rounded-full border border-line px-3 py-1 text-sm text-mute transition hover:border-sig hover:text-ink">{i}</span>))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
