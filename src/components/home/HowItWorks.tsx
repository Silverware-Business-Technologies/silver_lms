import { Icon } from "@/components/Icon";
import { academy } from "@/lib/data";

export function HowItWorks() {
  const section = academy.howItWorksSection;

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className="section-space scroll-mt-[72px] bg-surface">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="how-it-works-title" className="heading-tight mt-3 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] text-ink">
            {section.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-body sm:text-lg">{section.description}</p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden border-t border-dashed border-[#b9c8e7] min-[1024px]:block" aria-hidden="true" />
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {academy.steps.map((step) => (
              <li key={step.label} className="rounded-2xl border border-border bg-bg p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`telemetry rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.08em] ${
                      step.complete ? "bg-success-tint text-success" : "bg-primary-tint text-primary-strong"
                    }`}
                  >
                    {step.label}
                  </span>
                  <Icon
                    name={step.icon}
                    className={step.complete ? "text-success" : "text-ink"}
                    size={28}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="heading-tight mt-8 text-xl font-semibold leading-[1.25] text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
