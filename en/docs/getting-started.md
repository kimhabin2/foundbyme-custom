---
layout: default
title: Getting Started
nav_order: 1
parent: Documentation
permalink: /en/docs/getting-started/
lang: en
nav_exclude: true
---

# Getting Started

This guide briefly explains installation, execution, and the overall structure for first-time users of FoundByMe.
FoundByMe is based on **Docker Compose** for easy execution, automatically configuring PostgreSQL, txtai, and FastAPI.

**Database Setup Guide**
FoundByMe uses **PostgreSQL** (metadata) and **txtai** (vector index).
Docker Compose automatically builds all these environments, so no separate installation is required.
{: .callout-note }


## 1. Prerequisites

Before starting the installation, the following tools must be installed:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac)
* Git

## 2. Installation and Execution

Clone the GitHub repository and run Docker Compose to get everything ready.

```bash
# 1. Clone repository
git clone [https://github.com/KNaeon/foundbyme.git](https://github.com/KNaeon/foundbyme.git)
cd foundbyme

# 2. Run containers (Background mode)
docker-compose up -d
```

** Note on First Execution The initial run may take 1–3 minutes for model (txtai embeddings) download and PostgreSQL initialization. 
{: .callout-note }

## 3. Accessing
Once installation is complete, you can access FoundByMe at the address below.

<div style="margin: 20px 0;">
  <a href="http://localhost:3000" target="_blank" class="btn btn-primary" style="text-decoration: none; padding: 10px 20px; font-weight: bold;">
    🚀 Launch FoundByMe (http://localhost:3000)
  </a>
</div>

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **Backend API:** [http://localhost:8000/docs](http://localhost:8000/docs) (Swagger UI)

---

## 4. Architecture Overview

The figure below shows how the entire FoundByMe components are connected.

<img src="{{ '/assets/images/architecture.png' | relative_url }}" alt="FoundByMe Architecture Diagram" style="max-width: 100%; height: auto; display: block; margin: 30px auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

# Core Components Summary
## 🔍 Search Process Flow

- User sends a search request -> Processed by FastAPI

- ChromaDB performs similarity-based search using kNN

- PostgreSQL stores document content/logs/metadata

- Results returned to Frontend in JSON format

## 🧱 Separate Indexing Pipeline
- Loader.py → Text Extraction (.txt/.md/.pdf/.pptx, etc.)

- Indexer: Splits data into Chunks for processing

- Vector Index: txtai

- Storage: Original Documents/Metadata -> PostgreSQL

## 5. Security Warnings**
Even when running locally, be careful not to expose .env, API keys, or DB connection information externally. 
{: .callout-warning }

Since the process involves file chunking and vectorization, it may take time if there are many large files. 
{: .callout-warning }