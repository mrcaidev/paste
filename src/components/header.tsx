import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "src/hooks/use-theme";

const Logo = () => (
  <Link href="/" aria-label="Logo">
    <Image
      src={logo}
      alt="Logo"
      width="32"
      height="40"
      className="w-8 h-10 p-1"
    />
  </Link>
);

const ThemeToggler = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2"
    >
      {theme === "dark" ? <FiSun size="24" /> : <FiMoon size="24" />}
    </button>
  );
};

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-slate-100 dark:bg-slate-900 bg-opacity-70 dark:bg-opacity-70 backdrop-blur z-10">
    <div className="flex justify-between items-center max-w-6xl px-8 py-4 mx-auto">
      <Logo />
      <ThemeToggler />
    </div>
  </header>
);
