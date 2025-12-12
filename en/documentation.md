---
layout: default
title: Documentation  # [변경] 영어 제목 (이게 중요합니다! 자식들이 이 이름을 참조함)
nav_order: 3
has_children: true        
permalink: /en/docs/   # [변경] 주소 겹치지 않게
lang: en              # [추가] 언어 설정
nav_exclude: true
---

# Documentation

Welcome! This is the official technical documentation page for **FoundByMe**.
Here, we cover all technical details of the project, from installation to advanced usage and architecture design principles.

## 📚 Table of Contents

This documentation is organized as follows:

* **[Getting Started]({{ '/en/docs/getting-started/' | relative_url }})**: Installation and execution guide using Docker.
* **[Features]({{ '/en/docs/features/' | relative_url }})**: Introduction to core technologies like txtai-based semantic search and hybrid architecture.
* **[Usage]({{ '/en/docs/usage/' | relative_url }})**: How to use the Web Interface and search tips.
* **[Examples]({{ '/en/docs/example/' | relative_url }})**: Real-world search scenarios and API usage examples.

---

## 🛠️ Tech Stack Summary

FoundByMe is designed by combining the best open-source technologies.

| Category | Tech Stack | Description |
| :--- | :--- | :--- |
| **Frontend** | Node.js (React) | User-friendly Web Interface |
| **Backend** | Python (FastAPI) | REST API Server and Business Logic |
| **Search Engine** | **txtai** | Semantic Vector Search & Embedding Engine |
| **Metadata DB** | **PostgreSQL** | File Information & Log Management (RDBMS) |
| **Infra** | Docker Compose | Container-based Deployment Automation |

For a more detailed architecture description, please refer to the [Features]({{ '/en/docs/features/' | relative_url }}) page.