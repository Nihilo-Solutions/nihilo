# Use case: finding the right record

Source: https://nihilosolutions.com/use-cases/lookup
Site: https://nihilosolutions.com/llms-full.txt

Finding the right record

# Who is this, and which job is it?
A name, a number, a reference, or a ticket comes in. Staff hunt across several systems to find the right customer, job, or account. Time that should be spent helping is spent searching.

## What happens today
- Something arrives: a phone call, an email, a reference number a customer read out.
- Whoever picked it up checks one system, then a shared file, then their inbox, then billing.
- The name is spelled differently in two of those, so the match is done by eye.
- They find it, deal with it, and the next person to get the same call repeats the search from scratch.

## Why it costs more than the hours
- This is the one people underestimate, because each search is short. It is the frequency that costs, not the duration.
- It happens while a customer is waiting, which is the worst possible moment to be slow.
- The knowledge of where to look is unevenly distributed. Your most experienced person finds it in seconds and a new hire cannot find it at all, which shows up as inconsistent service rather than as a systems problem.

## What we build
A single lookup against the sources you already have, so the right record comes back without re-keying.
- One lookup that queries the sources you already have, rather than a new database that has to be kept in step with them.
- Matching that tolerates how records actually differ: spelling, punctuation, a phone number stored four ways, a reference with or without its prefix.
- One result with the fields that matter for the conversation, not a dump of every field in every system.
- An honest answer when it is ambiguous, showing the two candidates rather than guessing.

## What changes once it runs
- The answer is the same whoever is on the phone, which is the part that shows up as service quality.
- New staff can answer questions that used to require the person who has been there longest.
- Nobody re-keys a record they just found in order to use it somewhere else.

## What we need from you
- A list of the places you look today, in the order you look at them.
- Read access to those sources. This is a lookup, so read access is usually all it needs.
- A handful of real examples of the same customer recorded differently, which is what tells us how forgiving the matching has to be.

## When this is the wrong build
If the records genuinely have no common thread, no shared identifier, name, phone or address, then matching them is guesswork and guesswork about customer identity is worse than searching. That is a data problem to fix first, and we will tell you if that is what you have.

## Other work we get asked about
- Recurring reports The report someone still assembles by hand
- Preparing data The cleanup that happens before anything gets loaded
- Collecting numbers Readings and counts that still get typed
- Exceptions, not every row Review only what needs a person
- Moving information The same record, entered twice
- Follow-through The next step that lives in someone's head

## Bring us last week's run of it.
Book a call. Thirty minutes on this one process, and a straight answer on whether it is worth automating.
Book a discovery call
