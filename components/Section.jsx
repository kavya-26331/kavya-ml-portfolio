export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto grid max-w-6xl gap-8 border-t border-line px-5 py-20 md:grid-cols-[220px_1fr]">
      <h2 className="text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
