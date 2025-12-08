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
    <p>원리를 파악하기 쉽습니다.<br>흥미로운 관찰!</p>
  </div>
</div>

<hr style="margin: 60px 0;">
| 기능 | PDF-X change(viewer) | AI 챗봇 서비스 | **FoundByMe** |
| :--- | :---: | :---: | :---: |
| **로컬 완전 실행 (보안)** | O | X | **O** |
| **의미(맥락) 기반 검색** | X | O | **O** |
| **여러 파일 통합 검색** | △ | O(업로드 필요) | **O** |
| **벡터 시각화 (원리 파악)** | X | X | **O** |
| **멀티 포맷 지원** | X | △ | **O** |
| **완전 오픈소스** | X | X | **O** |

# Project Introduction
로컬에 흩어져 있는 강의 자료, PDF, 코드 파일, 과제 문서 등을 빠르게 검색하고 학습에 활용할 수 있도록 돕는 프로젝트입니다.  

개인 작업 환경에서도, 스터디나 팀 프로젝트에서도 필요한 자료를 즉시 찾을 수 있도록 설계되었습니다.

## 제작 배경
- **시험 기간 시간 절약:** 여러 형태의 문서 파일을 매번 열어서 찾는데 시간이 많이 소요
- **반복 탐색:** 자료가 여러 파일로 흩어져 있어 같은 용어가 어디에 있었는지 기억나지 않아 반복 탐색하게 됨.
- **공부 집중력 감소:** 파일을 하나씩 열어보면서 흐름이 끊기고, 정신이 산만해져 집중력이 떨어짐.
- **맥락 이해 불가:** 키워드 검색은 의미(맥락)을 이해하지 못해 정확한 내용을 못 찾는 문제가 발생

## 🚀 목적
- 검색 시간을 줄이고, 학습 효율을 높이기 위한 개인용 로컬 지식 검색 도구  
- 자료 이름을 정확히 기억하지 않아도, 자연어 기반으로 필요한 자료를 찾아주는 시스템  
- 텍스트뿐 아니라 PDF, 이미지, 코드 등 다양한 파일까지 찾을 수 있는 통합 검색

---

## 🔍 주요 기능
### 1) 로컬 파일 인덱싱  
폴더 전체를 스캔해 문서·이미지·코드 등의 메타데이터를 자동으로 정리합니다.

### 2) RAG 기반 검색  
- 프로젝트에서 구현 중인 API와 연동하여 자연어로 질문하면  
- 로컬 파일 중 가장 관련 있는 내용을 찾고 요약하거나 문맥 기반으로 정리해 제공합니다.

### 3) 벡터 시각화(Embedding Visualization)

## 🧩 프로젝트 구성 요소
- 로컬 검색 시스템 / 사용 설명서 / 예제 페이지 / API 문서 제공
- 백엔드용 RAG API 구현 
  → sentence-transformers 기반 embedding  
  → 문서 요약/검색 엔드포인트 제공

---

## 💡 Key Highlights

* **🔒 Secure:** 인터넷 연결 없이 로컬에서 안전하게 작동합니다.
* **🧠 Smart:** 단순 단어 매칭이 아닌, 문맥을 이해하는 **Semantic Search**를 제공합니다.
* **📂 Universal:** PDF뿐만 아니라 PPT, Word 파일까지 한 번에 검색하세요.
* **📊 Visual:** 검색 결과와 문서 간의 관계를 시각적으로 확인하세요.

---

## 📁 빠른 시작

```bash
pip install -r requirements.txt
python indexer.py --path "C:/my-documents"
python search.py "딥러닝 표준화"
```

- 📘 Documentation: https://foundbyme.readthedocs.io/en/latest/index.html

- 💻 GitHub Repository: https://github.com/KNaeon/foundbyme

[View on GitHub](https://github.com/KNaeon/foundbyme){: .btn .btn-outline-primary .fs-5 .mb-4 .mb-md-0 }

