import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { appConfig } from "@/data/app-config";
import { trackMainPortfolioClick } from "@/lib/analytics";

export default function NavHeader() {
  return (
    <header className="flex justify-between items-center w-full px-6 py-6 fixed top-0 z-50">
      <a href='/' className="font-mono text-foreground text-sm uppercase tracking-widest font-semibold">
        {appConfig.appName}
      </a>
      <nav className="flex gap-6">
        <Link href={appConfig.social.mainPortfolio} onClick={trackMainPortfolioClick} target="_blank" className="font-mono text-foreground text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
          Main Portfolio
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};
