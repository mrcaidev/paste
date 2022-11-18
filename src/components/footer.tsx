import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";
import { FiArrowUp, FiCode } from "react-icons/fi";

const year = new Date().getFullYear();

export const Footer = () => (
  <footer className="border-t border-t-slate-200 dark:border-t-slate-800">
    <div className="flex flex-col md:flex-row justify-between items-center gap-x-8 gap-y-2 max-w-6xl px-8 py-2 mx-auto">
      <Link
        href="/"
        className="flex items-center gap-3 order-2 md:order-1 px-2 py-1"
      >
        <Image src={logo} alt="Logo" width="20" height="28" />
        <p className="font-semibold text-lg">paste.mrcai.dev</p>
      </Link>
      <div className="order-3 md:order-2 py-1 space-y-1 text-xs text-slate-600 dark:text-slate-400 text-center">
        <small>©2022-{year} Yuwang Cai. All Rights Reserved.</small>
      </div>
      <div className="flex items-center gap-2 order-1 md:order-3">
        <a
          href="https://github.com/mrcaidev/paste"
          target="_blank"
          rel="noreferrer"
          aria-label="View source code on GitHub"
          className="p-2 hover:scale-110 active:scale-90 transition-transform"
        >
          <FiCode size="24" />
        </a>
        <button
          type="button"
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="p-2 hover:scale-110 active:scale-90 transition-transform"
        >
          <FiArrowUp size="24" />
        </button>
      </div>
    </div>
  </footer>
);
