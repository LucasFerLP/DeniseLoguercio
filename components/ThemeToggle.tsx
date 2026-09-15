"use client";

import { useSyncExternalStore } from "react";
import { RegistrationMark } from "./RegistrationMark";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function setDarkMode(next: boolean) {
  document.documentElement.classList.toggle("dark", next);
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {
    // localStorage unavailable (private mode, etc.) — theme just won't persist.
  }
  listeners.forEach((notify) => notify());
}

export function ThemeToggle({ className }: { className?: string }) {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!dark)}
      aria-pressed={dark}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a negativo (modo oscuro)"}
      title={dark ? "Modo claro" : "Negativo"}
      className={`theme-toggle flex items-center justify-center text-ink ${className ?? ""}`}
    >
      <RegistrationMark active={dark} className="h-5 w-5" />
    </button>
  );
}
