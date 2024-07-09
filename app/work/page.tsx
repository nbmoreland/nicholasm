import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export type Job = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  href: string;
};

const jobs = [
  {
    company: "Nagarro",
    role: "Software Engineer",
    startDate: "June 2024",
    endDate: "Present",
    description:
      "Worked on a project that involved developing a web application for a client using React, Redux, and TypeScript.",
    logo: "/nagarro.svg",
    href: "https://www.nagarro.com/",
  },
  {
    company: "Nagarro",
    role: "Software Engineer",
    startDate: "June 2023",
    endDate: "August 2023",
    description:
      "Worked on a project that involved developing a web application for a client using React, Redux, and TypeScript.",
    logo: "/nagarro.svg",
    href: "https://www.nagarro.com/",
  },
  {
    company: "National Science Foundation",
    role: "Software Engineer",
    startDate: "June 2022",
    endDate: "August 2022",
    description:
      "Developed a web application for the National Science Foundation using React, Redux, and TypeScript.",
    logo: "/nsf.svg",
    href: "https://www.nsf.gov/",
  },
];

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="flex flex-row cursor-pointer group">
      <Image
        src={job.logo}
        alt={job.company}
        width={46}
        height={46}
        className="rounded-full"
      />
      <div className="flex flex-col ml-4">
        <div className="flex flex-row items-center">
          <h2 className="font-semibold text-lg text-foreground mr-1">
            {job.company}
          </h2>
          <ChevronRightIcon className="hidden group-hover:block h-4 w-4 transition-transform duration-300 ease-in-out" />
        </div>

        <p className="text-sm text-foreground">{job.role}</p>
      </div>

      <div className="flex-grow" />
      <div>
        <p className="text-foreground items-center space-x-1 text-sm font-normal">
          <span>
            {job.startDate} - {job.endDate}
          </span>
        </p>
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <main className="container">
      <div className="mx-auto max-w-2xl text-center pt-8">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Beta Launch
          </span>
        </AnimatedGradientText>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Professional Journey
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground">
          Discover the companies I&apos;ve worked with and the contributions
          I&apos;ve made to their success.
        </p>
      </div>

      <div className="space-y-8 mt-16 px-32 max-w-[83rem] mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.company} job={job} />
        ))}
      </div>
    </main>
  );
}
