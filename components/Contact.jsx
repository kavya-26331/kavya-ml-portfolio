import Section from "./Section";
import { profile as p } from "@/data/profile";

export default function Contact() {
  const c = p.contact;
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-2xl font-semibold leading-snug">Hiring for a data science or ML role? I can start with a short technical conversation.</p>
      <a href={`mailto:${c.email}`} className="mt-6 inline-block rounded-full bg-sig px-6 py-3 font-medium text-bg transition hover:brightness-110">{c.email}</a>
      <div className="mt-6 flex flex-wrap gap-6 text-mute">
        <a className="transition hover:text-sig" href={c.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="transition hover:text-sig" href={c.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="transition hover:text-sig" href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
        <span>{c.place}</span>
      </div>
      <p className="mt-16 text-sm text-mute">© {new Date().getFullYear()} Kavya Sri Marripudi</p>
    </Section>
  );
}
