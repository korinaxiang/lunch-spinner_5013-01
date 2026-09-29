# Lunch Spinner

A small interactive web experience for anyone who cannot decide what to eat for lunch.

## Original idea

I wanted to make a lunch-choice spinner that helps someone make a quick decision. When someone holds down the charge button, the experience should build power based on how long they hold it, spin the wheel when they release it, and recommend the food selected by the pointer.

The core interaction is **hold to charge, then release to spin**. A short hold should create a light, short spin. A longer hold should clearly create a stronger spin that lasts longer.

## How to run it

Download or clone this repository, then open `index.html` in any modern web browser. No installation or extra packages are required.

## AI tool used

I used **Codex** to help create the HTML, CSS, and JavaScript for this project.

## Selected prompts and important decisions

These prompts represent important decisions in my process:

> Help me make a browser-based lunch spinner. The user should hold a button to build power; the longer they hold it, the longer the wheel should spin after they release it.

> Make a short press feel like a light spin and a long press feel noticeably stronger and longer.

> Make sure the food shown in the result is exactly the food the pointer lands on in the wheel.

> Change the whole experience from Chinese to English.

## Testing, revision, and reflection

My original expectation was that the time I held the button would be visually obvious in the spinner. In the first version, however, even a very quick press made the wheel spin quickly. This meant that short and long presses did not feel different enough. I also found a more serious mismatch: the wheel could appear to land on option A while the result message said that I should eat option B. Finally, I decided that the project should be in English rather than Chinese.

To revise the project, I reduced the minimum spin for a quick press and increased the difference between short and long holds. I also aligned each food label with the center of its wheel section and changed the result calculation so it uses the section under the fixed pointer. After the revision, I tested quick taps, approximately one-second holds, and three-second holds. The short tap now makes a noticeably lighter spin, while the longer hold creates a much longer one. I also checked that the result text matches the food under the pointer. Codex helped write and revise the interface and interaction code, but I had to identify the experience problems, decide what “light” and “strong” should feel like, choose the food options, and verify the result myself. Different people may still have different expectations for the amount of power needed, so I would next ask other people to test it and use their feedback to tune the timing.
