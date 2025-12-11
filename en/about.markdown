---
layout: page
title: About
permalink: /en/about/  
lang: en
nav_order: 2
nav_exclude: true
---

# About FoundByMe

**FoundByMe** is an **open-source semantic search engine** designed to efficiently manage and retrieve personal local study materials.

Going beyond simple keyword matching, it utilizes **RAG (Retrieval-Augmented Generation)** technology to understand context, allowing users to easily find scattered knowledge—such as lecture notes, PDFs, and code snippets—using natural language.

### 📅 Project History
* **Duration:** 2025.10 ~ 2025.12
* **Goal:** Development of a local RAG search tool to maximize learning efficiency.
* **Team:** Sejong University, Dept. of Data Science, Open Source SW Course Team.

---

## 🏗️ Open Source Contribution Strategy

FoundByMe leverages the innovative open-source technology **txtai** to propose a **'Local-First Knowledge App'** ecosystem that is easily accessible to general users, not just developers.

### 1. txtai: From Library to Application (Service-fication)
* **Target Repo:** [neuml/txtai](https://github.com/neuml/txtai)
* **Contribution Point:** **"User-Friendly Local Service Implementation"**
* **Details:** While `txtai` is an excellent library, it has primarily been used as a tool for Python developers. We utilized it as the backend core and combined it with a **Node.js-based user-friendly GUI**, creating a new Use Case: **"A complete local search tool for students,"** and shared it with the open-source community.

### 2. Hybrid Storage Architecture (vs paperai)
* **Target Repo:** [neuml/paperai](https://github.com/neuml/paperai)
* **Contribution Point:** **"Hybrid Storage Pattern (SQLite → PostgreSQL)"**
* **Details:**
    * **Problem:** Existing `txtai` use cases (like `paperai`) relied on built-in SQLite, which had limitations in file management and expanding complex conditional searches (date, type, etc.).
    * **Solution:** We implemented a **Hybrid Architecture** where vector search is delegated to `txtai`, and file metadata management is handled by **PostgreSQL**.
    * **Impact:** This presents a best-practice architecture that simultaneously secures **data integrity** and **search flexibility** when managing large volumes of local files.

---

## 💡 Why FoundByMe? (Innovation & Difference)

FoundByMe overcomes the **'qualitative limitations of search'** in existing commercial software and lowers the **'barriers to entry'** of heavy open-source AI tools.

### 1. vs Traditional PDF Viewers (e.g., PDF-XChange)
> **Reference:** [PDF-XChange Editor](https://www.tracker-software.com/product/pdf-xchange-editor), [Adobe Acrobat Reader](https://www.adobe.com/acrobat/pdf-reader.html)

* **The Limitation:** Search functions in existing viewers are limited to simple **keyword matching (Ctrl+F)**. If the exact word is not remembered, relevant content within the document cannot be found.
* **Our Solution:** FoundByMe searches for **'Context'**. It provides **Next-Gen Semantic Search** that understands the user's intent and finds documents with similar meanings, even if the keywords differ.

### 2. vs Cloud AI Services (e.g., ChatPDF)
> **Reference:** [ChatPDF](https://www.chatpdf.com/), [AskYourPDF](https://askyourpdf.com/)

* **The Limitation:** Most AI document tools require uploading files to a server, posing **Privacy Risks** and requiring internet connectivity and subscription fees.
* **Our Solution:** A **"100% Local On-Premise"** architecture utilizing **txtai** and **Docker**. Data never leaves the user's PC, ensuring perfect security, and it can be used for free in offline environments.

### 3. vs Heavy Local LLMs (e.g., PrivateGPT)
> **Reference:** [zylon-ai/private-gpt (GitHub)](https://github.com/zylon-ai/private-gpt), [LocalAI](https://github.com/mudler/LocalAI)

* **The Limitation:** Existing local RAG services (like PrivateGPT) require running heavy LLMs (Large Language Models), making **high-spec GPUs essential** and resulting in slow speeds.
* **Our Solution:** We adopted a **lightweight model focused on 'Search'** rather than Generation (Chat). By removing the dependency on heavy LLMs, we implemented an **entry-level AI search engine** that runs smoothly on standard student laptops.

### 4. vs Open Source DMS (e.g., Paperless-ngx)
> **Reference:** [paperless-ngx/paperless-ngx (GitHub)](https://github.com/paperless-ngx/paperless-ngx)

* **The Limitation:** Existing Document Management Systems rely on OCR and text matching, making it difficult to find files without knowing the exact words.
* **Our Solution:** FoundByMe introduces a **txtai-based semantic engine**, providing an **"Intelligent Document Search"** experience that understands context beyond simple storage.

---

## 🎨 Custom Theme Development Report

This website uses a **custom Jekyll theme designed and re-engineered** to reflect the identity of the FoundByMe project. Rather than simply applying an existing theme, we completely overhauled the structure and design to enhance originality and usability.

### 1. Theme Ejection & Restructuring
* We removed the dependency on `remote_theme` and migrated the source code (`_layouts`, `_includes`, `_sass`, `assets`) of `Just the Docs` to the local environment to build an **independent theme structure capable of direct modification**.
* Optimized unnecessary external dependencies in `_config.yml` and `Gemfile`, and reconfigured settings for the local development environment.

### 2. Advanced Typography
* **Font Change:** Applied the Google Font **'Inter'**, which offers excellent readability and a modern feel, to reinforce the impression of professional technical documentation.
* **Applied Files:** `_includes/head.html` (CDN link added), `_sass/support/_variables.scss` (SCSS variable redefinition).

### 3. Establishing Brand Identity (Color System)
* **Color Change:** Completely revised the default theme color (Purple) to **Crimson Red (#c3002f)**, the school's symbolic color, and **Slate Grey (#51626f)** to unify the project's brand identity.
* **Applied Files:** `_sass/support/_variables.scss` (Main theme color and link color variable modification).

### 4. Layout Customization
* **Top Banner:** Directly modified the `_layouts/default.html` skeleton code to establish a **top banner area** capable of delivering important messages site-wide.
* **Expanded Footer:** Removed the simple default footer and directly coded/applied a **custom footer component (`_includes/custom_footer.html`)** containing school information, team contacts, and GitHub links.

### 5. UX/UI Innovation
* **Dynamic Landing Page:** Moved away from the static text-based landing page and implemented a **custom SVG animation** (`hero_animation.svg`) visualizing **data connectivity** on the main screen (`index.md`). Applied a center-aligned layout and brand color gradients to maximize immersion.
* **Card UI:** Applied a **Card Design** based on `Grid` layout to the features and community pages instead of plain text lists to improve information delivery and aesthetics. *(Inspired by Django Community design)*.

### 6. Detail & UX Enhancement
* **Modularization (JS):** Separated the logic for the 'Back to Top' function into a separate file (`assets/js/backtotop.js`) to improve maintainability and code reusability.
* **Favicon:** Applied a magnifying glass (🔍) icon to reveal the service's identity (Search) even in browser tabs. (`_includes/head.html`)
* **Search Bar Design:** Added rounded corners and brand color focus effects to the search bar to emphasize the project's core feature, 'Search'. (`_sass/custom/custom.scss`)
* **Custom 404 Page:** Created a custom 404 page featuring user-friendly guidance text and a 'Return Home' button instead of a simple error message. (`404.html`)

### 7. Header Redesign
* **Top Bar Style:** Boldly changed the plain white header to a **Crimson Red** background to create a strong first impression and maximize brand identity.
* **Search & Icon Optimization:** Changed the search bar within the header to a **translucent white style** to match the red background, and unified logo and icon colors to white to ensure both readability and aesthetics.

---

### 📬 Contact & Contribute

FoundByMe welcomes your contributions.
Check out the code or open an issue on our GitHub repository.

* **GitHub:** [https://github.com/KNaeon/foundbyme](https://github.com/KNaeon/foundbyme)
* **Team:** Sejong University, Dept. of Data Science, Open Source SW Course Team