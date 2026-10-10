# Software Project Documentation | توثيق مشروع البرمجيات

## Vivestand: Sports Injury Recovery & Equipment Guide

---

## 1. Project Overview | نظرة عامة على المشروع

| Field | Value |
|-------|-------|
| **Project Title** | Vivestand |
| **Project Type** | Static web front-end demo |
| **Description** | Vivestand helps athletes explore sports injuries, read recovery and prevention guidance, find sports doctors, try a demonstration online-session flow, learn about training and nutrition, and browse sports equipment. |
| **Target Users** | Athletes recovering from an injury, sports enthusiasts seeking prevention and training guidance, and people looking for sports equipment or sports-doctor information. |
| **Date** | 2026 |

### Tech Stack | Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Languages** | HTML5, CSS3, JavaScript | Build page structure, visual design, and simple browser interactions |
| **Framework** | None | The demo uses standalone static pages without a front-end framework |
| **Database** | None | Content is hard-coded; the cart is stored in browser local storage |
| **Libraries** | None | No JavaScript libraries are required |
| **File Storage** | Static project files and browser local storage | Images and page assets are local files; cart items stay in the current browser |

---

## 2. Problem Statement | بيان المشكلة

<div class="arabic">
قد يجد الرياضي المصاب صعوبة في فهم إصابته ومعرفة خطوات التعافي والوقاية، أو تحديد الطبيب المناسب والوصول إلى أدوات رياضية ملائمة. يجمع Vivestand هذه المعلومات والصفحات في مكان واحد ليسهل استكشافها.
</div>

### What problem does this project solve? | ما المشكلة التي يحلها هذا المشروع
Vivestand organizes introductory sports-injury information, recovery and prevention guidance, doctor information, nutrition and training content, and sports-equipment browsing in one website.

### Why does it matter? | لماذا هذا مهم
Athletes may not know what information to look for after an injury or where to start when seeking specialist care or suitable equipment. A clear, organized guide can make these next steps easier to explore. The site is informational and does not replace professional medical advice.

### How is it currently solved? | كيف تحل المشكلة حاليا
The current demo provides separate pages for injury information, doctors, online-session steps, nutrition and training, recovery, equipment, a cart, and contact. It does not have a server, real accounts, real doctor consultations, payment processing, or message delivery.

---

## 3. Technical Architecture | البنية التقنية

<div class="arabic">
المشروع واجهة ويب ثابتة مبنية باستخدام HTML وCSS وJavaScript عادي. لكل صفحة مجلدها وملفاتها، وتوجد الأنماط المشتركة والوظائف المشتركة البسيطة داخل src/Components. لا توجد قاعدة بيانات أو خادم خلفي؛ تحفظ عربة التسوق في localStorage داخل المتصفح.
</div>

### Project Structure | هيكل المشروع

```text
vivestand/
├── index.html                     # يوجّه إلى الصفحة الرئيسية
├── docs/
│   ├── DOC.MD                      # فكرة المنصة والميزات المقترحة
│   ├── Documentation.md            # وصف الفكرة وطريقة الاستخدام
│   └── faq.md                      # خطوات الاستخدام
├── images/                         # صور الموقع
└── src/
    ├── Components/                 # الأنماط والسلوكيات المشتركة
    ├── Home/                        # الصفحة الرئيسية
    ├── Injuries/                    # معلومات الإصابات
    ├── Doctors/                     # الأطباء والمحادثة التجريبية
    ├── Online_session/              # خطوات الجلسة والحجز التجريبي
    ├── Professional/                # التدريب والتغذية
    ├── Recovery/                    # إرشادات العودة للتدريب
    ├── Equepment/                   # المنتجات حسب الرياضة
    ├── Cart/                        # عربة التسوق
    ├── Login/                       # نموذج تسجيل الدخول التجريبي
    ├── Signup/                      # نموذج إنشاء الحساب التجريبي
    └── contact_us/                  # نموذج التواصل
```

### Key Files | الملفات الرئيسية

| File | Purpose |
|------|---------|
| `index.html` | Opens the Home page |
| `src/Home/home.html` | Starting page for browsing injury topics |
| `src/Injuries/injuries.js` | Holds the injury information shown by the injury page |
| `src/Doctors/doctors.html` | Shows doctor information, specialty filtering, and demo chat |
| `src/Online_session/online.js` | Controls the consultation questions, timer, pricing, and booking steps |
| `src/Equepment/equepment.js` | Holds sport and equipment data for the shop demo |
| `src/Components/cart-count.js` | Reads and saves the browser-based cart |

### Runtime and Data | التشغيل والبيانات

