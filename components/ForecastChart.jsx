export default function ForecastChart() {
  const hist = "M0,190 C30,150 50,215 80,170 S130,115 160,150 S210,195 240,140 S290,85 320,120";
  const fc = "M320,120 C350,150 380,80 410,100 S470,60 520,80";
  return (
    <figure className="rounded-2xl border border-line bg-panel p-5 shadow-[0_20px_60px_-30px_rgb(var(--sig)/0.35)]">
      <svg viewBox="0 0 520 250" role="img" aria-label="Sales history with a forecast and uncertainty band" className="w-full">
        {[50, 100, 150, 200].map((y) => (<line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgb(var(--line))" strokeWidth="1" />))}
        <line x1="320" x2="320" y1="10" y2="240" stroke="rgb(var(--mute))" strokeWidth="1" strokeDasharray="3 5" opacity=".6" />
        <polygon className="later" points="320,112 410,72 520,42 520,125 410,132 320,130" fill="rgb(var(--amb))" opacity=".16" />
        <path className="draw" pathLength="1" d={hist} fill="none" stroke="rgb(var(--sig))" strokeWidth="3" strokeLinecap="round" />
        <path className="later" d={fc} fill="none" stroke="rgb(var(--amb))" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 7" />
        <circle className="later" cx="320" cy="120" r="5" fill="rgb(var(--amb))" />
        <text x="8" y="242" fontSize="12" fill="rgb(var(--mute))">History</text>
        <text x="330" y="242" fontSize="12" fill="rgb(var(--mute))">Forecast and 90% band</text>
      </svg>
      <figcaption className="mt-3 text-sm text-mute">The output I aim for on every project: a prediction, and an honest range around it.</figcaption>
    </figure>
  );
}
