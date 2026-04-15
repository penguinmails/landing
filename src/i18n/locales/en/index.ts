import { common } from "./common";
import { home } from "./home";
import { pricing } from "./pricing";
import { features } from "./features";
import { usecases } from "./usecases";

export const en = {
  ...common,
  ...home,
  ...pricing,
  ...features,
  ...usecases,
} as const;
