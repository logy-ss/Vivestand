# Vivestand: Sports Injury Recovery Platform

Project documentation for the Afro-Asian Forum for Innovation and Technology (AFFIAT), Aswan Finals 2026 · Logien Mohamed · Team Vivestand · Techno Future Academy, KFS

<p align="center"><img src="assets/partners.png" alt="AFFIAT and Techno Future Kafr El Sheikh" width="320"></p>

<p align="center"><img src="assets/logo.png" alt="Vivestand logo" width="300"></p>



## 1. Project Overview | نظرة عامة على المشروع

| Field | Value |
|-------|-------|
| **Project Title** | Vivestand: Sports Injury Recovery Platform |
| **Project Type** | Static website (front-end demo, no server) |
| **Description** | Vivestand is a website for athletes who got hurt. Pick your injury and get a recovery plan, find a sports doctor, try a free 10-minute online session, and shop second-hand gear for your sport. |
| **Target Users** | Injured athletes, sports fans and gym-goers, sports doctors and physios, and people selling used sports gear. |
| **Live site** | <https://logy-ss.github.io/Vivestand/> |
| **Code** | <https://github.com/logy-ss/Vivestand> |

### Tech Stack | التقنيات المستخدمة

| Category | Technology | Purpose |
|----------|-----------|---------|
| Pages | HTML | 11 pages, one folder each in `src/` |
| Look | CSS | One `.css` per page, plus shared colours, header and footer in `src/Components/` |
| Font | Delius, from Google Fonts | The only outside file the site loads |
| Hosting | GitHub Pages | Serves the folder as it is. Nothing to build. |

## 2. Problem Statement | المشكلة

Athletes who get injured often don't know how serious the injury is, how long it takes to heal, or which doctor to see. Good recovery gear is also expensive. Vivestand gives them one place for a recovery plan, a doctor and gear.

### Why does it matter? | لماذا هذا مهم؟

Without a clear plan, athletes go back to training too early and get hurt again, or they stop playing. A small injury can turn into a long one.

### How is it currently solved? | كيف تُحل المشكلة حاليًا؟

Most athletes ask a coach or a friend, search online, or wait for a clinic appointment. The advice is mixed, doctors are hard to compare, and there is no single place for plans, doctors and gear.

## 3. Technical Architecture | البنية التقنية

### Project Structure | هيكل المشروع

```text
Vivestand/
├── index.html              # Sends you to src/Home/home.html
├── src/
│   ├── Components/         # Shared by many pages
│   │   ├── tokens.css      # Colours, Delius font, page width
│   │   ├── header.css      # Top bar (its HTML is in each page)
│   │   ├── footer.css      # Bottom bar
│   │   ├── chat.css/.js    # The 💬 chat (Doctors, Online)
│   │   └── cart-count.js   # loadCart, saveCart, showCartCount
│   ├── Home/               # 20 injury cards
│   ├── Injuries/           # injuries.js: INJURIES (20)
│   ├── Doctors/            # 61 doctors; doctors.js filters
│   ├── Online_session/     # online.js: the 4 steps
│   ├── Professional/       # Pave Your Well
│   ├── Recovery/           # Arabic + English plan
│   ├── Equepment/          # equepment.js: SPORTS, PRODUCTS
│   ├── Cart/               # cart.js: cart and order form
│   ├── Login/, Signup/     # Forms with friendly checks
│   └── contact_us/         # Contact form
├── images/                 # logo.png, background-image.png
└── DOC.MD                  # The product idea (EN + AR)
```

Each page folder holds `page.html` and `page.css`, plus `page.js` when something happens on a click. (`Equepment` is spelled this way in the code, so the links use that spelling.)

### Architecture and Data Flow | تدفق البيانات


![What each page loads](diagrams/page-parts.png)

### Key Files | الملفات الأساسية

| File | Purpose |
|------|---------|
| `src/Components/tokens.css` | The palette (`--navy`, `--blue-1`…`--blue-5`, `--pink`…`--pink-4`), the Delius font and the shared page width. Loaded first on every page. |
| `src/Components/cart-count.js` | Reads and saves the cart, and updates the cart number in the header on every page. |
| `src/Injuries/injuries.js` | `INJURIES`: 20 injuries, each with a title, a description, 5 symptoms, 4 recovery stages and 5 prevention tips. `showInjury()` fills the page from `?injury=`. |
| `src/Equepment/equepment.js` | `SPORTS` (14) and `PRODUCTS` (18 per sport, 252 in all). Shows the sport list, or one sport's products with "Add to cart". |
| `src/Online_session/online.js` | `showStep(n)` for the 4 steps, the 600-second timer, and the booking checks. |
| `src/Cart/cart.js` | Draws the cart with − / +, adds up the total, checks the delivery form, and empties the cart after the order. |
| `src/Components/chat.js` | Shows what you type with `textContent`, then answers with 1 of 5 ready-made lines after 500 ms. |

