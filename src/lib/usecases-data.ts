export interface Usecase {
  slug: string;
  title: string;
  description: string;
}

export const usecases: Usecase[] = [
  {
    slug: "agencies",
    title: "Agencies",
    description:
      "Scale your client outreach without the overhead of managing multiple email tools.",
  },
  {
    slug: "freelancers",
    title: "Freelancers",
    description:
      "Build client pipelines and grow your freelance business with automated outreach.",
  },
  {
    slug: "outbound-teams",
    title: "Outbound Teams",
    description:
      "Coordinate your sales team's outreach with shared mailboxes and team analytics.",
  },
  {
    slug: "startups",
    title: "Startups",
    description:
      "Launch your go-to-market strategy with affordable, scalable email automation.",
  },
];

export const getUsecaseBySlug = (slug: string): Usecase | undefined => {
  return usecases.find((u) => u.slug === slug);
};
