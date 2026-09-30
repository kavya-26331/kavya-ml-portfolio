"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [t, setT] = useState("dark");
  useEffect(() => setT(document.documentElement.dataset.theme || "dark"), []);
  const flip = () => {
    const n = t === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = n;
    try { localStorage.setItem("theme", n); } catch (e) {}
    setT(n);
  };
  return (
    <button onClick={flip} aria-label="Toggle colour theme" className="rounded-full border border-line px-3 py-1 text-sm text-mute transition hover:border-sig hover:text-ink">
      {t === "dark" ? "Light" : "Dark"}
    </button>
  );
}
