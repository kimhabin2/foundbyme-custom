---
layout: default
title: Features
nav_order: 2
parent: Documentation
permalink: /docs/features/
lang: en
---

# Feature Showcase

FoundByMe는 **txtai**의 강력한 임베딩 기술과 **Node.js**의 유연함을 결합하여 최적의 검색 경험을 제공합니다.

<div class="feature-grid">
  <div class="feature-card">
    <h3>🔍 Semantic Indexing (txtai)</h3>
    <p>문서를 통째로 저장하지 않고 문맥(Context) 단위로 인덱싱합니다. 단순 키워드 매칭이 아닌 의미 기반 검색을 통해, 사용자가 개떡같이 말해도 찰떡같이 알아듣습니다.</p>
  </div>
  <div class="feature-card">
    <h3>📊 Hybrid Architecture</h3>
    <p><strong>txtai(벡터)</strong>와 <strong>PostgreSQL(메타데이터)</strong>을 결합했습니다. 벡터 검색의 유연함과 관계형 DB의 무결성을 동시에 보장하는 엔터프라이즈급 구조입니다.</p>
  </div>
  <div class="feature-card">
    <h3>🐳 Dockerized Service</h3>
    <p>복잡한 AI 환경 설정 없이, <code>docker-compose up</code> 명령어 한 줄로 프론트엔드, 백엔드, DB를 즉시 실행할 수 있습니다.</p>
  </div>
  <div class="feature-card">
    <h3>📉 3D Visualization</h3>
    <p>임베딩된 문서 벡터들을 차원 축소(PCA)하여 3차원 공간에 시각화합니다. 내 지식들이 어떻게 군집을 이루고 있는지 눈으로 확인하세요.</p>
  </div>
</div>

---

## 🧩 핵심 기술 상세 (Core Technologies)

### 1. txtai 기반 시맨틱 검색
기존의 키워드 검색(Ctrl+F)은 단어가 정확히 일치해야만 찾을 수 있었습니다.
FoundByMe는 **Sentence-Transformers** 모델을 내장한 `txtai`를 사용하여, 문장의 의미를 벡터로 변환합니다.
* **Example:** *"과제 제출일이 언제지?"* 라고 물으면 -> *"12월 15일 마감"* 이 포함된 문서를 찾아냅니다.

### 2. 하이브리드 저장소 전략 (Hybrid Storage)
대량의 파일을 효율적으로 관리하기 위해 저장소를 이원화했습니다.
* **Vector Index (txtai):** 문서의 내용(Semantic)을 저장하여 빠른 유사도 검색을 담당합니다.
* **Relational DB (PostgreSQL):** 파일 경로, 확장자, 수정 날짜 등 정형 데이터를 저장하여 정교한 필터링을 담당합니다.

### 3. 반응형 웹 인터페이스 (Node.js)
CLI(터미널) 환경이 익숙하지 않은 사용자를 위해, 직관적인 웹 UI를 제공합니다.
* **다크 모드 지원:** 야간 학습 시 눈의 피로를 줄여줍니다.
* **미리보기:** 파일을 열지 않고도 핵심 내용을 요약해서 볼 수 있습니다.
* **멀티 포맷 지원:** PDF, Markdown, 텍스트 파일뿐만 아니라 소스 코드(Python, JS 등)까지 분석합니다.

---
(기존 상단 내용 유지)

## 🛠 Technical Deep Dive (기술 상세)

### 1. Hybrid Storage Strategy
우리는 **PostgreSQL**과 **ChromaDB**를 결합한 하이브리드 전략을 사용합니다.
- **ChromaDB (Vector Store):** 텍스트의 의미(Vector)를 저장하여 고속 유사도 검색을 수행합니다.
- **PostgreSQL (RDBMS):** 파일 메타데이터(경로, 날짜 등)를 저장하여 데이터 무결성을 보장합니다.
- *Why?* 단순 벡터 DB만으로는 구현하기 힘든 '정교한 필터링'과 '파일 관리'를 위해 RDBMS를 함께 구성했습니다.

### 2. Core Features (핵심 기능 4선)
#### ① Universal Indexing (만능 인덱싱)
- `.txt`, `.pdf`, `.docx`, `.pptx`는 물론 **이미지**까지 지원합니다.
- 이미지 내 텍스트는 `pytesseract`(OCR)를 통해 추출하며, 긴 문서는 의미 단위(Chunk)로 쪼개어 처리합니다.

#### ② Semantic Search & Embedding
- `SentenceTransformers`를 사용하여 문장을 고차원 벡터로 변환합니다. 키워드가 달라도 의미가 같으면 찾아냅니다.

#### ③ High-Precision Re-Ranking (재정렬)
- 1차 검색된 문서들을 **CrossEncoder (BAAI/bge-reranker-v2-m3)** 모델로 다시 채점합니다.
- 이를 통해 검색 정확도를 획기적으로 높였습니다.

#### ④ 3D Galaxy Visualization
- **PCA(주성분 분석)**를 통해 고차원 벡터를 3차원으로 축소하여 시각화합니다.
- 내 질문(Query)은 <span style="color: gold">**노란색 점**</span>으로 표시되어, 지식 공간 내 위치를 직관적으로 보여줍니다.

### 3. API Specification
FastAPI로 구현된 주요 엔드포인트는 다음과 같습니다.

| Method | Endpoint | 설명 |
|:---:|:---|:---|
| `POST` | **/upload** | 파일 업로드 및 자동 인덱싱 (OCR 포함) |
| `POST` | **/search** | 벡터 검색 + 리랭킹 + PCA 좌표 반환 |
| `POST` | **/chat** | RAG 기반 답변 생성 |
| `GET` | **/galaxy** | 임베딩 3D 시각화 데이터 반환 |
| `DELETE` | **/session** | 세션 초기화 |