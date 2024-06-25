"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    <div className=" hidden md:flex">
      <motion.div
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex items-center px-2 rounded-sm",
          // light styles
          "hover:bg-gray-950/[.05]",
          // dark styles
          " dark:hover:bg-gray-50/[.10]"
        )}
      >
        <Link href="/" className="relative flex items-center py-1 rounded-lg">
          <Image
            src="https://avatars.githubusercontent.com/u/46201019?v=4"
            width={40}
            height={40}
            alt="Nicholas"
            className="overflow-hidden rounded-full p-1"
          />
          <span className="pl-1 leading-6 font-medium">Nicholas Moreland</span>
        </Link>
      </motion.div>
      <nav className="ml-2 hidden items-center space-x-2 font-medium md:flex">
        {config.nav.map((item) => (
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              key={item.href}
              href={item.href!}
              className={cn(
                "flex items-center justify-center transition-colors p-2 rounded-sm",
                // light styles
                "hover:bg-gray-950/[.05]",
                // dark styles
                " dark:hover:bg-gray-50/[.10]",
                pathname?.startsWith(item.href!)
                  ? "text-foreground bg-gray-950/[.05] dark:bg-gray-50/[.10]"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              {item.title}
            </Link>
          </motion.div>
        ))}
      </nav>
    </div>
  );
}