- Run locally from the project root with `python3 -m http.server 8000`, then open `http://localhost:8000/`.
- The browser loads static HTML, CSS, JavaScript, and image files; no build or install step is needed.
- Page content and product/injury data are written in the project files. The cart is stored in `localStorage` under `vivestand-cart`.
- Login, signup, contact, booking, and order forms are demonstrations. They do not send data to a server.

---

## 4. Features & User Flow | الميزات وتدفق المستخدم

<div class="arabic">
يبدأ المستخدم من الصفحة الرئيسية أو معرض العقارات، ثم يمكنه تسجيل الدخول أو إنشاء حساب أو إضافة عقار. بعد ذلك يعرض تفاصيل العقار وينتقل إلى صفحة العقد لحفظ العقد أو رفعه.
</div>

### Feature List | قائمة الميزات

| # | Feature | Description | Status |
|---|---------|-------------|:------:|
| 1 | Injury guide | Browse injury topics, symptoms, recovery plans, and prevention tips | Complete in demo |
| 2 | Doctor directory | View doctor information and filter by body part | Complete in demo |
| 3 | Demonstration chat | Try canned replies on the Doctors and Online pages | Complete in demo |
| 4 | Online-session flow | Answer questions, see a 10-minute timer and price, and try the booking form | Complete in demo; no real consultation or booking |
| 5 | Training and nutrition | Read sample nutrition, exercise, and weekly training information | Complete in demo |
| 6 | Recovery guide | Read return-to-training guidance in Arabic and English | Complete in demo |
| 7 | Equipment shop and cart | Browse sample equipment by sport and save cart items in this browser | Complete in demo; no payment or fulfillment |
| 8 | Login and signup | Demonstrate basic form validation only | Demo only; no account or authentication |
| 9 | Contact form | Enter a message and see a demonstration response | Demo only; no message is sent |
| 10 | Injury-to-product matching, reviews, merchant tools, and progress tracking | Described as future platform capabilities in the concept documentation | Planned, not implemented |

> Status describes the current demo, not every feature proposed in the concept documents.

### Required Target User Flow | تدفق المستخدم المطلوب

```text
          ┌────────────────────┐
          │   Home / Gallery   │
          └─────────┬──────────┘
          │
    ┌───────────────┼───────────────┐
    │               │               │
    ▼               ▼               ▼
      ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
      │ Login        │ │ Register     │ │ Add Property │
      └──────┬───────┘ └──────┬───────┘ └──────┬───────┘
        │                 │                 │
        └────────────┬────┴────────────┬────┘
           ▼                 ▼
       ┌──────────────────┐
       │ Property Details │
       └────────┬─────────┘
           │
           ▼
        ┌──────────────┐
        │ Contract     │
        │ Page         │
        └──────┬───────┘
          │
          ▼
        ┌──────────────┐
        │ Save / Upload│
        │ Contract     │
        └──────────────┘
```

> This is the required target flow. It describes a property website and is not implemented by the current Vivestand sports-injury demo.

### Screen Reference | دليل الشاشات

| Screen | File / Route | Description | Transitions To |
|--------|-------------|-------------|----------------|
| Home | `src/Home/home.html` | Entry page with injury choices | Injuries and other site pages |
| Injuries | `src/Injuries/injuries.html` | Injury information, recovery, and prevention content | Doctors and related pages |
| Doctors | `src/Doctors/doctors.html` | Doctor listings, filters, and canned chat | Online session |
| Online session | `src/Online_session/online.html` | Consultation steps, timer, price, and demo booking | Other pages through navigation |
| Pave Your Well | `src/Professional/pave_your_well.html` | Nutrition, exercises, and a weekly training sample | Other pages through navigation |
| Recovery | `src/Recovery/recovery.html` | Arabic and English return-to-training information | Other pages through navigation |
| Equipment | `src/Equepment/equepment.html` | Sports and sample equipment | Cart |
| Cart | `src/Cart/cart.html` | Adjust quantities and try a delivery/order form | Other pages through navigation |
| Login / Signup / Contact Us | Their matching folders under `src/` | Demonstration forms | Form message or linked page |

---

## 5. UI/UX Design | تصميم واجهة المستخدم

<div class="arabic">
تستخدم الصفحات ألوانا زرقاء داكنة وتدرجات زرقاء مع لون وردي للأزرار الأساسية، وبطاقات لعرض المعلومات. صفحات الموقع منفصلة ولكل صفحة ملفات تنسيق خاصة بها، مع مكونات مشتركة للرأس والتذييل.
</div>

### Screenshots | لقطات الشاشة

