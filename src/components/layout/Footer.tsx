import { SquareTerminal } from "lucide-react";
import { academy } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-shell py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.45fr_repeat(3,1fr)] lg:gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2.5 rounded-lg text-primary-strong">
              <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-primary text-white">
                <SquareTerminal size={20} strokeWidth={2.25} aria-hidden="true" />
              </span>
              <span className="heading-tight text-[25px] font-bold tracking-[-0.025em]">{academy.name}</span>
            </a>
            <p className="mt-5 max-w-[360px] text-sm leading-6 text-body">{academy.description}</p>
            <p className="mt-6 max-w-[360px] text-sm leading-6 text-body">
              <strong className="font-semibold text-ink">{academy.footer.headquartersLabel}</strong>{" "}
              {academy.footer.headquarters}
            </p>
            <a
              href={`mailto:${academy.footer.email}`}
              className="telemetry mt-5 inline-block rounded-md text-xs font-medium text-primary-strong underline-offset-4 hover:underline"
            >
              {academy.footer.email}
            </a>
          </div>

          {academy.footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-bold tracking-[0.1em] text-ink">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm leading-6 text-body underline-offset-4 hover:text-ink hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="telemetry max-w-[690px] leading-6">
            © {year} {academy.name}. All Rights Reserved. Engineered for enterprise infrastructure standards.
          </p>
          <div className="telemetry flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px]">
            <span className="inline-flex items-center gap-2 text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              {academy.footer.systemHealth}
            </span>
            <span>{academy.footer.build}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
