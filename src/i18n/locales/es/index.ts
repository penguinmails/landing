import { common } from "./common";
import { home } from "./home";
import { pricing } from "./pricing";
import { features } from "./features";
import { usecases } from "./usecases";
import { legal } from "./legal";
import { company } from "./company";

export const es = {
  ...common,
  ...home,
  ...pricing,
  ...features,
  ...usecases,
  ...legal,
  ...company,
} as const;
