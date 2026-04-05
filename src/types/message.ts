import type { BadgeVariant } from "@/components/ui/types";
import type { ClassNameValue } from "tailwind-merge";
export interface Message {
  id: string | number;
  initials: string;
  name: string;
  company: string;
  tag: string;
  body: string;
  badgeVariant?: BadgeVariant;
  bodyClass?: ClassNameValue;
}
