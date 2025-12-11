---
layout: default
title: Features
nav_order: 2
parent: Documentation
permalink: /en/docs/features/
lang: en
---

# Feature Showcase

FoundByMe combines the powerful embedding technology of **txtai** with the flexibility of **Node.js** to provide an optimal search experience.

<div class="feature-grid">
  <div class="feature-card">
    <h3>🔍 Semantic Indexing (txtai)</h3>
    <p>We index by context rather than storing entire documents. It enables meaning-based search instead of simple keyword matching, so it understands what you mean even if your query is vague.</p>
  </div>
  <div class="feature-card">
    <h3>📊 Hybrid Architecture</h3>
    <p>We combine <strong>txtai (Vector)</strong> and <strong>PostgreSQL (Metadata)</strong>. It's an enterprise-grade structure that guarantees both the flexibility of vector search and the integrity of a relational DB.</p>
  </div>
  <div class="feature-card">
    <h3>🐳 Dockerized Service</h3>
    <p>Without complex AI environment setups, you can instantly run Frontend, Backend, and DB with a single command: <code>docker-compose up</code>.</p>
  </div>
  <div class="feature-card">
    <h3>📉 3D Visualization</h3>
    <p>Embedded document vectors are dimensionally reduced (PCA) and visualized in 3D space. Visually verify how your knowledge clusters are formed.</p>
  </div>
</div>

---

## 🧩 Core Technologies

### 1. txtai-based Semantic Search
Traditional keyword search (Ctrl+F) only finds exact matches.
FoundByMe uses `txtai` with embedded **Sentence-Transformers** models to convert sentence meanings into vectors.
* **Example:** Asking *"When is the assignment due?"* -> Finds documents containing *"Deadline: December 15th"*

### 2. Hybrid Storage Strategy
We dualize storage to efficiently manage large volumes of files.
* **Vector Index (txtai):** Stores document content (Semantic) for fast similarity search.
* **Relational DB (PostgreSQL):** Stores structured data like file paths, extensions, and modification dates for precise filtering.

### 3. Reactive Web Interface (Node.js)
For users unfamiliar with CLI (Terminal) environments, we provide an intuitive Web UI.
* **Dark Mode Support:** Reduces eye strain during night study sessions.
* **Preview:** Summarize and view key contents without opening the file.
* **Multi-format Support:** Analyzes not only PDF, Markdown, and text files but also source codes (Python, JS, etc.).

---

## 🛠 Technical Deep Dive

### 1. Hybrid Storage Strategy
We use a hybrid strategy combining **PostgreSQL** and **ChromaDB**.
- **ChromaDB (Vector Store):** Stores text meaning (Vector) to perform high-speed similarity search.
- **PostgreSQL (RDBMS):** Stores file metadata (paths, dates, etc.) to ensure data integrity.
- *Why?* We configured RDBMS together to achieve 'precise filtering' and 'file management' which are hard to implement with just a Vector DB.

### 2. Core Features (Top 4)
#### ① Universal Indexing
- Supports `.txt`, `.pdf`, `.docx`, `.pptx` as well as **Images**.
- Text in images is extracted via `pytesseract` (OCR), and long documents are split into meaningful units (Chunks).

#### ② Semantic Search & Embedding (Multi-language)
- **Model:** Equipped with `Multilingual-MiniLM-L12-v2`.
- **Capability:** Supports **over 50 languages** including Korean and English, accurately grasping context even in mixed-language documents.
- **Process:** Converts user natural language queries into high-dimensional vectors to find documents with matching meaning, even if keywords don't match.

#### ③ High-Precision Re-Ranking
- First-pass search results are re-scored using a **CrossEncoder (BAAI/bge-reranker-v2-m3)** model.
- This dramatically improves search accuracy.

#### ④ 3D Galaxy Visualization
- Visualizes high-dimensional vectors reduced to 3D via **PCA (Principal Component Analysis)**.
- Your query is displayed as a <span style="color: gold">**Yellow Dot**</span>, intuitively showing its location within the knowledge space.

### 3. API Specification
Major endpoints implemented with FastAPI are as follows:

| Method | Endpoint | Description |
|:---:|:---|:---|
| `POST` | **/upload** | File upload and automatic indexing (includes OCR) |
| `POST` | **/search** | Vector search + Re-ranking + Return PCA coordinates |
| `POST` | **/chat** | RAG-based answer generation |
| `GET` | **/galaxy** | Return embedding 3D visualization data |
| `DELETE` | **/session** | Initialize session |