**Landing Page**: الصفحة الرئيسية تعرض موضوعات الإصابات التي يمكن للمستخدم استكشافها.

**Doctor and Session Screens**: تعرض قائمة الأطباء والمحادثة التجريبية وخطوات الجلسة عبر الإنترنت.

**Shop Screens**: تعرض المعدات حسب الرياضة وعربة التسوق المحفوظة في المتصفح.

> Screenshots were not included in the project documentation; add current screenshots here when available.

### Design System | نظام التصميم

| Element | Style |
|---------|-------|
| **Primary colors** | Navy `#0B1F3A` and blue shades `#123E6B`, `#1F6FB3`, `#4AA8D8` |
| **Accent color** | Pink `#E42264` with lighter pink shades |
| **Font** | Delius from Google Fonts, with a sans-serif fallback |
| **Buttons** | High-contrast buttons using the shared blue and pink palette |
| **Layout** | Page-specific sections and cards, with shared header and footer styles |

### Responsive Design | التصميم المتجاوب

| Breakpoint | Layout | Tested? |
|------------|--------|:-------:|
| Desktop | Multi-section pages and multi-column content where space allows | Not documented |
| Tablet | Page layouts adapt through CSS responsive rules | Not documented |
| Mobile | Pages are intended to work in mobile browsers | Not documented |

---

## 6. Data Sources | مصادر البيانات

<div class="arabic">
المعلومات والبيانات المعروضة في النسخة الحالية مكتوبة داخل ملفات HTML وJavaScript، والصور موجودة في مجلد المشروع. لا توجد قاعدة بيانات أو واجهات API؛ تحفظ عربة التسوق في تخزين المتصفح المحلي.
</div>

### Data Sources | مصادر البيانات

| Source | Type | Description |
|--------|------|-------------|
| JavaScript page data | Static project data | Injury details, doctors, sports, and sample products are defined in page scripts |
| HTML content | Static project data | Descriptive text and page content are included in the HTML files |
| `images/` | Local image assets | Images used by the pages |
| User input | Browser form input | Values entered into demonstration forms; they are not sent to a server |
| `localStorage` | Browser storage | Stores the cart for the current browser under `vivestand-cart` |

### Database Schema | مخطط قاعدة البيانات

There is no database in the current demo. Cart entries stored in local storage contain `sport`, `mark`, `name`, `price`, and `quantity`.

### External APIs (if any) | واجهات برمجة التطبيقات

| API | Purpose | Rate Limit |
|-----|---------|------------|
| None | The current demo does not call a backend API | N/A |
| Google Fonts | Loads the Delius typeface used by the pages | Governed by Google Fonts availability |

---

## 7. Educational Content | المحتوى التعليمي

<div class="arabic">
يعرض المشروع معلومات تمهيدية عن إصابات الرياضة والتعافي والوقاية والتدريب والتغذية، ويوضح كيفية بناء موقع ثابت باستخدام HTML وCSS وJavaScript وتنظيم الصفحات والبيانات داخل ملفات المشروع.
</div>

### Learning Objectives | أهداف التعلم

By working with this project, a student can practice:

1. Structuring a multi-page website with semantic HTML.
2. Styling page layouts and shared design tokens with CSS.
3. Adding simple browser interactions with JavaScript.
4. Passing selections between pages using links and URL query parameters.
5. Persisting simple cart data in browser `localStorage`.
6. Communicating the limits of a front-end demo that has no backend.

### Cultural / Historical Context | السياق الثقافي / التاريخي

| Topic | Description |
|-------|-------------|
| Sports injury awareness | The project responds to athletes' need for accessible introductory information about injuries and recovery |
| Digital access to guidance | It organizes injury, doctor, training, nutrition, and equipment information in a single website |

### Curriculum Alignment | التوافق مع المنهج

| Skill Area | What the Student Practices |
|------------|---------------------------|
| Problem Solving | Organizing common athlete needs into a set of connected pages |
| Computational Thinking | Representing injury and product information in JavaScript data |
| Creativity | Designing readable pages and a consistent visual style |
| Web Development | Combining HTML, CSS, JavaScript, links, forms, and browser storage |
| Technical Writing | Documenting user flows, implemented behavior, and limitations |

---

## 8. Marketing Plan | خطة تسويقية

> This section describes possible ways to present the project. The current website is a demo and does not process sales or provide real medical services.

<div class="arabic">
يمكن تقديم Vivestand كعرض توضيحي يجمع معلومات الإصابات والتعافي والتدريب ومتجر معدات تجريبي. أي بيع أو استشارة طبية أو شراكة تجارية يحتاج إلى خدمات حقيقية وآمنة خارج النسخة الحالية.
</div>

