import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
const tech = [
  {
    name: "Next.js",
    svg: require("@/public/next.svg").default,
  },
  {
    name: "Vercel",
    svg: require("@/public/vercel.svg").default,
  },
  {
    name: "Tailwind CSS",
    svg: require("@/public/tailwindcss.svg").default,
  },
  {
    name: "TypeScript",
    svg: require("@/public/typescript.svg").default,
  },
  {
    name: "React",
    svg: require("@/public/react.svg").default,
  },
  {
    name: "GitHub",
    svg: require("@/public/github.svg").default,
  },
  {
    name: "GraphQL",
    svg: require("@/public/graphql.svg").default,
  },
  {
    name: "Pandas",
    svg: require("@/public/pandas.svg").default,
  },
  {
    name: "PostgreSQL",
    svg: require("@/public/postgresql.svg").default,
  },
  {
    name: "Python",
    svg: require("@/public/python.svg").default,
  },
  {
    name: "PyTorch",
    svg: require("@/public/pytorch.svg").default,
  },
  {
    name: "Redis",
    svg: require("@/public/redis.svg").default,
  },
  {
    name: "Azure",
    svg: require("@/public/azure.svg").default,
  },
  {
    name: "Postman",
    svg: require("@/public/postman.svg").default,
  },
  {
    name: "Raspberry Pi",
    svg: require("@/public/raspberrypi.svg").default,
  },
  {
    name: "Docker",
    svg: require("@/public/docker.svg").default,
  },
  {
    name: "Figma",
    svg: require("@/public/figma.svg").default,
  },
  {
    name: "Gradle",
    svg: require("@/public/gradle.svg").default,
  },
  {
    name: "ESLint",
    svg: require("@/public/eslint.svg").default,
  },
  {
    name: "JUnit",
    svg: require("@/public/junit.svg").default,
  },
  {
    name: "JavaScript",
    svg: require("@/public/javascript.svg").default,
  },
  {
    name: "Linux",
    svg: require("@/public/linux.svg").default,
  },
  {
    name: "XCode",
    svg: require("@/public/xcode.svg").default,
  },
];

const firstThird = tech.slice(0, tech.length / 3);
const secondThird = tech.slice(tech.length / 3, (2 * tech.length) / 3);
const thirdThird = tech.slice((2 * tech.length) / 3);

const TechCard = ({ svg, name }: { svg: any; name: string }) => {
  return (
    <Image
      src={svg}
      alt={name}
      width={24}
      height={24}
      className={cn(
        "relative w-24 h-24 cursor-pointer overflow-hidden rounded-lg border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    />
  );
};

export const MarqueeTechStack = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 ">
      <Marquee pauseOnHover className="[--duration:15s]">
        {firstThird.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:15s]">
        {secondThird.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:15s]">
        {thirdThird.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
