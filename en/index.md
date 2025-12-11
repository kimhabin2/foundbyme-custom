---
layout: default
title: Home
nav_order: 1
description: "FoundByMe - Context-Based Local Document Search System"
permalink: /en/
lang: en
nav_exclude: true
---

<div class="showcase-hero" style="flex-direction: column; text-align: center; padding: 120px 20px 150px; min-height: 110vh; background: radial-gradient(circle at 50% 30%, #c3002f 0%, #a30027 40%, #3d000b 90%); position: relative; overflow: visible;">
  
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(white 1px, transparent 1px); background-size: 50px 50px; opacity: 0.1; pointer-events: none;"></div>

  <div style="z-index: 2; margin-bottom: 60px; max-width: 900px; position: relative;">
    <h1 class="animate-text delay-1" style="font-size: 4.5rem; font-weight: 900; margin-bottom: 20px; color: white; letter-spacing: -1px; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
      FoundByMe
    </h1>
    <p class="animate-text delay-2" style="font-size: 1.8rem; color: rgba(255,255,255,0.95); margin-bottom: 40px; line-height: 1.5; font-weight: 500;">
      Connect scattered knowledge on your PC.<br>
      Next-Gen RAG Search Engine.
    </p>
    
    <div class="animate-text delay-3">
      <a href="{{ '/docs/getting-started/' | relative_url }}" class="btn-showcase" style="padding: 18px 50px; font-size: 1.3rem; border-radius: 100px; background-color: white; color: #c3002f; border: none; box-shadow: 0 5px 20px rgba(0,0,0,0.2);">
        🚀 Start Journey
      </a>
    </div>
  </div>

  <div class="animate-text delay-2" style="width: 100%; max-width: 1200px; height: 600px; opacity: 1; z-index: 1;">
    {% include hero_animation.svg %}
  </div>

</div>

<div style="margin-top: 80px; margin-bottom: 40px; text-align: center;">
  <h2 style="color: #3d4a54; font-weight: 700;">🚀 Why Use FoundByMe?</h2>
</div>

<div class="feature-grid">
  <div class="feature-card">
    <h3>⚡ Fast Indexing</h3>
    <p>Real-time indexing for local files.<br>From PDFs to images and code.</p>
  </div>
  <div class="feature-card">
    <h3>🔒 Private & Secure</h3>
    <p>No data leaves your device.<br>100% local processing.</p>
  </div>
  <div class="feature-card">
    <h3>🧠 Context Aware</h3>
    <p>Beyond keyword matching.<br>Understand context and generate answers.</p>
  </div>
  <div class="feature-card">
    <h3>👀 Vector Visualization</h3>
    <p>Visually explore relationships<br>between documents and results.</p>
  </div>
</div>

<hr style="margin: 60px 0;">

<h2 style="text-align: center; margin-bottom: 30px; color: #3d4a54;">Feature Comparison</h2>

| Feature | PDF Viewer (Adobe) | AI Chatbot (Cloud) | **FoundByMe** |
| :--- | :---: | :---: | :---: |
| **Local Execution (Secure)** | O | X | **O** |
| **Semantic Search** | X | O | **O** |
| **Multi-file Search** | △ | △ | **O** |
| **Vector Visualization** | X | X | **O** |
| **Multi-format Support** | X | △ | **O** |
| **Open Source (Free)** | △ | X | **O** |
{: .table .table-striped }

<br>

# Project Introduction
**FoundByMe** is an open-source tool designed to help you quickly search and utilize scattered local learning materials—such as lecture notes, PDFs, code files, and assignments.

It is designed to instantly locate necessary materials for individual study sessions or team projects.

## 🚀 One-Line Installation
Get started immediately with **Docker**—no complex setup required.

```bash
git clone [https://github.com/KNaeon/foundbyme.git](https://github.com/KNaeon/foundbyme.git)
cd foundbyme
docker-compose up -d
```

## 🎯 Background & Objectives
- **Time Saving:** Drastically reduce the time spent searching for specific content across numerous files during exam periods.
- **Context Search:** Find materials based on meaning (context) even if you don't recall the exact filename or keywords.
- **Focus:** Maintain concentration by eliminating the distraction of manually opening files one by one.

## 🔍 Core Features
### 1) Local File Indexing
Automatically scans folders to organize metadata for documents, images, and code.

### 2) RAG-based Search
Ask questions in natural language, and the system finds and summarizes the most relevant content for you.

### 3) Vector Visualization (Embedding Visualization)
Visualizes relationships between embedded data points in a 3D graph.

---

## 🧩 Project Components
- Local Search System / User Manual / Example Pages / API Documentation provided
- **RAG API Backend Implementation:**
  - `sentence-transformers` based embedding
  - Endpoints for document summarization and search

---

## 💡 Key Highlights

* **🔒 Secure:** Runs safely offline without an internet connection.
* **🧠 Smart:** Provides **Semantic Search** that understands context, rather than just simple word matching.
* **📂 Universal:** Search across PDFs, PPTs, and Word files all at once.
* **📊 Visual:** Visually verify relationships between search results and documents.

---

## 🔗 Links

- 📘 Documentation: https://foundbyme.readthedocs.io/en/latest/index.html

- 💻 GitHub Repository: https://github.com/KNaeon/foundbyme

<div style="text-align: center; margin-top: 40px;"> <a href="https://github.com/KNaeon/foundbyme" class="btn btn-outline" style="border: 2px solid #c3002f; color: #c3002f; font-weight: bold; padding: 15px 30px; border-radius: 50px; text-decoration: none;"> View on GitHub </a> </div>

