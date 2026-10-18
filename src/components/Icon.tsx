import {
  BadgeCheck,
  Cable,
  Code2,
  DoorOpen,
  Fingerprint,
  Network,
  SquareTerminal,
  SunMedium,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/data";

const iconMap: Record<IconName, LucideIcon> = {
  Fingerprint,
  Video,
  DoorOpen,
  Network,
  SunMedium,
  Code2,
  Workflow,
  Cable,
  SquareTerminal,
  BadgeCheck,
};

export function Icon({ name, ...props }: { name: IconName } & React.ComponentProps<LucideIcon>) {
  const Component = iconMap[name];
  return <Component {...props} />;
}
