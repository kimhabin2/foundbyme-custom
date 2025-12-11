---
layout: default
title: Examples
nav_order: 3
parent: Documentation
permalink: /en/docs/example/
lang: en
nav_exclude: true
---

# Examples & Use Cases

Here are specific usage examples and scenarios to get 200% out of FoundByMe.
All features are easily accessible via the **Web Interface (Web UI)**.

---

## 🔍 Scenario 1: Finding Materials While Studying (Natural Language Search)

When you simply can't remember the filename, search by **Context**.

* **Situation:** *"Where is the PDF that explains how to solve Deep Learning Overfitting?"*
* **Query:** `How to prevent overfitting?` or `overfitting solution`
* **Result:** Even if the word 'Overfitting' is not in the title, it finds `Deep_Learning_Week05.pdf` which contains terms like **'Dropout', 'Regularization'**.

> **💡 Tip:** If you search with sentences as if asking a question, txtai grasps the meaning and shows more accurate results.

---

## 💻 Scenario 2: Code Search During Development (Code Search)

Useful when finding specific logic within countless project folders.

* **Situation:** *"I need that Python crawling code I wrote last year..."*
* **Filter Setting:** Select File Format `Code (.py, .js)`
* **Query:** `beautifulsoup crawling example`
* **Result:** Finds files containing relevant code like `project_v1/utils.py` and previews the code block.

---

## 🔌 Scenario 3: API Integration (Developer)

If you want to integrate FoundByMe's search engine into other services or scripts, use the **REST API**.

### Requesting Search via Python

```python
import requests

url = "http://localhost:8000/api/search"
payload = {
    "query": "Database Design Patterns",
    "limit": 5
}

response = requests.post(url, json=payload)
print(response.json())
```

## Result Example (JSON)
```json
[
  {
    "id": "file_123",
    "score": 0.89,
    "text": "Explanation of database normalization process...",
    "metadata": {
      "filename": "DB_Design.docx",
      "path": "/data/docs/DB_Design.docx"
    }
  }
]
``` 

## 📊 Scenario 4: Knowledge Visualization (Vector Visualization)
* Visually check how documents on your PC are connected to each other.

* Click the 'Visualization' tab at the top of the Web UI.

* Documents are displayed as dots in a 2D/3D graph.

* You can draw a map of your knowledge by checking Clusters where documents of similar topics (e.g., 'Machine Learning', 'Statistics') are grouped closely together.