## 4. Features & User Flow | المميزات ورحلة المستخدم

### Feature List | قائمة المميزات

| # | Feature | Description | Status |
|---|---------|-------------|:------:|
| 1 | Injury picker | 20 injury cards on Home, from shoulder to ACL. Each is a plain link to its own page. | Complete |
| 2 | Injury pages | Symptoms, a recovery plan in 4 stages and prevention tips. An unknown name shows "Injury Not Found". | Complete |
| 3 | Doctors | 61 Egyptian doctors in 6 groups (shoulder, elbow, knee, back & spine, general sports, physical therapy) with a filter. | Complete. Every "Consult Now" goes to the same doctor. |
| 4 | Chat | A 💬 chat on Doctors and Online. Messages up to 200 characters. | Demo. Answers are 5 ready-made lines. |
| 5 | Free online session | 3 questions → a 10-minute timer → prices (300 EGP) → pick a date and time. Times in the past are refused. | Demo. Nothing is sent. |
| 6 | Pave Your Well | 6 prevention tips, 4 kinds of food, a 6-meal daily plan, 12 exercises in 3 groups and a 7-day training program. | Complete |
| 7 | Recovery | Return-to-training plan in Arabic and English: 5 phases, physiotherapy, nutrition, equipment, warning signs and 4-week plans for 6 sports. | Complete |
| 8 | Equipment shop | 14 sports, 18 listings each, with seller, condition and price in EGP. "Add to cart" adds one more each click. | Complete |
| 9 | Cart | − / + for each item, the total, and a delivery form (name, phone, address). | Demo. No payment, nothing is sent. |
| 10 | Log In, Sign Up, Contact Us | Forms with friendly messages for empty boxes and emails without "@". | Demo. Nobody is really logged in. |

### User Flow | رحلة المستخدم

![How an athlete moves through the site](diagrams/flow.png)

### Screen Reference | الشاشات

| Screen | File | Description |
|--------|------|-------------|
| Home | `src/Home/home.html` | Welcome box, 20 injury cards (5 per row), "Why Choose Vivestand?" and "How It Works". |
| Injury | `src/Injuries/injuries.html` | One injury: recovery plan, common symptoms, prevention tips and three buttons. |
| Doctors | `src/Doctors/doctors.html` | 7 filter cards (All + 6 groups) and the doctor cards, plus the chat. |
| Online | `src/Online_session/online.html` | Dr. Ahmed El-Shaer's card, the 4-step session and the chat. |
| Pave Your Well | `src/Professional/pave_your_well.html` | Prevention, nutrition, exercises and the weekly training program. |
| Recovery | `src/Recovery/recovery.html` | Right-to-left Arabic page with English blocks beside it. |
| Equipment | `src/Equepment/equepment.html` | The sport list, or one sport's products when the address has `?sport=`. |
| Cart | `src/Cart/cart.html` | The cart, the total and the delivery form. |
| Contact Us | `src/contact_us/contact_us.html` | Name, number, email and problem. |
| Log In | `src/Login/login.html` | Email and password. No header. |
| Sign Up | `src/Signup/signup.html` | Full name, age, email and password. No header. |

Every page except Log In and Sign Up has the same header: 7 links (Home, Doctors, Pave Your Well, Online, Recovery, Equipment, Contact Us), then 🛒 Cart, Sign Up and Log In.

## 5. UI/UX Design | تصميم واجهة المستخدم

### Screenshots | لقطات الشاشة

![Home](screenshots/home.jpg)

| Pick an injury | The knee page |
|------|------|
| ![Home injury cards](screenshots/home-injuries.jpg) | ![Knee injury page](screenshots/injury-knee.jpg) |

| Doctors | Knee doctors and the chat |
|------|------|
| ![Doctors](screenshots/doctors.jpg) | ![Knee doctors with the chat open](screenshots/doctors-knee-chat.jpg) |

| Online: questions | Online: the 10-minute session |
|------|------|
| ![Online questions](screenshots/online-questions.jpg) | ![Online timer](screenshots/online-timer.jpg) |

| Online: pricing | Online: booked |
|------|------|
| ![Online pricing](screenshots/online-pricing.jpg) | ![Online booked](screenshots/online-booked.jpg) |

| Pave Your Well | The weekly training program |
|------|------|
| ![Pave Your Well](screenshots/pave-your-well.jpg) | ![Weekly training program](screenshots/pave-weekly.jpg) |

