import { ArrowRight, BadgeCheck, ChevronDown } from "lucide-react";
import { academy } from "@/lib/data";
import { SimulatorCard } from "@/components/home/SimulatorCard";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="section-space overflow-hidden bg-bg">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
        <div className="min-w-0">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#c8d8fb] bg-primary-tint px-3 py-2 text-primary-strong">
            <BadgeCheck className="h-4 w-4 shrink-0 fill-primary text-white" aria-hidden="true" />
            <span className="telemetry truncate text-[10px] font-semibold tracking-[0.1em] sm:text-xs">
              {academy.hero.eyebrow}
            </span>
          </div>
          <h1
            id="hero-title"
            className="heading-tight mt-6 max-w-[680px] break-words text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.08] text-ink"
          >
            {academy.hero.title}
          </h1>
          <p className="mt-6 max-w-[560px] text-lg leading-[1.65] text-body sm:text-xl">
            {academy.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-6 text-sm font-semibold text-white shadow-sm hover:bg-primary-strong active:translate-y-px sm:w-auto"
            >
              {academy.hero.primaryAction}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-border bg-surface px-6 text-sm font-semibold text-ink hover:border-primary hover:text-primary-strong active:translate-y-px sm:w-auto"
            >
              {academy.hero.secondaryAction}
              <ChevronDown size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 border-t border-border pt-7">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {academy.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="heading-tight text-[clamp(1.35rem,3vw,2.25rem)] font-bold leading-none tracking-[-0.04em] text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[130px] text-xs leading-5 text-body sm:text-sm sm:leading-6">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:pt-4">
          <SimulatorCard />
        </div>
      </div>
    </section>
  );
}
