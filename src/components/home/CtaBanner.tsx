import { ArrowRight, Download } from "lucide-react";
import { academy } from "@/lib/data";

export function CtaBanner() {
  return (
    <section id="enroll" aria-labelledby="enroll-title" className="scroll-mt-[72px] bg-terminal py-20 sm:py-24 lg:py-24">
      <div className="container-shell text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#52647d] bg-[#293c55] px-3.5 py-2 text-success-tint">
          <span className="telemetry-pulse h-2 w-2 rounded-full bg-success-tint" aria-hidden="true" />
          <span className="telemetry text-[10px] font-semibold tracking-[0.1em] sm:text-xs">{academy.cta.eyebrow}</span>
        </div>
        <h2 id="enroll-title" className="heading-tight mx-auto mt-7 max-w-3xl text-[clamp(2.15rem,4vw,2.75rem)] font-bold leading-[1.1] text-white">
          {academy.cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[700px] text-base leading-7 text-slate-300 sm:text-lg">{academy.cta.description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#courses"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-primary-strong px-6 text-sm font-semibold text-white hover:bg-primary sm:w-auto"
          >
            {academy.cta.primaryAction}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a
            href="/syllabus.pdf"
            download
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-slate-500 px-6 text-sm font-semibold text-white hover:border-slate-300 hover:bg-white/5 sm:w-auto"
          >
            <Download size={17} aria-hidden="true" />
            {academy.cta.secondaryAction}
          </a>
        </div>
      </div>
    </section>
  );
}
