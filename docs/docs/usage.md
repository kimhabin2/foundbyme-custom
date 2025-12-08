---
layout: default
title: Usage
nav_order: 2
parent: Documentation
permalink: /docs/usage/
---

# 사용법 (Usage)

FoundByMe의 상세 기능들과 실제 활용 방법을 설명합니다.

---

## 1️⃣ 기본 사용

### 로컬 폴더 인덱싱 및 서버 실행

인덱싱을 먼저 수행하여 데이터를 ChromaDB와 PostgreSQL에 적재해야 합니다.

```bash
# 데이터 인덱싱
python indexer.py --path "C:/my-documents"
```
# 검색 서버 실행 (FastAPI)
uvicorn app:app --reload
2️⃣ RAG API 사용하기
<div class="link-box"> <a href="http://localhost:8000/docs" target="_blank">Swagger API 문서 보기</a> </div>

FoundByMe RAG API는 문서의 내용을 세그먼트(Chunk) 단위로 검색하여 파일명, 페이지, 유사도 점수, 3D 벡터 좌표를 반환합니다. {: .callout-note }

Python 요청 예시

```Python
import requests

url = "http://localhost:8000/search"
params = {"q": "딥러닝 표준화"}
response = requests.get(url, params=params)

print(response.json())
```

API Response 예시 (JSON)
검색 결과는 쿼리의 3D 좌표(query_vector_3d)와 상위 5개의 문서 세그먼트 정보를 포함합니다.

```JSON
{
  "query": "딥러닝 표준화",
  "query_vector_3d": [0.12, -0.56, 0.89],
  "results": [
    {
      "id": "550e8400-e29b...",
      "filename": "deep_learning_standard.pdf",
      "ext": "pdf",
      "page": 15,
      "score": 0.4512,
      "vector_3d": [0.10, -0.54, 0.91]
    },
    {
      "id": "713f9511-a31c...",
      "filename": "lecture_note_03.pptx",
      "ext": "pptx",
      "page": 7,
      "score": 0.5123,
      "vector_3d": [0.33, -0.12, 0.45]
    }
  ]
}
```

- page: 해당 내용이 위치한 문서의 페이지 번호
- score: 질문과의 유사도 거리 (낮을수록 유사함, L2 Distance 등 설정에 따름)
- vector_3d: PCA로 축소된 3차원 좌표 (시각화용)

3️⃣ 검색 기능과 결과 활용
🔍 정밀 검색 (Segment Search)
단순히 파일을 찾아주는 것이 아니라, 파일 내부의 **특정 구간(Segment)**을 찾아줍니다.

Input: 자연어 질문 ("트랜스포머 모델의 어텐션 메커니즘 설명해줘")

Process: 질문을 벡터화(Embedding)하여 ChromaDB 내의 문서 청크와 비교

Output: 가장 가까운 벡터(Nearest Neighbor)의 스칼라 값과 메타데이터 반환

📄 결과 확인
검색 결과에는 다음 정보가 포함되어 있어 즉시 원문을 찾아갈 수 있습니다.

파일명 (Filename)

페이지 번호 (Page Number): PDF나 PPT의 경우 슬라이드 번호

문서 ID (Doc ID): 내부 관리용 고유 식별자

4️⃣ 고급 기능: 3D 벡터 시각화
API가 반환하는 query_vector_3d와 vector_3d 데이터를 활용하여 검색 결과를 3차원 공간에 시각화합니다.

사용자는 질문(점)과 문서(점) 사이의 거리를 눈으로 확인할 수 있습니다.

관련된 문서들이 군집(Cluster)을 이루는 형태를 관찰할 수 있습니다.
