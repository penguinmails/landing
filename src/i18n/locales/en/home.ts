import type { HomeTranslations } from "../../types";

export const home: HomeTranslations = {
  "hero.titleStart": "Cold emails that land in the",
  "hero.titleInbox": "Inbox.",
  "hero.titleSpam": "Not Spam.",
  "hero.description":
    "PenguinMails helps founders, sales teams, and agencies send emails that actually land. Protect your domain, improve deliverability, and start real conversations.",
  "hero.cta.trial": "Start Free Trial",
  "hero.cta.demo": "Watch Demo",

  // ResultsSection
  "home.results.title": "What Better Deliverability Looks Like",
  "home.results.items": [
    { icon: "🔥", text: "Higher open rates" },
    { icon: "💬", text: "More replies" },
    { icon: "🛡️", text: "Safer domains" },
    { icon: "🚀", text: "Sustainable growth" },
  ],
  "home.results.quote":
    "When emails land in inboxes, outreach starts working again.",

  // SocialProofSection
  "home.social.title": "Trusted by modern outbound teams",
  "home.social.stats": [
    {
      value: "98%",
      label: "average inbox placement",
      sizeClass: "text-4xl sm:text-5xl",
    },
    {
      value: "2,000+",
      label: "campaigns sent monthly",
      sizeClass: "text-4xl sm:text-5xl",
    },
    {
      value: "Startup Ready",
      label: "Used by startups & agencies worldwide",
      sizeClass: "text-3xl sm:text-4xl",
    },
  ],
  "home.social.testimonial.quote":
    "We moved from inconsistent delivery to predictable inbox placement in two weeks.",
  "home.social.testimonial.author": "— Founder, B2B SaaS",
  "home.social.testimonial.avatarAlt": "User Profile",
  "home.social.messages": [
    {
      id: 1,
      initials: "SJ",
      name: "Sarah Johnson",
      company: "TechCorp",
      tag: "interested",
      body: "Thanks for reaching out! I'd love to schedule a call to di...",
      bodyClass: "truncate sm:whitespace-normal sm:line-clamp-2",
      badgeVariant: "success",
    },
    {
      id: 2,
      initials: "LR",
      name: "Lisa Rodriguez",
      company: "Enterprise Inc",
      tag: "interested",
      body: "This looks interesting. Can you send me more informat... pricing?",
      bodyClass: "line-clamp-2",
      badgeVariant: "success",
    },
  ],

  // ColdEmailFailsSection
  "home.fails.title": "Why Cold Email Software Fails You",
  "home.fails.description":
    "Most tools help you send more emails. They don't help you deliver better emails.",
  "home.fails.problems": [
    {
      id: "spam",
      title: "Your emails land in spam.",
      description:
        "No matter how good your copy is, if it's in the junk folder, it's invisible.",
    },
    {
      id: "hacks",
      title: "You rely on hacks instead of infrastructure.",
      description: "Temporary fixes don't build sustainable sales channels.",
    },
    {
      id: "reputation",
      title: "Your domain reputation declines.",
      description:
        "Aggressive sending on a cold domain is a one-way ticket to blacklists.",
    },
    {
      id: "replies",
      title: "You send campaigns — but get no replies.",
      description:
        'The "silence of the inbox" is usually a technical failure, not a product one.',
    },
  ],
  "home.fails.footer": "Cold email isn't broken. Inbox placement is.",

  // ColdEmailSection
  "home.platform.title": "The Cold Email Platform Built for Deliverability",
  "home.platform.description":
    "PenguinMails focuses on one thing first: inbox placement. Everything else supports that.",
  "home.platform.features": [
    {
      title: "Automated Warmup",
      description:
        "Protect your sender reputation with smart, human-like activity simulation.",
    },
    {
      title: "Inbox Rotation",
      description:
        "Distribute sending volume safely across multiple inboxes to stay under provider limits.",
    },
    {
      title: "Unified Inbox",
      description:
        "Manage all conversations in one place without switching tools or browser profiles.",
    },
  ],
  "home.platform.footer":
    "Built using industry-standard authentication (SPF, DKIM, DMARC) best practices.",
  "home.platform.repliesTitle": "Recent Replies",
  "home.platform.messages": [
    {
      id: 1,
      initials: "SJ",
      name: "Sarah Johnson",
      company: "TechCorp",
      tag: "interested",
      badgeVariant: "success",
      body: "Thanks for reaching out! I'd love to schedule a call to discuss this",
    },
    {
      id: 2,
      initials: "LR",
      name: "Lisa Rodriguez",
      company: "Enterprise Inc",
      tag: "interested",
      badgeVariant: "success",
      body: "This looks interesting. Can you send me more information about pricing?",
    },
    {
      id: 3,
      initials: "MC",
      name: "Mike Chen",
      company: "Startup.io",
      tag: "not interested",
      badgeVariant: "secondary",
      body: "Not interested at this time, but please keep us in mind for the future",
    },
  ],

  // DeliveringStepsSection
  "home.steps.title": "Start Delivering in 3 Simple Steps",
  "home.steps.items": [
    {
      title: "Connect Your Inbox Securely",
      description:
        "We guide you through authentication and warmup setup to ensure your foundation is rock solid.",
    },
    {
      title: "Import & Personalize Leads",
      description:
        "Upload your list and create tailored sequences that resonate with your prospects at scale.",
    },
    {
      title: "Send Safely & Track Performance",
      description:
        "Launch campaigns with deliverability protection and watch your real-time tracking dashboard.",
    },
  ],
  "home.steps.footer": "No technical expertise required. 🛠️",

  // FrequentlyAskedQuestionsSection
  "home.faq.title": "Frequently Asked Questions",
  "home.faq.items": [
    {
      question: "Will this get my emails out of spam?",
      answer:
        "Yes. By using our warmup protocol and rotation techniques, we help rebuild and maintain your sender reputation to ensure your emails land where they belong.",
    },
    {
      question: "Is this safe for my domain?",
      answer:
        "Our entire system is built around safety. We use conservative sending limits and rotate accounts to ensure no single domain is ever flagged.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. We provide step-by-step guides for DNS settings (SPF, DKIM, DMARC) and our dashboard handles the heavy lifting of automation.",
    },
    {
      question: "Does it replace my current outreach tool?",
      answer:
        "PenguinMails can replace your current tool entirely, or be used specifically for your most important outbound campaigns where deliverability is critical.",
    },
  ],

  // ReachTheInboxSection
  "home.reach.title": "Everything You Need to Reach the Inbox",
  "home.reach.description":
    "We've built the complete toolkit for modern, safe, and effective outbound.",
  "home.reach.features": [
    {
      title: "Unified Inbox",
      description:
        "Manage all replies in one clean workspace across all your senders.",
    },
    {
      title: "Free Mailbox Creation",
      description: "Scale safely without additional infrastructure costs.",
    },
    {
      title: "Warmup Automation",
      description:
        "Build trust with inbox providers before scaling your campaigns.",
    },
    {
      title: "Leads Export",
      description:
        "Download and manage your leads effortlessly, ready for outreach or analysis.",
    },
    {
      title: "Real-Time Analytics",
      description:
        "See exactly how campaigns perform with detailed deliverability metrics.",
    },
    {
      title: "Automated Sequences",
      description:
        "Follow up consistently without manual work using smart rules.",
    },
  ],

  // ComparisonTableSection
  "home.comparison.title": "Built for Deliverability. Not Volume.",
  "home.comparison.subtitle":
    "Most tools optimize sending. We optimize delivery.",
  "home.comparison.features": "Features",
  "home.comparison.rows": [
    { feature: "Starting Price", penguinValue: "$35/month" },
    { feature: "Sending Emails Monthly (Plan 1)", penguinValue: "Unlimited" },
    { feature: "Active Contacts (Prospects In Plan 1)", penguinValue: "3000" },
    { feature: "Number of Email Warmups", penguinValue: "Unlimited" },
    { feature: "Private Cold-Email Infrastructure", penguinValue: "yes" },
    { feature: "Real-time Analytics", penguinValue: "yes" },
    { feature: "Support", penguinValue: "Priority Support" },
    { feature: "Private Slack Community", penguinValue: "yes" },
  ],
};
