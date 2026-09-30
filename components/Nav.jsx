import ThemeToggle from "./ThemeToggle";

const links = [["Work", "#work"], ["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-semibold tracking-tight">Kavya Sri</a>
        <ul className="hidden gap-6 text-sm text-mute md:flex">
          {links.map(([l, h]) => (<li key={h}><a className="transition hover:text-ink" href={h}>{l}</a></li>))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
