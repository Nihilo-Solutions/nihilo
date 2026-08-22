# Use case: moving information

Source: https://nihilosolutions.com/use-cases/move
Site: https://nihilosolutions.com/llms-full.txt

Moving information

# The same record, entered twice
A new job, order, or client is created in one system and then typed into another. That second entry is where errors and delay live. People are acting as the integration between tools.

## What happens today
- A record is created where the work starts: a booking, an order, a new client.
- Someone opens the second system and types the same information into it.
- The two drift, because an update in one is not always repeated in the other.
- When they disagree, whoever notices picks the one they trust and moves on.

## Why it costs more than the hours
- Double entry is not twice the work, it is twice the work plus the reconciliation when the copies disagree.
- The delay between the two entries is a window where the business has an inconsistent view of itself, and decisions made in that window are made on the wrong copy.
- It is also demoralising in a specific way. People know they are being used as a data pipe, and it is the part of the job they mention first when they leave.

## What we build
A one-way or two-way movement of the fields that actually matter. Not an enterprise integration program.
- A moving of the fields that actually matter, which is usually far fewer than the fields that exist.
- One direction where one direction is enough. Two-way sync is a much harder thing to keep correct, and most of the time nobody needs it.
- A clear rule for what wins when both sides changed, agreed before we build rather than discovered in production.
- A record of what moved and when, so a missing item can be traced instead of argued about.

## What changes once it runs
- The second entry stops being someone's job.
- The two systems agree, and when they cannot, something says so rather than leaving it to be found.
- Adding a third destination later is a change to one thing, not a second person typing.

## What we need from you
- The list of fields that genuinely have to match. Starting from every field is how this turns into an integration project.
- Access to both systems, with write access on the destination.
- A decision on what wins in a conflict.

## When this is the wrong build
If what you actually need is every field in both systems consistent in real time in both directions, that is an integration program and it should be scoped as one. We build the narrow version that removes the typing, and we will tell you when the narrow version is not what you need.

## Other work we get asked about
- Recurring reports The report someone still assembles by hand
- Preparing data The cleanup that happens before anything gets loaded
- Capturing values Numbers that only a person can fetch
- Finding the right record Who is this, and which job is it?
- Exceptions, not every row Review only what needs a person
- Follow-through The next step that lives in someone's head

## Bring us last week's run of it.
Book a call. Thirty minutes on this one process, and a straight answer on whether it is worth automating.
Book a discovery call
