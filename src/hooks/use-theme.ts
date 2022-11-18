import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const localTheme = getLocalTheme();
    const isDarkOs = matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = localTheme === "dark" || (!localTheme && isDarkOs);
    const theme = isDark ? "dark" : "light";
    setTheme(theme);
    setHtmlTheme(theme);
  }, []);

  const toggle = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    setHtmlTheme(nextTheme);
    setLocalTheme(nextTheme);
  };

  return { theme, toggle };
}

function setHtmlTheme(theme: Theme) {
  const html = document.documentElement;

  if (theme === "light") {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
}

function getLocalTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return;
  }
}

function setLocalTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    return;
  }
}
