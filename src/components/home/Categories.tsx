import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { academy } from "@/lib/data";

export function Categories() {
  const section = academy.categoriesSection;

  return (
    <section id="categories" aria-labelledby="categories-title" className="section-space bg-surface">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 id="categories-title" className="heading-tight mt-3 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.1] text-ink">
              {section.title}
            </h2>
          </div>
          <p className="max-w-[480px] text-base leading-7 text-body lg:text-right">{section.description}</p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 min-[1280px]:grid-cols-6">
          {academy.categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="card-lift group flex min-h-[292px] flex-col rounded-2xl border border-border bg-bg p-6 sm:p-7"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary-tint text-primary-strong">
                <Icon name={category.icon} size={28} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="heading-tight mt-6 text-[20px] font-semibold leading-[1.2] text-ink">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-body">{category.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                <span className="telemetry text-[10px] font-semibold tracking-[0.1em] text-muted">
                  {category.tracks} {section.tracksLabel}
                </span>
                <ArrowRight
                  className="text-primary-strong transition-transform duration-150 group-hover:translate-x-1"
                  size={18}
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
