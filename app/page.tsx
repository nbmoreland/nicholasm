import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto py-12 sm:py-24 px-6">
      <section className="mx-auto w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <div className="flex">
              <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm Nicholas 👋
              </span>
            </div>
            <div className="flex">
              <span className="inline-block max-w-[600px] md:text-xl">
                I'm a software engineer who loves building products that
                simplify people's lives.
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/me.jpeg"
              alt="Me"
              width={175}
              height={175}
              className="rounded-full shink-0 relative flex border"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
