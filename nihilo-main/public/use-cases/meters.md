# Use case: collecting numbers

Source: https://nihilosolutions.com/use-cases/meters
Site: https://nihilosolutions.com/llms-full.txt

Collecting numbers

# Readings and counts that still get typed
A person reads a meter, a portal, a print-out, a counter, or a screen, then types the number into the system that bills, restocks, or tracks usage. Manual entry creates estimates, corrections, and delays. This shows up anywhere a number has to move from the real world into a system.

## What happens today
- The number exists somewhere physical or awkward: a device display, a vendor portal, a print-out, a photo someone took on site.
- Someone reads it and types it into the system that bills, restocks or reports on it.
- When a reading is missed, the system takes an estimate, and the estimate gets corrected later.
- Corrections arrive after invoices, so somebody reconciles the difference by hand.

## Why it costs more than the hours
- Typing a number is fast. Finding out that a number was typed wrong, three weeks later, on an invoice a customer is disputing, is not.
- Estimates compound. A missed read this month makes next month's true-up larger and harder to explain.
- The people doing the reading are usually the people you least want doing data entry, because they are on site and paid to be doing something else.

## What we build
A capture path for the number, basic validation, and a write-back to the system that already owns billing, inventory, or tracking.
- A capture path that fits how the number is actually obtained today, whether that is a portal that can be queried, a device that can be read, or a photo someone already takes.
- Validation before anything is written: is this plausible against the last reading, is the meter identifier one we recognise, is the jump larger than it should be.
- A write-back into the system that already owns billing, inventory or usage, so there is no second place to check.
- An exception list for the readings that failed validation, which is the only part a person still looks at.

## What changes once it runs
- Fewer estimated reads, because the reading arrives on time more often.
- Fewer corrections after invoicing, because the implausible values get caught before they are written rather than after.
- The people on site stop being the bottleneck for a number leaving the field.

## What we need from you
- A clear description of where the number comes from and who reads it now.
- Access to the system it has to land in, and to whatever the source is.
- The rules for what counts as an implausible reading. If nobody has written them down, we work them out from the last year of data.

## When this is the wrong build
If the reading requires someone to make a call about what they are looking at, or the device genuinely cannot be reached by anything but a person, this is not automatable and we will say so on the call. Sometimes the honest answer is a better form on a phone, not an automation.

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
