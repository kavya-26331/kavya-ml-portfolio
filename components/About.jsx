import Section from "./Section";
import { profile as p } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-8 sm:grid-cols-[180px_1fr]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/profile.jpg" alt="Portrait of Kavya Sri Marripudi" className="aspect-[4/5] w-44 rounded-2xl border border-line object-cover object-top" />
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-mute">
          {p.about.map((t) => (<p key={t}>{t}</p>))}
        </div>
      </div>
    </Section>
  );
}
