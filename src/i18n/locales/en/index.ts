import { common } from "./common";
import { home } from "./home";
import { pricing } from "./pricing";
import { features } from "./features";
import { usecases } from "./usecases";
import { legal } from "./legal";

export const en = {
  ...common,
  ...home,
  ...pricing,
  ...features,
  ...usecases,
  ...legal,
} as const;
