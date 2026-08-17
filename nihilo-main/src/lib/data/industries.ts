export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  stats: { label: string; value: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'professional-services',
    name: 'Professional Services',
    tagline: 'Win more clients. Spend less time on admin.',
    description:
      'Law firms, accountants, consultants, and agencies compete on reputation and relationships. We help professional services firms get found online, convert visitors into consultations, and automate the scheduling, follow-up, and reporting work that eats your team\'s billable hours.',
    painPoints: [
      'Prospects can\'t find you when they search for your specialty',
      'Your website doesn\'t communicate your expertise or get consultation requests',
      'Staff spend hours on scheduling, follow-up emails, and status reports',
      'You\'re leaving referral business on the table because follow-up is inconsistent',
    ],
    solutions: [
      'SEO growth system targeting your practice area and geography',
      'Website modernization that builds credibility and drives consultations',
      'AI automation for client intake, scheduling, and follow-up sequences',
      'Automated reporting and billing reminders',
    ],
    stats: [
      { label: 'Avg. lead volume increase', value: '3-5x' },
      { label: 'Admin hours saved per week', value: '10-20' },
      { label: 'Time to results', value: '60-90 days' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Fill your schedule. Reduce the paperwork.',
    description:
      'Medical practices, dental offices, and health clinics need patients to find them first. We help healthcare providers rank for local searches, convert website visitors to appointments, and automate the appointment reminders, follow-up communications, and intake workflows that consume staff time.',
    painPoints: [
      'Patients searching for your specialty are finding competitors first',
      'Your website doesn\'t rank for local searches or drive appointment requests',
      'Staff spend significant time on reminder calls and intake paperwork',
      'New patient follow-up is inconsistent because there\'s no system',
    ],
    solutions: [
      'Local SEO targeting your specialty and geographic area',
      'Website modernization with online appointment request capability',
      'Automated appointment reminders and patient follow-up',
      'AI-assisted intake workflow to reduce front-desk burden',
    ],
    stats: [
      { label: 'No-show rate reduction', value: '40-60%' },
      { label: 'New patient requests per month', value: '+25-40%' },
      { label: 'Staff hours saved on admin', value: '8-15/wk' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    tagline: 'More leads. Faster follow-up. Better listings.',
    description:
      'Real estate agents and property managers live or die by their lead pipeline. We help real estate professionals dominate local search for property types and neighborhoods, convert website visitors to showings, and automate the lead response, showing scheduling, and follow-up sequences that close more deals.',
    painPoints: [
      'Competing agents rank above you for local property searches',
      'Website visitors don\'t convert to showing requests or calls',
      'Lead follow-up is slow or inconsistent, costing deals',
      'Property inquiries come from multiple channels and get lost in the shuffle',
    ],
    solutions: [
      'Local SEO for your market area and property specialty',
      'Website modernization with listing integration and lead capture',
      'AI automation for instant lead response and showing scheduling',
      'Automated follow-up sequences for buyer and seller leads',
    ],
    stats: [
      { label: 'Lead response time', value: '< 5 min' },
      { label: 'Showing requests per month', value: '+2-4x' },
      { label: 'Deals closed from automation', value: '+15-30%' },
    ],
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    tagline: 'More calls. More booked jobs. Less chasing.',
    description:
      'HVAC companies, plumbers, electricians, landscapers, and contractors need to be the first result when a homeowner has a problem. We help home service businesses rank in local search, convert "near me" searches into call or booking requests, and automate the quoting, scheduling, and follow-up work that costs you jobs.',
    painPoints: [
      'You\'re not showing up in Google when homeowners search for your service',
      'Competitors with worse reviews are getting calls you should be getting',
      'Estimates and follow-ups are done manually and some fall through the cracks',
      'Seasonality makes it hard to maintain consistent lead flow',
    ],
    solutions: [
      'Local SEO and Google Business Profile optimization',
      'Website modernization optimized for mobile and "call now" conversions',
      'Automated quote follow-up and review request sequences',
      'AI scheduling and dispatch workflow automation',
    ],
    stats: [
      { label: 'Google ranking improvement', value: 'Top 3 local' },
      { label: 'Booked jobs from organic search', value: '+40-80%' },
      { label: 'Follow-up response rate', value: '3x manual' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    tagline: 'More traffic. Higher conversion. Repeat buyers.',
    description:
      'Retail shops and e-commerce businesses compete on visibility and experience. We help retailers rank for the products and categories buyers search for, build websites that convert browsers into buyers, and automate the abandoned cart recovery, post-purchase follow-up, and inventory management workflows that drive repeat revenue.',
    painPoints: [
      'Product pages don\'t rank in search results for buyer-intent terms',
      'High cart abandonment rate with no automated recovery',
      'Post-purchase follow-up is manual or nonexistent',
      'Inventory and reporting tasks take up too much team time',
    ],
    solutions: [
      'E-commerce SEO targeting product and category buyer keywords',
      'Website modernization optimized for conversion rate and mobile',
      'Automated abandoned cart recovery and post-purchase sequences',
      'AI-powered inventory alerts and sales reporting',
    ],
    stats: [
      { label: 'Cart recovery rate', value: '15-25%' },
      { label: 'Organic traffic increase', value: '2-4x in 6 mo.' },
      { label: 'Revenue from automation', value: '+10-20%' },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    tagline: 'Build trust. Grow AUM. Cut compliance busywork.',
    description:
      'Financial advisors, insurance agencies, mortgage brokers, and small banks need to be found by clients who are ready to act. We help financial services firms rank for local advisor and product searches, convert website visitors to consultations, and automate the compliant follow-up, onboarding, and reporting workflows that take up advisor time.',
    painPoints: [
      'Competing advisors and agencies rank above you for local financial searches',
      'Your website doesn\'t build the trust needed to earn a financial consultation',
      'Client follow-up and onboarding is slow and inconsistent',
      'Advisors spend too much time on compliance reporting and communications',
    ],
    solutions: [
      'Local SEO targeting your specialty and geography',
      'Website modernization with trust signals and consultation booking',
      'Automated client onboarding and follow-up sequences',
      'AI-assisted compliance reporting and client communication workflows',
    ],
    stats: [
      { label: 'New client consultations per month', value: '+2-5x' },
      { label: 'Onboarding time reduction', value: '50-70%' },
      { label: 'Advisor hours on admin', value: '-8-12/wk' },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
