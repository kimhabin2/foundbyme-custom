---
layout: default
title: Home
nav_order: 1
description: "FoundByMe - Context-Based Local Document Search System"
permalink: /
---

<div class="showcase-hero" style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 120px 20px 0px; min-height: 130vh; background: radial-gradient(circle at 50% 30%, #c3002f 0%, #a30027 40%, #3d000b 90%); position: relative; overflow: hidden;">
  
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(white 1px, transparent 1px); background-size: 50px 50px; opacity: 0.1; pointer-events: none;"></div>

  <div style="z-index: 2; margin-bottom: 60px; max-width: 900px; position: relative; text-align: center;">
    <h1 class="animate-text delay-1" style="font-size: 4.5rem; font-weight: 900; margin-bottom: 20px; color: white; letter-spacing: -1px; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
      FoundByMe
    </h1>
    <p class="animate-text delay-2" style="font-size: 1.8rem; color: rgba(255,255,255,0.95); margin-bottom: 40px; line-height: 1.5; font-weight: 500;">
      내 PC의 흩어진 지식을 하나로 연결하는<br>
      차세대 RAG 검색 엔진
    </p>
    
    <div class="animate-text delay-3">
      <a href="{{ '/docs/getting-started/' | relative_url }}" class="btn-showcase" style="padding: 18px 50px; font-size: 1.3rem; border-radius: 100px; background-color: white; color: #c3002f; border: none; box-shadow: 0 5px 20px rgba(0,0,0,0.2);">
        🚀 Start Journey
      </a>
    </div>
  </div>

  <div class="animate-text delay-2" style="width: 100%; max-width: 1200px; height: 600px; margin: 0 auto; opacity: 1; z-index: 1;">
    {% include hero_animation.svg %}
  </div>

</div>

<div style="margin-top: 80px; margin-bottom: 40px; text-align: center;">
  <h2 style="color: #3d4a54; font-weight: 700;">🚀 Why Use FoundByMe?</h2>
</div>

<div class="feature-grid">
  <div class="feature-card">
    <h3>⚡ Fast Indexing</h3>
    <p>PDF, 이미지, 코드까지.<br>로컬 파일을 실시간으로 인덱싱합니다.</p>
  </div>
  <div class="feature-card">
    <h3>🔒 Private & Secure</h3>
    <p>데이터가 외부로 전송되지 않습니다.<br>모든 처리는 당신의 PC에서.</p>
  </div>
  <div class="feature-card">
    <h3>🧠 Context Aware</h3>
    <p>단순 키워드 매칭이 아닙니다.<br>문맥을 이해하고 답변을 생성합니다.</p>
  </div>
  <div class="feature-card">
    <h3>👀 Vector Visualization</h3>
    <p>검색 결과와 문서 간의 관계를<br>시각적으로 확인하고 이해하세요.</p>
  </div>
</div>

<hr style="margin: 60px 0;">

<h2 style="text-align: center; margin-bottom: 30px; color: #3d4a54;">Feature Comparison</h2>

| 기능 | PDF 뷰어 (Adobe) | AI 챗봇 (Cloud) | **FoundByMe** |
| :--- | :---: | :---: | :---: |
| **로컬 완전 실행 (보안)** | O | X | **O** |
| **의미(맥락) 기반 검색** | X | O | **O** |
| **여러 파일 통합 검색** | △ | △ | **O** |
| **벡터 시각화 (원리 파악)** | X | X | **O** |
| **멀티 포맷 지원** | X | △ | **O** |
| **오픈소스 (무료)** | △ | X | **O** |
{: .table .table-striped }

<br>

# Project Introduction
로컬에 흩어져 있는 강의 자료, PDF, 코드 파일, 과제 문서 등을 빠르게 검색하고 학습에 활용할 수 있도록 돕는 프로젝트입니다.  

개인 작업 환경에서도, 스터디나 팀 프로젝트에서도 필요한 자료를 즉시 찾을 수 있도록 설계되었습니다.

## 🚀 One-Line Installation
복잡한 설정 없이 Docker로 바로 시작할 수 있습니다.
```bash
git clone [https://github.com/KNaeon/foundbyme.git](https://github.com/KNaeon/foundbyme.git)
cd foundbyme
docker-compose up -d
```

## 🎯 제작 배경 및 목적
- Time Saving: 시험 기간 중 수많은 자료 속에서 특정 내용을 찾는 시간을 절약합니다.

- Context Search: 파일명이나 정확한 키워드를 몰라도, 문맥(의미)만으로 자료를 찾아줍니다.

- Focus: 파일을 하나씩 열어보는 번거로움을 없애 공부 집중력을 유지시켜 줍니다.

## 🔍 주요 기능
### 1) 로컬 파일 인덱싱: 폴더 전체를 스캔해 문서·이미지·코드 등의 메타데이터를 자동으로 정리합니다.

### 2) RAG 기반 검색: 자연어로 질문하면 가장 관련 있는 내용을 찾아 요약해 줍니다.

### 3) 벡터 시각화(Embedding Visualization): 임베딩된 데이터들의 관계를 3차원 그래프로 시각화합니다.

---

## 🧰 Tech Stack
- **FastAPI**: API 서버
- **PostgreSQL**: 문서 목록 및 메타데이터 저장
- **ChromaDB**: 벡터 저장 & 의미 검색
- **SentenceTransformers**: 문장을 벡터로 변환
- **CrossEncoder**: 검색 결과 재정렬 (정확도 향상)
- **Docker Compose**: 모든 환경 통합 실행

---

## 💡 Key Highlights

* **🔒 Secure:** 인터넷 연결 없이 로컬에서 안전하게 작동합니다.
* **🧠 Smart:** 단순 단어 매칭이 아닌, 문맥을 이해하는 **Semantic Search**를 제공합니다.
* **📂 Universal:** PDF뿐만 아니라 PPT, Word 파일까지 한 번에 검색하세요.
* **📊 Visual:** 검색 결과와 문서 간의 관계를 시각적으로 확인하세요.

---

🔗 Links

- 📘 Documentation: <a href="https://foundbyme.readthedocs.io/en/latest/index.html" target="_blank">https://foundbyme.readthedocs.io/en/latest/index.html</a>

- 💻 GitHub Repository: <a href="https://github.com/KNaeon/foundbyme" target="_blank">https://github.com/KNaeon/foundbyme</a>

---

## 👥 Contributors 

| Name | Role | Responsibilities |
|:---:|:---:|:---|
| **강나언** | Project Leader, Dev | 텍스트 처리 파이프라인, 테스팅, 디버깅 |
| **김하빈** | Docs Lead, PPT | 사용자 문서화(Web, Docs), 발표 자료 및 가이드 제작 |
| **이진호** | Design Lead, Dev | UI/UX 디자인, 프론트엔드 개발 |

---

<div style="text-align: center; margin-top: 40px;"> <a href="https://github.com/KNaeon/foundbyme" class="btn btn-outline" style="border: 2px solid #c3002f; color: #c3002f; font-weight: bold; padding: 15px 30px; border-radius: 50px; text-decoration: none;"> View on GitHub </a> </div>

