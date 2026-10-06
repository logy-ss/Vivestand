# Vivestand

A website for athletes who got hurt. You pick your injury and read how to recover, find a sports doctor, have a free 10-minute online session, learn how to train and eat to avoid injuries, and shop for second-hand sports gear.

It is a **demo**: there is no server behind it. Everything happens inside your browser.

## How it works, in plain words

- Every page is one folder in `src/` with an `.html` file (what's on the page), a `.css` file (how it looks) and, if the page does something when you click, a `.js` file (what happens).
- Pages link to each other with normal links. When a page needs to know *which* thing you picked, the link says it in the address, like `injuries.html?injury=knee` or `equepment.html?sport=football`.
- Things every page shares live in `src/Components/`:
  - `tokens.css`: the colours and the font (Delius), written once.
  - `header.css`, `footer.css`: the top and bottom bars.
  - `chat.css` + `chat.js`: the 💬 chat on the Doctors and Online pages.
  - `cart-count.js`: remembers your cart and shows "🛒 Cart (3)" in the header.
- Your cart is saved in your browser's storage, so it is still there when you change page.

| Page | What you can do |
|---|---|
| Home | Pick one of 20 injuries |
| Injuries | Read symptoms, a week-by-week recovery plan and prevention tips |
| Doctors | Filter doctors by body part, chat, press "Consult Now" |
| Online session | Answer 3 questions → 10-minute timer → prices → book your next session |
| Pave Your Well | Read nutrition, exercises and a weekly training plan |
| Recovery | Read the return-to-training plan (Arabic and English) |
| Equipment | Pick a sport, add gear to your cart |
| Cart | Change how many, see the total, fill in delivery details, place the order |
| Login, Signup, Contact Us | Fill in the form |

## Run it

From this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. It takes you to the home page. You can also double-click any `.html` file.

## Deploy it

Upload the whole folder to any static web host (GitHub Pages, Netlify, …). There is nothing to build or install.

## Limits

These are on purpose, to keep the code simple enough to read top to bottom:

- **No server, no accounts.** Login and Signup only check that the boxes are filled in (and that the email has an @). Nobody is really logged in, and no password is stored anywhere.
- **Forms don't send anything.** Contact Us, the booking and the order all show a "this is a demo, nothing was sent" message.
- **The chat is not a real doctor.** It answers with one of 5 ready-made friendly lines, picked at random. Messages are capped at 200 characters.
- **One doctor for online sessions.** "Consult Now" on any doctor leads to the same Online page with Dr. Ahmed El-Shaer.
- **No payment.** The 300 EGP session and the shop order are never charged.
- **Booking only checks the basics:** a date and time are picked and not in the past. It doesn't know when the doctor is free.
- **The cart lives in one browser.** Another browser, another device or clearing your browser data starts with an empty cart.
- **Prices are typed in by hand** in Egyptian pounds (EGP). There is no stock count, so you can add any item as many times as you like.
- **The font needs internet.** Delius comes from Google Fonts. Offline, the page falls back to a plain font.
- **Simple checks only.** An age or phone number isn't checked beyond "not empty".
