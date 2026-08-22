/**
 * Every live page, in reading order. One list, because three scripts need it:
 * build-llms-full writes a text twin per page, check-copy asserts one exists,
 * and indexnow submits them. Three copies drifted the moment a page was added.
 *
 * Adding a page means adding it here and nowhere else. The label is the
 * heading it gets in llms-full.txt and at the top of its own .md file.
 */
export const PAGES = [
  ["/", "Home"],
  ["/what-we-build", "What we build"],
  ["/use-cases", "Use cases"],
  ["/use-cases/reports", "Use case: recurring reports"],
  ["/use-cases/data-prep", "Use case: preparing data"],
  ["/use-cases/meters", "Use case: capturing values"],
  ["/use-cases/lookup", "Use case: finding the right record"],
  ["/use-cases/exceptions", "Use case: exceptions, not every row"],
  ["/use-cases/move", "Use case: moving information"],
  ["/use-cases/follow-through", "Use case: follow-through"],
  ["/how-we-work", "How we work"],
  ["/who-we-work-with", "Who we work with"],
  ["/industries/home-services", "Industry: home and field services"],
  ["/industries/professional-services", "Industry: professional services"],
  ["/industries/retail-ecommerce", "Industry: retail and ecommerce"],
  ["/about", "About"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
  ["/terms", "Terms of Service"],
];

/** Just the paths, for the scripts that do not care about labels. */
export const PATHS = PAGES.map(([path]) => path);
