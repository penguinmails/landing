import type { TranslationKey } from "../i18n/types";

export interface Usecase {
  slug: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

export const usecases: Usecase[] = [
  {
    slug: "agencies",
    titleKey: "usecases.agencies.title",
    descriptionKey: "usecases.agencies.description",
  },
  {
    slug: "freelancers",
    titleKey: "usecases.freelancers.title",
    descriptionKey: "usecases.freelancers.description",
  },
  {
    slug: "outbound-teams",
    titleKey: "usecases.outbound-teams.title",
    descriptionKey: "usecases.outbound-teams.description",
  },
  {
    slug: "startups",
    titleKey: "usecases.startups.title",
    descriptionKey: "usecases.startups.description",
  },
];

export const getUsecaseBySlug = (slug: string): Usecase | undefined => {
  return usecases.find((u) => u.slug === slug);
};