![Recovery, in Arabic and English](screenshots/recovery.jpg)

| Equipment: pick a sport | Equipment: football |
|------|------|
| ![Sport list](screenshots/equipment-sports.jpg) | ![Football equipment](screenshots/equipment-football.jpg) |

| Cart | Order placed |
|------|------|
| ![Cart](screenshots/cart.jpg) | ![Order placed](screenshots/cart-ordered.jpg) |

| Log In (email without "@") | Sign Up | Contact Us |
|------|------|------|
| ![Log In](screenshots/login.jpg) | ![Sign Up](screenshots/signup.jpg) | ![Contact Us](screenshots/contact.jpg) |

Try the site: <https://logy-ss.github.io/Vivestand/>

<img src="assets/qr-app.png" alt="QR code for https://logy-ss.github.io/Vivestand/" width="148">

### Design System | نظام التصميم

| Element | Current implementation |
|---------|------------------------|
| Logo | "Vive" in navy and "stand" in pink brush letters, with a blue figure jumping up, blue splashes and sparkles (`images/logo.png`). The header shows it next to the word "vivestand". |
| Navy | `--navy` `#0B1F3A`: header, footer and headings |
| Blues | `--blue-1` `#123E6B` to `--blue-5` `#DFF4FF`: page headers, injury cards, backgrounds |
| Pink | `--pink` `#E42264` to `--pink-4` `#FFC0D5`: main buttons, the chat button, active steps |
| Text / white | `--text` `#102235` on `--white` `#F9FCFF` |
| Font | Delius on every page, set once in `tokens.css`. Forms inherit it. The poster and slides use Pacifico (wordmark), Baloo 2, Nunito and JetBrains Mono. |
| Page width | `--page-width` 1440px with a 32px gutter (16px on phones). Header, content and footer share one `.container`, so every edge lines up with the logo. |
| Cards and grids | Rounded white or light-blue cards. Rows come out even at 1440px: Home 5 per row, Equipment 7, Doctors 5. |
| Header | One row from 1201px up, the links on their own row at ≤1200px, centred on phones (≤640px). |
| Forms | `novalidate`, so the page's own friendly messages show instead of the browser's. |

## 6. Data Sources | مصادر البيانات

### Data Sources | مصادر البيانات

| Source | Type | Description |
|--------|------|-------------|
| `INJURIES` in `src/Injuries/injuries.js` | Typed into the code | 20 injuries, keyed by the name Home puts after `?injury=` |
| `SPORTS` and `PRODUCTS` in `src/Equepment/equepment.js` | Typed into the code | 14 sports and 252 listings (18 each), prices in EGP |
| `src/Doctors/doctors.html` | Typed into the HTML | 61 doctor cards in 6 groups |
| Pave Your Well and Recovery pages | Typed into the HTML | The nutrition, exercise and return-to-training plans |
| What the visitor types | User input | Form answers are checked and then shown back. Only the cart is saved. |

## 7. Marketing Plan | خطة تسويقية

### Target Audience | الجمهور المستهدف

- **Primary:** Injured athletes aged 18–45 in Egypt, starting with the 14 sports in the shop.
- **Secondary:** Sports fans, gym members and coaches who want to prevent injuries, plus doctors, physios and sellers of used gear.


## 8. Student Worksheet | ورقة عمل الطالب

### My Project Information | معلومات مشروعي

**Student Name:** Logien Mohamed  
**Team:** Team Vivestand  
**Academy:** Techno Future Academy, KFS  
**Project Title:** Vivestand: Sports Injury Recovery Platform

### What is your project about? | عن ماذا يتحدث مشروعك؟

Vivestand is a website for athletes who got hurt. You pick your injury and read how to recover, find a sports doctor, try a free 10-minute online session, and shop for second-hand sports gear.

### What problem does it solve? | ما المشكلة التي يحلها؟

Injured athletes often don't know how serious their injury is, how long it takes to heal, or which doctor to see. Vivestand puts the recovery plan, the doctors and the gear in one place.

### What I Learned | ماذا تعلمت

1. **The hardest part:** writing a clear week-by-week recovery plan for every injury, and making one Injuries page show the right one from the link, like `injuries.html?injury=knee`.
2. **The most fun part:** building the online session: three questions, then a 10-minute timer, then the prices.
3. **If I had more time:** I would add real bookings and payments for the doctors, and let sellers post their own used gear.
4. **One thing I would do differently:** plan the shared header, footer and colours in `src/Components/` from the first day, so every page looks the same without copying.
---

Logien Mohamed · Team Vivestand · Techno Future Academy, KFS · AFFIAT · Afro-Asian Forum for Innovation and Technology · Aswan Finals 2026
