"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const config = {
  name: "Nicholas Moreland",
  nav: [
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
};

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="relative mr-6 flex items-center space-x-2">
        {
          //<Icons.logo className="h-6 w-6" />
        }
        <span className="hidden font-bold md:inline-block">{config.name}</span>
        <Badge>Beta</Badge>
      </Link>
      <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
        {config.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            className={cn(
              "flex items-center justify-center transition-colors hover:text-foreground/80",
              pathname?.startsWith(item.href!)
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
