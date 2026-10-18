"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Radio } from "lucide-react";
import { academy } from "@/lib/data";

type TelemetryState = {
  voltage: string;
  latency: string;
};

const initialTelemetry: TelemetryState = {
  voltage: "13.82",
  latency: "2.4",
};

export function SimulatorCard() {
  const [telemetry, setTelemetry] = useState<TelemetryState>(initialTelemetry);
  const storagePercent = (academy.telemetry.storageUsed / academy.telemetry.storageTotal) * 100;

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      const voltage = (13.78 + Math.random() * 0.08).toFixed(2);
      const latency = (2.1 + Math.random() * 0.8).toFixed(1);
      setTelemetry({ voltage, latency });
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[20px] border border-border bg-surface p-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="flex min-w-0 items-center gap-2.5 pb-4">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-3.5 w-3.5 rounded-full bg-danger" />
          <span className="h-3.5 w-3.5 rounded-full bg-warning" />
          <span className="h-3.5 w-3.5 rounded-full bg-ok" />
        </div>
        <span className="telemetry min-w-0 flex-1 truncate text-[10px] font-medium text-muted sm:text-[11px]">
          {academy.telemetry.hostname}
        </span>
        <span className="telemetry shrink-0 rounded-full bg-primary-tint px-2 py-1 text-[9px] font-semibold tracking-[0.08em] text-primary-strong sm:px-2.5 sm:text-[10px]">
          {academy.telemetry.badge}
        </span>
      </div>

      <div className="border-t border-border pt-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] border border-border bg-terminal">
          <Image
            src={academy.telemetry.image}
            alt={academy.telemetry.imageAlt}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-[10px] bg-terminal/90 px-3 py-2.5 text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:px-4">
            <Radio className="h-4 w-4 shrink-0 text-success-tint" aria-hidden="true" />
            <span className="min-w-0 flex-1 truncate text-xs font-medium sm:text-[15px]">
              {academy.telemetry.handshake}
            </span>
            <span className="telemetry shrink-0 text-xs font-semibold text-success-tint sm:text-sm">
              {telemetry.latency}{academy.telemetry.latencyUnit}
            </span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
          <MetricTile
            label={academy.telemetry.voltageLabel}
            value={`${telemetry.voltage} VDC`}
            tag={academy.telemetry.voltageStatus}
            tagTone="green"
            progress={academy.telemetry.voltageProgress}
            progressLabel="Access bus voltage stability"
          />
          <MetricTile
            label={academy.telemetry.storageLabel}
            value={`${academy.telemetry.storageUsed} / ${academy.telemetry.storageTotal} ${academy.telemetry.storageUnit}`}
            tag={academy.telemetry.storageTag}
            tagTone="blue"
            progress={storagePercent}
            progressLabel="NVR storage pool usage"
          />
        </div>

        <div className="mt-3 flex min-w-0 items-center gap-3 rounded-[10px] bg-terminal px-3.5 py-3 text-white sm:px-[18px]">
          <span className="telemetry min-w-0 flex-1 truncate text-[11px] text-slate-300 sm:text-sm">
            {academy.telemetry.command}
          </span>
          <span className="telemetry flex shrink-0 items-center gap-1.5 text-[10px] font-semibold text-success-tint sm:text-xs">
            <span className="telemetry-pulse h-1.5 w-1.5 rounded-full bg-success-tint" aria-hidden="true" />
            {academy.telemetry.connectionStatus}
          </span>
        </div>
      </div>
    </div>
  );
}

function MetricTile({
  label,
  value,
  tag,
  tagTone,
  progress,
  progressLabel,
}: {
  label: string;
  value: string;
  tag: string;
  tagTone: "green" | "blue";
  progress: number;
  progressLabel: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-3.5 sm:p-4">
      <p className="telemetry text-[9px] font-medium tracking-[0.08em] text-muted sm:text-[10px]">{label}</p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="telemetry text-[21px] font-bold tracking-[-0.04em] text-ink sm:text-2xl">{value}</span>
        <span
          className={`telemetry rounded-full px-1.5 py-1 text-[9px] font-semibold ${
            tagTone === "green" ? "bg-success-tint text-success" : "bg-primary-tint text-primary-strong"
          }`}
        >
          {tag}
        </span>
      </div>
      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-primary-tint"
        role="progressbar"
        aria-label={progressLabel}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full rounded-full bg-primary transition-[width] duration-500" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
