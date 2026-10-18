import { ArrowRight } from "lucide-react";
import { CourseCard } from "@/components/home/CourseCard";
import { academy } from "@/lib/data";

export function Courses() {
  const section = academy.coursesSection;

  return (
    <section id="courses" aria-labelledby="courses-title" className="section-space scroll-mt-[72px] bg-bg">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 id="courses-title" className="heading-tight mt-3 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] text-ink">
              {section.title}
            </h2>
          </div>
          <a href="#courses" className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg px-1 py-2 text-sm font-semibold text-primary-strong hover:text-primary sm:self-auto">
            {section.exploreLabel}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {academy.courses.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
