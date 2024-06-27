import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

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

      <div className="space-y-8 pb-8 max-w-[83rem] mx-auto"></div>
    </main>
  );
}
