# Use case: preparing data

Source: https://nihilosolutions.com/use-cases/data-prep
Site: https://nihilosolutions.com/llms-full.txt

Preparing data

# The cleanup that happens before anything gets loaded
Data arrives in the shape whoever sent it uses, and it has to be in the shape your system accepts. Somebody sits between the two, renaming fields, fixing formats, splitting values, mapping codes, chasing blanks, and checking it looks right before it goes in.

## What happens today
- Something arrives from a supplier, a client, a branch, or another system.
- It is close to what your system needs but not the same: different field names, dates written another way, a value that has to be split in two, codes that have to be mapped across.
- Someone works through it, fixing the shape and correcting what is obviously wrong.
- They spot-check it, load it, and find the rest of the problems later.
- The next batch arrives with the same differences and the same person does it again.

## Why it costs more than the hours
- The work is invisible until it is skipped. It reads as a few minutes of tidying rather than as a process anyone owns.
- It looks like judgement but mostly is not. Almost every decision is the same one that was made last time, and the few that are real are buried in the routine ones.
- Bad records that get through cost far more than their number suggests, because they are found downstream by somebody who has no idea where they came from.
- The rules live in one person's habits, so the same data prepared by somebody else comes out slightly different.

## What we build
The preparation written down as rules that run the same way every time, with only the records that genuinely need a decision put in front of a person.
- The mapping between what arrives and what your system accepts, written down properly: names, formats, units, codes, the value that has to be split.
- The corrections that are always the same applied automatically, because a decision made identically a hundred times is not a decision.
- Validation before anything is written rather than after: required values present, figures in range, references that actually exist, duplicates caught.
- A short list of the records that genuinely need a person, saying what is wrong rather than leaving them to work it out.
- A record of what went in and what was held back, so a missing item can be traced instead of argued about.

## What changes once it runs
- The same data gets prepared the same way whoever is handling it.
- Bad records are stopped at the door instead of found weeks later by whoever they broke.
- The person who used to do the cleanup reviews the exceptions instead, which takes a fraction of the time and uses the part of their judgement that is worth paying for.

## What we need from you
- A few real examples of the data as it actually arrives, including a bad one. The bad one teaches us more than the clean ones.
- The target: what the system needs, and what it rejects.
- Whoever does the cleanup today, for long enough to talk us through the corrections they make without thinking about them.

## When this is the wrong build
If every batch genuinely arrives in a different shape and the mapping is a fresh puzzle each time, rules will not hold and you would be maintaining an automation on top of the work. This earns its place when the same handful of differences keep recurring.

## Other work we get asked about
- Recurring reports The report someone still assembles by hand
- Collecting numbers Readings and counts that still get typed
- Finding the right record Who is this, and which job is it?
- Exceptions, not every row Review only what needs a person
- Moving information The same record, entered twice
- Follow-through The next step that lives in someone's head

## Bring us last week's run of it.
Book a call. Thirty minutes on this one process, and a straight answer on whether it is worth automating.
Book a discovery call
