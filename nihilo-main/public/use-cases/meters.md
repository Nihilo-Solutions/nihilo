# Use case: capturing values

Source: https://nihilosolutions.com/use-cases/meters
Site: https://nihilosolutions.com/llms-full.txt

Capturing values

# Numbers that only a person can fetch
A number exists somewhere your systems cannot reach: a device, a portal with no way out, a document, a photo, a screen someone has to look at. A person reads it and types it into the system that bills, restocks, schedules or reports on it. Every step between the value existing and the value landing is a chance for it to be wrong or late.

## What happens today
- The number exists somewhere awkward: a device display, a portal with no export, a document somebody was sent, a photo taken on site, a screen in another system.
- Someone reads it and keys it into the system that acts on it.
- When it is missed, the system falls back to an estimate or a stale figure, and that gets corrected later.
- Corrections arrive after the decision they should have informed, so somebody reconciles the difference by hand.

## Why it costs more than the hours
- Typing a number is fast. Finding out weeks later that it was typed wrong, on something a customer is disputing, is not.
- Estimates compound. A figure missed this cycle makes the next true-up larger and harder to explain.
- The people who can obtain the number are usually the people you least want doing data entry, because they are in the middle of the work you are actually paid for.
- Because each capture is small, nobody counts them. The cost only becomes visible when the person who does them is unavailable.

## What we build
A capture path that fits how the number is actually obtained today, validation before it is written, and a write into the system that already owns it.
- A capture path that fits how the number is actually obtained today, whether that is a source that can be queried, a device that can be read, a document that can be parsed, or a photo somebody already takes.
- Validation before anything is written: is this plausible against last time, is the identifier one we recognise, is the change larger than it should be.
- A write into the system that already owns the billing, the stock, the schedule or the record, so there is no second place to check.
- An exception list for the values that failed validation, which is the only part a person still looks at.

## What changes once it runs
- Fewer estimates and stale figures, because the real number arrives on time more often.
- Fewer corrections after the fact, because implausible values get caught before they are written rather than after.
- The people closest to the work stop being the bottleneck for a number leaving it.

## What we need from you
- A clear description of where the number comes from and who obtains it now.
- Access to the system it has to land in, and to whatever the source is.
- The rules for what counts as an implausible value. If nobody has written them down, we work them out from your history.

## When this is the wrong build
If obtaining the number requires somebody to make a call about what they are looking at, or the source genuinely cannot be reached by anything but a person standing in front of it, this is not automatable and we will say so on the call. Sometimes the honest answer is a better form on a phone, not an automation.

## Other work we get asked about
- Recurring reports The report someone still assembles by hand
- Preparing data The cleanup that happens before anything gets loaded
- Finding the right record Who is this, and which job is it?
- Exceptions, not every row Review only what needs a person
- Moving information The same record, entered twice
- Follow-through The next step that lives in someone's head

## Bring us last week's run of it.
Book a call. Thirty minutes on this one process, and a straight answer on whether it is worth automating.
Book a discovery call
