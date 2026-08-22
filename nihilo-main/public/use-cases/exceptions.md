# Use case: exceptions, not every row

Source: https://nihilosolutions.com/use-cases/exceptions
Site: https://nihilosolutions.com/llms-full.txt

Exceptions, not every row

# Review only what needs a person
The team still scans entire lists to find the late job, the odd reading, the unmatched record, or the item that slipped. Most of the list is fine. The value is in the few rows that broke.

## What happens today
- Somebody opens the list, which might be a few hundred records or a few thousand.
- They scan it looking for the handful that are wrong: overdue, unmatched, missing a field, out of range.
- They work through those, and the rest of the list was read for nothing.
- The definition of wrong is in their head, and the person who covers for them uses a slightly different one.

## Why it costs more than the hours
- Reviewing everything to find the few is the most reliably wasteful pattern in operations work, and it is invisible because it looks like diligence.
- Attention degrades over a long list, so the rows near the bottom get less scrutiny than the ones at the top. The exceptions found are biased toward wherever the reviewer started.
- When the list grows, the review does not scale. It just gets skipped more often.

## What we build
Rules that surface only what needs a person, with enough context to act.
- The definition of an exception, written down properly, from how the person doing it now actually decides.
- A check that runs against the whole list every time, without getting tired near the bottom.
- A short list of only the rows that need a person, each with the context needed to act rather than a row number to go and look up.
- A count of what was checked and cleared, so a quiet day reads as a quiet day rather than as the check being broken.

## What changes once it runs
- The review takes as long as the exceptions warrant, instead of as long as the list is.
- The same rules apply at the end of a long day as at the start of a quiet one.
- Growth in volume stops making the review worse.

## What we need from you
- Someone who can articulate what makes a row wrong, or a few weeks of examples we can work backwards from.
- Access to the list at source.
- An agreement on what happens to an exception once it is surfaced, because a list nobody owns is just a different list to ignore.

## When this is the wrong build
If the exceptions are genuinely novel every time, rules will not catch them and you will end up reviewing everything anyway plus maintaining an automation. Rules earn their place when the same few failure modes keep recurring.

## Other work we get asked about
- Recurring reports The report someone still assembles by hand
- Preparing data The cleanup that happens before anything gets loaded
- Collecting numbers Readings and counts that still get typed
- Finding the right record Who is this, and which job is it?
- Moving information The same record, entered twice
- Follow-through The next step that lives in someone's head

## Bring us last week's run of it.
Book a call. Thirty minutes on this one process, and a straight answer on whether it is worth automating.
Book a discovery call
