/**
 * The six kinds of work we get asked about most.
 *
 * One source for both /use-cases and the six detail pages, so the index card
 * and the page it links to can never describe the same thing differently.
 *
 * `problem` and `build` are the short forms the index shows. Everything under
 * `detail` is the long form, and only the detail page renders it.
 */
export interface UseCase {
  id: string;
  kicker: string;
  title: string;
  /** Search-facing title. Names the symptom, not the category. */
  metaTitle: string;
  metaDescription: string;
  problem: string;
  build: string;
  detail: {
    /** What the visitor recognises. Their words, not ours. */
    today: string[];
    /** Why it costs more than the hours it takes. */
    cost: string[];
    /** What we build, concretely enough to picture. */
    built: string[];
    /** What changes once it runs. */
    after: string[];
    /** What we need from them for it to be possible. */
    needed: string[];
    /** When this is the wrong thing to buy. Qualifying out is the point. */
    notFor: string;
  };
}

export const USE_CASES: UseCase[] = [
  {
    id: "reports",
    kicker: "Recurring reports",
    title: "The weekly pack someone still builds by hand",
    metaTitle: "Automate a Weekly Report Built by Hand | Nihilo Solutions",
    metaDescription:
      "The weekly service report, job list, or status pack someone still assembles from an export and a spreadsheet. We build the scheduled version and keep it running.",
    problem:
      "Every week someone exports from one system, pastes into a sheet, applies the same filters, writes a short summary, and emails it. It might be a service report, a job list, a billing recap, or a status pack for leadership. Late files, missing rows, and a process that lives in one person's head.",
    build:
      "A scheduled pull, the same rules every time, and a report that lands in the inbox or folder in the format your team already uses.",
    detail: {
      today: [
        "Someone exports from the system of record, usually to CSV, usually on the same morning every week.",
        "The export goes into a spreadsheet that already has the filters, the sort order, and the formatting someone worked out a long time ago.",
        "They read it, notice the rows that look wrong, and fix or chase them.",
        "They write two or three sentences at the top saying what changed since last week.",
        "They send it, or drop it in a shared folder, and answer the replies.",
      ],
      cost: [
        "The hours are the smallest part. A weekly report that takes two hours costs about thirteen working days a year, which is real but survivable.",
        "The expensive part is that it only exists while that person is available. When they are on holiday it goes out late, in a different format, or not at all.",
        "The second expensive part is that nobody checks a report that arrives reliably. When the rules live in one person's head, a filter that quietly stops matching can go unnoticed for months.",
      ],
      built: [
        "A scheduled pull from the same source the export came from, on the same cadence.",
        "The filters, groupings and calculations written down as rules rather than steps someone repeats.",
        "The same layout your team already reads, because a report that looks unfamiliar gets ignored.",
        "Delivery to wherever it goes today: an inbox, a shared folder, a channel.",
        "A flag when the numbers look unlike last week, so an empty or doubled report announces itself instead of going out quietly.",
      ],
      after: [
        "The report arrives whether or not the person who used to build it is at work.",
        "It looks the same every time, so a change in the numbers reads as a change in the business rather than a change in whoever formatted it.",
        "When a rule needs to change, it changes in one place.",
      ],
      needed: [
        "One person who can walk us through last week's run, including the parts they do without thinking.",
        "Access to the source the export comes from.",
        "A copy of the last few reports, so we can match the output rather than invent one.",
      ],
      notFor:
        "If the report is different every week, or the person writing it is making judgement calls that are the actual product, automating it will produce something worse than what you have. What we can sometimes do instead is assemble the parts that never change and leave the judgement to them.",
    },
  },
  {
    id: "meters",
    kicker: "Collecting numbers",
    title: "Readings and counts that still get typed",
    metaTitle: "Automate Meter Readings and Manual Data Entry | Nihilo Solutions",
    metaDescription:
      "Readings, counts and usage numbers that a person still types from a device, portal or print-out into the system that bills or tracks them. We capture and write them back.",
    problem:
      "A person reads a meter, a portal, a print-out, a counter, or a screen, then types the number into the system that bills, restocks, or tracks usage. Manual entry creates estimates, corrections, and delays. This shows up anywhere a number has to move from the real world into a system.",
    build:
      "A capture path for the number, basic validation, and a write-back to the system that already owns billing, inventory, or tracking.",
    detail: {
      today: [
        "The number exists somewhere physical or awkward: a device display, a vendor portal, a print-out, a photo someone took on site.",
        "Someone reads it and types it into the system that bills, restocks or reports on it.",
        "When a reading is missed, the system takes an estimate, and the estimate gets corrected later.",
        "Corrections arrive after invoices, so somebody reconciles the difference by hand.",
      ],
      cost: [
        "Typing a number is fast. Finding out that a number was typed wrong, three weeks later, on an invoice a customer is disputing, is not.",
        "Estimates compound. A missed read this month makes next month's true-up larger and harder to explain.",
        "The people doing the reading are usually the people you least want doing data entry, because they are on site and paid to be doing something else.",
      ],
      built: [
        "A capture path that fits how the number is actually obtained today, whether that is a portal that can be queried, a device that can be read, or a photo someone already takes.",
        "Validation before anything is written: is this plausible against the last reading, is the meter identifier one we recognise, is the jump larger than it should be.",
        "A write-back into the system that already owns billing, inventory or usage, so there is no second place to check.",
        "An exception list for the readings that failed validation, which is the only part a person still looks at.",
      ],
      after: [
        "Fewer estimated reads, because the reading arrives on time more often.",
        "Fewer corrections after invoicing, because the implausible values get caught before they are written rather than after.",
        "The people on site stop being the bottleneck for a number leaving the field.",
      ],
      needed: [
        "A clear description of where the number comes from and who reads it now.",
        "Access to the system it has to land in, and to whatever the source is.",
        "The rules for what counts as an implausible reading. If nobody has written them down, we work them out from the last year of data.",
      ],
      notFor:
        "If the reading requires someone to make a call about what they are looking at, or the device genuinely cannot be reached by anything but a person, this is not automatable and we will say so on the call. Sometimes the honest answer is a better form on a phone, not an automation.",
    },
  },
  {
    id: "lookup",
    kicker: "Finding the right record",
    title: "Who is this, and which job is it?",
    metaTitle: "Look Up a Customer or Job Across Systems | Nihilo Solutions",
    metaDescription:
      "Staff searching a booking tool, a spreadsheet, email and billing to answer who is calling and which job it is. We build one lookup against the systems you already have.",
    problem:
      "A name, phone, ID, or ticket comes in. Staff hunt across a booking tool, a sheet, email, and billing to find the right customer, job, or account. Time that should be spent helping is spent searching.",
    build:
      "A single lookup against the sources you already have, so the right record comes back without re-keying.",
    detail: {
      today: [
        "Something arrives: a phone call, an email, a reference number a customer read out.",
        "Whoever picked it up checks the booking tool, then the spreadsheet, then their inbox, then billing.",
        "The name is spelled differently in two of those, so the match is done by eye.",
        "They find it, deal with it, and the next person to get the same call repeats the search from scratch.",
      ],
      cost: [
        "This is the one people underestimate, because each search is short. It is the frequency that costs, not the duration.",
        "It happens while a customer is waiting, which is the worst possible moment to be slow.",
        "The knowledge of where to look is unevenly distributed. Your most experienced person finds it in seconds and a new hire cannot find it at all, which shows up as inconsistent service rather than as a systems problem.",
      ],
      built: [
        "One lookup that queries the sources you already have, rather than a new database that has to be kept in step with them.",
        "Matching that tolerates how records actually differ: spelling, punctuation, a phone number stored four ways, a reference with or without its prefix.",
        "One result with the fields that matter for the conversation, not a dump of every field in every system.",
        "An honest answer when it is ambiguous, showing the two candidates rather than guessing.",
      ],
      after: [
        "The answer is the same whoever is on the phone, which is the part that shows up as service quality.",
        "New staff can answer questions that used to require the person who has been there longest.",
        "Nobody re-keys a record they just found in order to use it somewhere else.",
      ],
      needed: [
        "A list of the places you look today, in the order you look at them.",
        "Read access to those sources. This is a lookup, so read access is usually all it needs.",
        "A handful of real examples of the same customer recorded differently, which is what tells us how forgiving the matching has to be.",
      ],
      notFor:
        "If the records genuinely have no common thread, no shared identifier, name, phone or address, then matching them is guesswork and guesswork about customer identity is worse than searching. That is a data problem to fix first, and we will tell you if that is what you have.",
    },
  },
  {
    id: "exceptions",
    kicker: "Exceptions, not every row",
    title: "Review only what needs a person",
    metaTitle: "Flag Exceptions Instead of Reviewing Every Row | Nihilo Solutions",
    metaDescription:
      "Teams scanning whole lists to find the late job, the odd reading or the unmatched record. We build rules that surface only the rows that need a person.",
    problem:
      "The team still scans entire lists to find the late job, the odd reading, the unmatched record, or the item that slipped. Most of the list is fine. The value is in the few rows that broke.",
    build: "Rules that surface only what needs a person, with enough context to act.",
    detail: {
      today: [
        "Somebody opens the list, which might be four hundred rows or four thousand.",
        "They scan it looking for the handful that are wrong: overdue, unmatched, missing a field, out of range.",
        "They work through those, and the rest of the list was read for nothing.",
        "The definition of wrong is in their head, and the person who covers for them uses a slightly different one.",
      ],
      cost: [
        "Reviewing everything to find the few is the most reliably wasteful pattern in operations work, and it is invisible because it looks like diligence.",
        "Attention degrades over a long list, so the rows near the bottom get less scrutiny than the ones at the top. The exceptions found are biased toward wherever the reviewer started.",
        "When the list grows, the review does not scale. It just gets skipped more often.",
      ],
      built: [
        "The definition of an exception, written down properly, from how the person doing it now actually decides.",
        "A check that runs against the whole list every time, without getting tired near the bottom.",
        "A short list of only the rows that need a person, each with the context needed to act rather than a row number to go and look up.",
        "A count of what was checked and cleared, so a quiet day reads as a quiet day rather than as the check being broken.",
      ],
      after: [
        "The review takes as long as the exceptions warrant, instead of as long as the list is.",
        "The same rules apply on a Friday afternoon as on a Monday morning.",
        "Growth in volume stops making the review worse.",
      ],
      needed: [
        "Someone who can articulate what makes a row wrong, or a few weeks of examples we can work backwards from.",
        "Access to the list at source.",
        "An agreement on what happens to an exception once it is surfaced, because a list nobody owns is just a different list to ignore.",
      ],
      notFor:
        "If the exceptions are genuinely novel every time, rules will not catch them and you will end up reviewing everything anyway plus maintaining an automation. Rules earn their place when the same few failure modes keep recurring.",
    },
  },
  {
    id: "move",
    kicker: "Moving information",
    title: "The same record, entered twice",
    metaTitle: "Stop Entering the Same Record in Two Systems | Nihilo Solutions",
    metaDescription:
      "A job, order or client created in one system and typed into another. We move the fields that matter, so people stop acting as the integration between tools.",
    problem:
      "A new job, order, or client is created in one system and then typed into another. That second entry is where errors and delay live. People are acting as the integration between tools.",
    build:
      "A one-way or two-way movement of the fields that actually matter. Not an enterprise integration program.",
    detail: {
      today: [
        "A record is created where the work starts: a booking, an order, a new client.",
        "Someone opens the second system and types the same information into it.",
        "The two drift, because an update in one is not always repeated in the other.",
        "When they disagree, whoever notices picks the one they trust and moves on.",
      ],
      cost: [
        "Double entry is not twice the work, it is twice the work plus the reconciliation when the copies disagree.",
        "The delay between the two entries is a window where the business has an inconsistent view of itself, and decisions made in that window are made on the wrong copy.",
        "It is also demoralising in a specific way. People know they are being used as a data pipe, and it is the part of the job they mention first when they leave.",
      ],
      built: [
        "A moving of the fields that actually matter, which is usually far fewer than the fields that exist.",
        "One direction where one direction is enough. Two-way sync is a much harder thing to keep correct, and most of the time nobody needs it.",
        "A clear rule for what wins when both sides changed, agreed before we build rather than discovered in production.",
        "A record of what moved and when, so a missing item can be traced instead of argued about.",
      ],
      after: [
        "The second entry stops being someone's job.",
        "The two systems agree, and when they cannot, something says so rather than leaving it to be found.",
        "Adding a third destination later is a change to one thing, not a second person typing.",
      ],
      needed: [
        "The list of fields that genuinely have to match. Starting from every field is how this turns into an integration project.",
        "Access to both systems, with write access on the destination.",
        "A decision on what wins in a conflict.",
      ],
      notFor:
        "If what you actually need is every field in both systems consistent in real time in both directions, that is an integration program and it should be scoped as one. We build the narrow version that removes the typing, and we will tell you when the narrow version is not what you need.",
    },
  },
  {
    id: "follow-through",
    kicker: "Follow-through",
    title: "The next step that lives in someone's head",
    metaTitle: "Automate the Next Step After a Job Closes | Nihilo Solutions",
    metaDescription:
      "The update, the note or the handover that has to happen after a job closes or a form arrives, and stalls when somebody forgets. We make the close-out trigger it.",
    problem:
      "After a job closes, a form arrives, or a reading comes in, someone has to remember to update a sheet, send a note, or kick off the next step. If they forget, it stalls. The process is real. It just is not written down as a system.",
    build:
      "The close-out, intake, or reading triggers the next step automatically, the same way every time.",
    detail: {
      today: [
        "Something completes: a job is closed, a form is submitted, a reading lands.",
        "That is supposed to trigger something else: a sheet updated, a note sent, a handover made, an invoice raised.",
        "It usually happens, because the person who owns it is conscientious.",
        "When it does not happen, nobody finds out until the thing downstream is late, which is often days later.",
      ],
      cost: [
        "The failure is silent, which makes it the most expensive kind. A step that fails loudly gets fixed the same day.",
        "The people who reliably remember become load-bearing, and the process quietly depends on them not changing roles.",
        "Because it mostly works, it never gets prioritised. It surfaces as occasional unexplained delay rather than as a problem with a name.",
      ],
      built: [
        "The trigger wired to the actual completion event rather than to somebody noticing it.",
        "The next step performed the same way every time: the update written, the note sent, the record created.",
        "A check that the step actually completed, because a trigger that fires and then fails is worse than no trigger.",
        "An alert when it did not, to a person rather than to a log nobody reads.",
      ],
      after: [
        "The step happens whether or not anyone remembers it.",
        "When it does not, you find out in minutes rather than when something downstream is late.",
        "The person who used to be the reason it worked can take a holiday.",
      ],
      needed: [
        "A precise definition of the trigger. Job closed usually turns out to mean three slightly different things to three people.",
        "Access to the system where the completion happens and the one where the next step lands.",
        "Someone to receive the alerts when a step fails, which is a real commitment rather than a checkbox.",
      ],
      notFor:
        "If the next step depends on someone reading the situation and deciding what should happen, automating the decision is the wrong move. Automating the reminder, with the context attached, is usually the right one, and that is a smaller build.",
    },
  },
];

export function getUseCase(id: string): UseCase | undefined {
  return USE_CASES.find((c) => c.id === id);
}
