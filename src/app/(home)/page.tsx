import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 min-h-screen overflow-hidden -mt-14">
      <section className="relative w-full min-h-screen py-12 md:py-24 lg:py-32 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(250,250,250,0.5)_100%)] dark:bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(24,24,27,0.5)_100%)]">
        <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05] -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0.9)_100%)] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_50%,rgba(0,0,0,0.9)_100%)] -z-10" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-20 text-center">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-[128px] rounded-full -z-10 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,rgba(0,0,0,0.1),transparent)] -z-10" />
            <div className="space-y-8">
              <div className="relative space-y-4 backdrop-blur-sm">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 drop-shadow-sm lg:leading-snug">
                  Cloud-native workflows <br /> for your not-so-native systems.
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-600 dark:text-zinc-300 md:text-xl leading-loose">
                  Turn your mainframe into just another backend. Grace makes it
                  easy to integrate z/OS with modern data pipelines and cloud
                  workflows.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <Link href="/docs">
                  <Button variant="outline" className="h-11 px-8 gap-1.5 group">
                    Get started
                  </Button>
                </Link>
                <Link href="/docs/installation">
                  <Button className="h-11 px-8">Installation</Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-2xl rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl shadow-zinc-200/20 dark:shadow-zinc-800/20 p-6 mx-auto ring-1 ring-zinc-900/5 dark:ring-white/10">
              <pre className="overflow-x-auto text-sm font-mono text-left">
                <code className="text-zinc-700 dark:text-zinc-300">
                  <span className="text-zinc-500 dark:text-zinc-400">$</span>{" "}
                  grace init --profile zosmf{"\n"}
                  <span className="text-green-500">✓</span> Workspace
                  initialized{"\n"}
                  {"\n"}
                  <span className="text-zinc-500 dark:text-zinc-400">
                    $
                  </span>{" "}
                  grace deck{"\n"}
                  <span className="text-green-500">✓</span> Generated JCL:
                  deck/transform.jcl{"\n"}
                  <span className="text-green-500">✓</span> Synced datasets:
                  HLQ.DECK.TRANSFORM, HLQ.INPUT.DATA{"\n"}
                  {"\n"}
                  <span className="text-zinc-500 dark:text-zinc-400">
                    $
                  </span>{" "}
                  grace run{"\n"}
                  <span className="text-green-500">✓</span> Fetched CSV →
                  HLQ.INPUT.DATA{"\n"}
                  <span className="text-green-500">✓</span> COBOL job success:
                  transform.jcl{"\n"}
                  <span className="text-green-500">✓</span> Exported output.csv
                  → s3://vsam-migration-staging/{"\n"}
                  {"\n"}
                  <span className="text-zinc-500 dark:text-zinc-400">
                    $
                  </span>{" "}
                  grace logs JOB12345{"\n"}
                  <span className="text-green-500">✓</span> RC=0000 | z/OS →
                  cloud ☑️
                  {"\n"}
                  {"\n"}
                  <span className="text-zinc-500 dark:text-zinc-400">
                    $
                  </span>{" "}
                  <span className="inline-block w-2 h-4 -mb-0.5 bg-zinc-600 dark:bg-zinc-400 animate-[blink_1s_step-end_infinite]"></span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
