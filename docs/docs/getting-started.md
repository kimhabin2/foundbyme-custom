---
layout: default
title: Getting Started
nav_order: 1
parent: Documentation
permalink: /docs/getting-started/
---

# Getting Started

FoundByMe를 처음 사용하는 사용자를 위해 설치, 실행, 그리고 전체 구조를 간단히 설명합니다.  
FoundByMe는 **Docker Compose** 기반으로 손쉽게 실행할 수 있으며, PostgreSQL·txtai·FastAPI가 자동으로 구성됩니다.

**데이터베이스 설정 안내**
FoundByMe는 **PostgreSQL**(메타데이터)과 **txtai**(벡터 인덱스)를 사용합니다.
Docker Compose가 이 모든 환경을 자동으로 구축해주므로 별도의 설치가 필요 없습니다.
{: .callout-note }


## 1. 전제 조건 (Prerequisites)

설치를 시작하기 전에 다음 도구가 설치되어 있어야 합니다.

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac)
* Git

## 2. 설치 및 실행

GitHub 저장소를 복제하고 Docker Compose를 실행하면 모든 준비가 끝납니다.

```bash
# 1. 저장소 복제
git clone [https://github.com/KNaeon/foundbyme.git](https://github.com/KNaeon/foundbyme.git)
cd foundbyme

# 2. 컨테이너 실행 (백그라운드 모드)
docker-compose up -d
```
**초기 실행 시 주의사항** 
모델(txtai embeddings) 다운로드 · PostgreSQL 초기화 때문에 첫 실행은 1–3분 정도 걸릴 수 있습니다.
{: .callout-note }

## 3. 접속하기
설치가 완료되면 아래 주소로 접속하여 FoundByMe에 접속할 수 있습니다.

<div style="margin: 20px 0;">
  <a href="http://localhost:3000" target="_blank" class="btn btn-primary" style="text-decoration: none; padding: 10px 20px; font-weight: bold;">
    🚀 FoundByMe 실행 (http://localhost:3000)
  </a>
</div>

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **Backend API:** [http://localhost:8000/docs](http://localhost:8000/docs) (Swagger UI)

---

## 4. 시스템 구조 (Architecture Overview)

아래 그림은 FoundByMe 전체 구성요소가 어떻게 연결되는지를 보여줍니다.

<img src="{{ '/assets/images/architecture.png' | relative_url }}" alt="FoundByMe Architecture Diagram" style="max-width: 100%; height: auto; display: block; margin: 30px auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

# 핵심 구성 요약
## 🔍 검색 처리 흐름

- 사용자가 검색 요청을 보내면 FastAPI가 이를 처리

- ChromaDB가 kNN을 이용해 유사도 기반 검색 수행

- PostgreSQL은 문서 내용/로그/메타데이터 저장

- 결과는 프론트엔드로 JSON 형태로 응답

## 🧱 별도 인덱싱 파이프라인

- Loader.py → 텍스트 추출(.txt/.md/.pdf/.pptx 등)

- Indexer : 데이터를 청크(Chunk) 단위로 분할하여 처리

- 벡터 인덱스 : txtai

- Storage: * 문서 원본/메타데이터 -> PostgreSQL

## 5. 보안 주의사항**
로컬 환경에서 동작하더라도 `.env`, API 키 또는 DB 접속 정보가 외부에 노출되지 않도록 주의하세요.
{: .callout-warning }


파일을 세그먼트 단위로 분할(Chunking)하고 벡터화하는 과정이 포함되어 있어, 대용량 파일이 많을 경우 시간이 소요될 수 있습니다. 
{: .callout-warning }
