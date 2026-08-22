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
    title: "The report someone still assembles by hand",
    metaTitle: "Automate a Recurring Client Report | Nihilo Solutions",
    metaDescription:
      "The client report, status pack or summary someone still assembles by hand and drops into your template. We build the version that produces itself and keep it running.",
    problem:
      "The same report goes out on the same cycle. Someone gathers the numbers from wherever they live, reads through them, puts the parts that matter into your standard template, writes a short summary, and sends it. It goes out late whenever that person is busy, and it looks slightly different depending on who built it.",
    build:
      "The gathering, the formatting and the delivery written down as rules, so the report produces itself in the template your clients already recognise.",
    detail: {
      today: [
        "The inputs come from wherever they live: a system of record, a portal, another report, a shared folder, a mailbox.",
        "Someone reads through them and picks out the parts that belong in this report.",
        "Those go into the template your clients already recognise, in the layout somebody worked out a long time ago.",
        "They write a few lines at the top saying what changed since last time.",
        "It goes out, and they answer the replies.",
      ],
      cost: [
        "The hours are the smallest part of it. A report that takes two hours on a regular cycle is real, but survivable.",
        "The expensive part is that it only exists while that person is available. When they are away it goes out late, in a different shape, or not at all.",
        "The second expensive part is that nobody audits a report that arrives reliably. When the rules live in one person's head, a rule that quietly stops being right can go unnoticed for a long time.",
        "Clients notice inconsistency faster than they notice lateness. A pack that looks different this time invites questions about the numbers rather than about the format.",
      ],
      built: [
        "The inputs gathered from the same places your person gathers them from now, on the same cycle.",
        "The selection, the grouping and the calculations written down as rules rather than as steps somebody repeats.",
        "The output rendered into your template, because a report that looks unfamiliar gets read differently even when the numbers are identical.",
        "Delivery to wherever it goes today: an inbox, a shared folder, a portal, a client.",
        "A flag when the figures look unlike last time, so an empty or doubled report announces itself instead of going out quietly.",
      ],
      after: [
        "The report goes out whether or not the person who used to build it is at work.",
        "It looks the same every time, so a change in the numbers reads as a change in the business rather than a change in who formatted it.",
        "When a rule needs to change, it changes in one place.",
      ],
      needed: [
        "One person who can walk us through the last one they produced, including the parts they do without thinking.",
        "Access to the sources it draws on.",
        "A copy of the last few reports, so we match the output rather than invent one.",
      ],
      notFor:
        "If the report is genuinely different every time, or the person writing it is making judgement calls that are the actual product, automating it will produce something worse than what you have. What we can sometimes do instead is assemble the parts that never change and leave the judgement to them.",
    },
  },
  {
    id: "data-prep",
    kicker: "Preparing data",
    title: "The cleanup that happens before anything gets loaded",
    metaTitle: "Automate Data Cleanup Before It Goes Into a System | Nihilo Solutions",
    metaDescription:
      "The checking, correcting and reformatting somebody does to data before it can go into a system. We build the version that runs itself and surfaces only what genuinely needs a person.",
    problem:
      "Data arrives in the shape whoever sent it uses, and it has to be in the shape your system accepts. Somebody sits between the two, renaming fields, fixing formats, splitting values, mapping codes, chasing blanks, and checking it looks right before it goes in.",
    build:
      "The preparation written down as rules that run the same way every time, with only the records that genuinely need a decision put in front of a person.",
    detail: {
      today: [
        "Something arrives from a supplier, a client, a branch, or another system.",
        "It is close to what your system needs but not the same: different field names, dates written another way, a value that has to be split in two, codes that have to be mapped across.",
        "Someone works through it, fixing the shape and correcting what is obviously wrong.",
        "They spot-check it, load it, and find the rest of the problems later.",
        "The next batch arrives with the same differences and the same person does it again.",
      ],
      cost: [
        "The work is invisible until it is skipped. It reads as a few minutes of tidying rather than as a process anyone owns.",
        "It looks like judgement but mostly is not. Almost every decision is the same one that was made last time, and the few that are real are buried in the routine ones.",
        "Bad records that get through cost far more than their number suggests, because they are found downstream by somebody who has no idea where they came from.",
        "The rules live in one person's habits, so the same data prepared by somebody else comes out slightly different.",
      ],
      built: [
        "The mapping between what arrives and what your system accepts, written down properly: names, formats, units, codes, the value that has to be split.",
        "The corrections that are always the same applied automatically, because a decision made identically a hundred times is not a decision.",
        "Validation before anything is written rather than after: required values present, figures in range, references that actually exist, duplicates caught.",
        "A short list of the records that genuinely need a person, saying what is wrong rather than leaving them to work it out.",
        "A record of what went in and what was held back, so a missing item can be traced instead of argued about.",
      ],
      after: [
        "The same data gets prepared the same way whoever is handling it.",
        "Bad records are stopped at the door instead of found weeks later by whoever they broke.",
        "The person who used to do the cleanup reviews the exceptions instead, which takes a fraction of the time and uses the part of their judgement that is worth paying for.",
      ],
      needed: [
        "A few real examples of the data as it actually arrives, including a bad one. The bad one teaches us more than the clean ones.",
        "The target: what the system needs, and what it rejects.",
        "Whoever does the cleanup today, for long enough to talk us through the corrections they make without thinking about them.",
      ],
      notFor:
        "If every batch genuinely arrives in a different shape and the mapping is a fresh puzzle each time, rules will not hold and you would be maintaining an automation on top of the work. This earns its place when the same handful of differences keep recurring.",
    },
  },
  {
    id: "capture",
    kicker: "Capturing values",
    title: "Numbers that only a person can fetch",
    metaTitle: "Automate Manual Data Capture and Entry | Nihilo Solutions",
    metaDescription:
      "Figures that live somewhere your systems cannot reach, so a person reads them and types them in. We build the capture, the validation, and the write into the system that needs them.",
    problem:
      "A number exists somewhere your systems cannot reach: a device, a portal with no way out, a document, a photo, a screen someone has to look at. A person reads it and types it into the system that bills, restocks, schedules or reports on it. Every step between the value existing and the value landing is a chance for it to be wrong or late.",
    build:
      "A capture path that fits how the number is actually obtained today, validation before it is written, and a write into the system that already owns it.",
    detail: {
      today: [
        "The number exists somewhere awkward: a device display, a portal with no export, a document somebody was sent, a photo taken on site, a screen in another system.",
        "Someone reads it and keys it into the system that acts on it.",
        "When it is missed, the system falls back to an estimate or a stale figure, and that gets corrected later.",
        "Corrections arrive after the decision they should have informed, so somebody reconciles the difference by hand.",
      ],
      cost: [
        "Typing a number is fast. Finding out weeks later that it was typed wrong, on something a customer is disputing, is not.",
        "Estimates compound. A figure missed this cycle makes the next true-up larger and harder to explain.",
        "The people who can obtain the number are usually the people you least want doing data entry, because they are in the middle of the work you are actually paid for.",
        "Because each capture is small, nobody counts them. The cost only becomes visible when the person who does them is unavailable.",
      ],
      built: [
        "A capture path that fits how the number is actually obtained today, whether that is a source that can be queried, a device that can be read, a document that can be parsed, or a photo somebody already takes.",
        "Validation before anything is written: is this plausible against last time, is the identifier one we recognise, is the change larger than it should be.",
        "A write into the system that already owns the billing, the stock, the schedule or the record, so there is no second place to check.",
        "An exception list for the values that failed validation, which is the only part a person still looks at.",
      ],
      after: [
        "Fewer estimates and stale figures, because the real number arrives on time more often.",
        "Fewer corrections after the fact, because implausible values get caught before they are written rather than after.",
        "The people closest to the work stop being the bottleneck for a number leaving it.",
      ],
      needed: [
        "A clear description of where the number comes from and who obtains it now.",
        "Access to the system it has to land in, and to whatever the source is.",
        "The rules for what counts as an implausible value. If nobody has written them down, we work them out from your history.",
      ],
      notFor:
        "If obtaining the number requires somebody to make a call about what they are looking at, or the source genuinely cannot be reached by anything but a person standing in front of it, this is not automatable and we will say so on the call. Sometimes the honest answer is a better form on a phone, not an automation.",
    },
  },
  {
    id: "lookup",
    kicker: "Finding the right record",
    title: "Who is this, and which job is it?",
    metaTitle: "Look Up a Customer or Job Across Systems | Nihilo Solutions",
    metaDescription:
      "Staff searching several systems to answer who is calling and which job or account it is. We build one lookup against the sources you already have.",
    problem:
      "A name, a number, a reference, or a ticket comes in. Staff hunt across several systems to find the right customer, job, or account. Time that should be spent helping is spent searching.",
    build:
      "A single lookup against the sources you already have, so the right record comes back without re-keying.",
    detail: {
      today: [
        "Something arrives: a phone call, an email, a reference number a customer read out.",
        "Whoever picked it up checks one system, then a shared file, then their inbox, then billing.",
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
        "Somebody opens the list, which might be a few hundred records or a few thousand.",
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
        "The same rules apply at the end of a long day as at the start of a quiet one.",
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
