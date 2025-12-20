import { appConfig } from "@/data/app-config";
import { GitHub, Gmail, LinkedIn, Upwork, XformerlyTwitter } from "./icons";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-background">
      <footer className="bg-mid-green rounded-t-4xl md:rounded-t-[3rem] py-5">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <div className="flex items-center justify-start gap-1 text-sm text-background dark:text-foreground">
              <MapPin className="size-4" /> <p className="">{appConfig.contact.location}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link target="_blank" href={appConfig.social.upwork}><Upwork className="text-background dark:text-foreground" /></Link>
              <Link target="_blank" href={appConfig.social.linkedin}><LinkedIn className="text-background dark:text-foreground" /></Link>
              <Link target="_blank" href={appConfig.social.twitter}><XformerlyTwitter /></Link>
              <Link target="_blank" href={appConfig.social.github} ><GitHub /></Link>
              <Link target="_blank" href={`mailto:${appConfig.contact.email}`}><Gmail /></Link>
            </div>
            <p className="text-sm text-background dark:text-foreground">
              © {currentYear} {appConfig.appName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
