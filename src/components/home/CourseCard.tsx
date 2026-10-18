import Image from "next/image";
import { ShieldCheck, Star } from "lucide-react";
import { academy, formatNaira, type Course } from "@/lib/data";

export function CourseCard({ course }: { course: Course }) {
  const section = academy.coursesSection;

  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[16/10] overflow-hidden bg-primary-tint">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
        <span className="telemetry absolute left-4 top-4 rounded-md border border-border bg-white px-2.5 py-1.5 text-[10px] font-semibold text-ink">
          {course.code}
        </span>
        <span className="absolute bottom-4 right-4 rounded-lg bg-terminal/90 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
          {course.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-sm">
            <Star className="h-4 w-4 fill-warning text-warning" aria-hidden="true" />
            <span className="font-semibold text-ink">{course.rating}</span>
            <span className="telemetry text-[11px] text-muted">({course.reviews} {section.reviewsLabel})</span>
          </div>
          <span className="telemetry rounded-full bg-primary-tint px-2.5 py-1.5 text-[10px] font-medium text-primary-strong">
            {course.modules} {section.modulesLabel} ({course.lessons} {section.lessonsLabel})
          </span>
        </div>

        <h3 className="heading-tight mt-5 line-clamp-2 text-[22px] font-semibold leading-[1.2] text-ink sm:text-[25px]">
          {course.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-body">{course.description}</p>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-success">
          <ShieldCheck className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
          <span>{section.certificateLabel}</span>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
          <div>
            <p className="telemetry text-[10px] font-semibold tracking-[0.1em] text-muted">{section.tuitionLabel}</p>
            <p className="mt-1 font-sans text-[26px] font-bold tracking-[-0.03em] text-ink sm:text-[30px]">
              {formatNaira(course.price)}
            </p>
          </div>
          <a
            href="#enroll"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-[10px] bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-strong active:translate-y-px"
          >
            {section.enrollLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