### Target Audience | الجمهور المستهدف

- **Primary**: Athletes looking for introductory injury recovery and prevention information
- **Secondary**: Sports enthusiasts seeking training, nutrition, or equipment information
- **Potential partners**: Sports doctors, physiotherapy clinics, and sports-equipment retailers

### Platforms | المنصات

- Desktop and mobile web browsers
- Static hosting such as GitHub Pages or Netlify
- Local demonstration using a simple static web server

### Promotion Ideas | أفكار ترويجية

1. Demonstrate the injury-to-recovery browsing flow at a school or technology exhibition.
2. Share screenshots of the injury guide, doctor directory, and equipment pages.
3. Gather feedback from athletes and sports professionals before expanding the content.
4. Clearly label medical information as educational and connect users to qualified professionals for care.

### Proposed Business Model | نموذج العمل المقترح

The concept documentation proposes commissions on equipment sales, featured merchant listings, and partnerships with doctors or clinics. These are ideas only; the current demo has no payment system, merchant accounts, or live marketplace.

---

## 9. Student Worksheet | ورقة عمل الطالب

### Project Information | معلومات المشروع

**Project Title**: Vivestand  
**Project Type**: Static web front-end demo  
**Date**: 2026  
**Developer credited in the project documentation**: Logien Mohamed Elsaid

#### What is the project about? | عن ماذا يتحدث المشروع

Vivestand is a website that helps athletes explore sports injuries, recovery and prevention guidance, doctors, sample training and nutrition content, and sports equipment.

#### What problem does it solve? | ما المشكلة التي يحلها

It brings introductory injury, recovery, training, doctor, and equipment information together so athletes have an organized place to begin exploring their options.

### Tech Stack | التقنيات المستخدمة

| Category | Technology |
|----------|-----------|
| Languages | HTML5, CSS3, JavaScript |
| Framework | None |
| Database | None |
| Browser storage | `localStorage` for the demonstration cart |
| External resource | Delius font from Google Fonts |

### Screens | شاشات المشروع

| Screen Name | What the user sees/does | How to get here |
|-------------|-------------------------|-----------------|
| Home | Chooses an injury topic or navigates the site | Open the site root |
| Injuries | Reads symptoms, recovery plans, and prevention tips | Select an injury from Home |
| Doctors | Browses doctor details, filters specialties, and tries the demo chat | Use the site navigation |
| Online session | Follows the sample consultation and booking steps | Choose a doctor consultation |
| Pave Your Well | Reads sample nutrition, exercise, and training content | Use the site navigation |
| Recovery | Reads return-to-training guidance | Use the site navigation |
| Equipment and Cart | Browses gear, adds items, and tries a sample order | Choose Equipment, then Cart |

### Features | الميزات

| Feature | What it does | Status |
|---------|-------------|:------:|
| Injury information | Shows sample injury and recovery guidance | Demo complete |
| Doctor directory and chat | Shows doctor content and canned chat replies | Demo complete |
| Online-session flow | Demonstrates a timer, pricing, and booking form | Demo only |
| Training and nutrition | Shows sample informational content | Demo complete |
| Equipment cart | Stores selected items in browser local storage | Demo only; no checkout |
| Real accounts, consultations, and payments | Requires backend services not included in this project | Not implemented |

### My Data | بيانات المشروع

**Where does data come from?**  
The current pages use content and sample records stored in project HTML and JavaScript files. Users can enter text into forms, and cart data is saved in their browser.

**What data is stored?**  
The demo stores only the equipment cart in local storage. Login, signup, contact, booking, and order form submissions are not sent to a server or retained as real service records.

### What I Learned | ما تعلمته

1. The project practices connecting multiple pages with relative links and URL parameters.
2. The injury guide and the equipment browsing flow are examples of organizing content for athletes.
3. Future improvements could include a secure backend, real user accounts, medically reviewed content, and real booking and payment services.
4. A useful next step is to test all pages on mobile and document those results.

### Screenshot of the Project | لقطة شاشة من المشروع

<!-- Add current screenshots of the running site here. -->

---

**Instructor Notes** | ملاحظات المدرس:

Vivestand is a static front-end demonstration built with HTML, CSS, and JavaScript. It presents sports injury and recovery information alongside doctor, training, nutrition, and equipment pages. It has no backend, database, real authentication, medical consultation, or payment processing.

---

**Project repository / demo**: https://logy-ss.github.io/Vivestand/

<div class="session-footer">
  <p>Techno Kids, Techno Future — Software Documentation Template</p>
  <p>Afro-Asian Tech Forum · Software Category · 2026</p>
</div>