---
layout: default
title: Examples
nav_order: 3
parent: Documentation
permalink: /docs/example/
---

# Examples & Use Cases

FoundByMe를 200% 활용하는 구체적인 사용 예시와 시나리오를 소개합니다.
모든 기능은 **웹 인터페이스(Web UI)**에서 간편하게 사용할 수 있습니다.

---

## 🔍 시나리오 1: 시험 공부 중 자료 찾기 (Natural Language Search)

단순히 파일명이 기억나지 않을 때, **문맥(Context)**으로 검색해보세요.

* **상황:** *"딥러닝 과적합(Overfitting) 해결 방법이 적힌 PDF가 어디 있더라?"*
* **검색어:** `How to prevent overfitting?` 또는 `과적합 해결 방법`
* **결과:** 제목에 '과적합'이라는 단어가 없더라도, 내용 중에 **'Dropout', 'Regularization'** 등이 포함된 `Deep_Learning_Week05.pdf` 파일을 찾아냅니다.

> **💡 Tip:** 질문하듯이 문장으로 검색하면 txtai가 의미를 파악하여 더 정확한 결과를 보여줍니다.

---

## 💻 시나리오 2: 개발 중 코드 검색 (Code Search)

수많은 프로젝트 폴더 속에서 특정 로직을 찾을 때 유용합니다.

* **상황:** *"작년에 짰던 파이썬 크롤링 코드가 필요한데..."*
* **필터 설정:** 파일 형식 `Code (.py, .js)` 선택
* **검색어:** `beautifulsoup crawling example`
* **결과:** `project_v1/utils.py` 등 관련 코드가 포함된 파일을 찾아내고, 해당 코드 블록을 미리 보여줍니다.

---

## 🔌 시나리오 3: API 연동 (Developer)

FoundByMe의 검색 엔진을 다른 서비스나 스크립트에 연동하고 싶다면 **REST API**를 사용하세요.

### Python으로 검색 요청하기

```python
import requests

url = "http://localhost:8000/api/search"
payload = {
    "query": "데이터베이스 설계 패턴",
    "limit": 5
}

response = requests.post(url, json=payload)
print(response.json())
```
### 결과 예시 (JSON)
```json
[
  {
    "id": "file_123",
    "score": 0.89,
    "text": "데이터베이스 정규화 과정에 대한 설명...",
    "metadata": {
      "filename": "DB_Design.docx",
      "path": "/data/docs/DB_Design.docx"
    }
  }
]
```

## 📊 시나리오 4: 지식 시각화 (Vector Visualization)
내 PC에 있는 문서들이 서로 어떻게 연결되어 있는지 눈으로 확인해보세요.

웹 UI 상단의 'Visualization' 탭을 클릭합니다.

2D/3D 그래프에서 문서들이 점으로 표시됩니다.

비슷한 주제(예: '머신러닝', '통계학')의 문서들이 서로 가깝게 뭉쳐있는 **클러스터(Cluster)**를 확인하여, 내 지식의 지도를 그려볼 수 있습니다.