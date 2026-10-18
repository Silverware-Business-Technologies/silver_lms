import { GraduationCap, Users } from "lucide-react";
import { academy } from "@/lib/data";

export function Instructors() {
  const section = academy.instructorsSection;

  return (
    <section id="instructors" aria-labelledby="instructors-title" className="section-space scroll-mt-[72px] bg-bg">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 id="instructors-title" className="heading-tight mt-3 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] text-ink">
              {section.title}
            </h2>
          </div>
          <p className="max-w-[480px] text-base leading-7 text-body lg:text-right">{section.description}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {academy.instructors.map((instructor) => (
            <article key={instructor.name} className="card-lift rounded-2xl border border-border bg-surface p-7 sm:p-9 lg:p-12">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="grid h-28 w-28 shrink-0 place-items-center rounded-[14px] border border-[#c9d7f2] bg-primary-tint text-3xl font-bold text-primary-strong">
                  <span aria-label={`${instructor.name} initials avatar`}>{instructor.initials}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3 className="heading-tight text-[23px] font-semibold leading-[1.2] text-ink sm:text-[27px]">{instructor.name}</h3>
                    <span className="telemetry w-fit shrink-0 rounded-full bg-primary-tint px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-primary-strong">
                      {instructor.experience}
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-medium text-primary-strong">{instructor.role}</p>
                  <p className="mt-4 text-sm leading-6 text-body">{instructor.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-body">
                    <span className="inline-flex items-center gap-2">
                      <GraduationCap className="h-[18px] w-[18px] text-primary-strong" aria-hidden="true" />
                      {instructor.modules}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Users className="h-[18px] w-[18px] text-primary-strong" aria-hidden="true" />
                      {instructor.students}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
