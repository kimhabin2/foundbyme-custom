---
layout: default
title: Getting Started
nav_order: 1
parent: Documentation
permalink: /docs/getting-started/
---

# Getting Started

FoundByMe를 처음 사용하는 사용자들을 위해 설치와 기본 설정 방법을 안내합니다.

이것은 일반적인 텍스트입니다.

여기에 중요한 참고 사항을 적습니다. 
RAG 기술을 사용하려면 데이터베이스(PostgreSQL, ChromaDB) 설정이 필요합니다.
{: .callout-note }

이것은 주의 사항입니다.
API 키나 DB 접속 정보가 노출되지 않도록 조심하세요!
{: .callout-warning }

## 1. 설치 및 환경 구성

<div class="button">
  <a href="https://github.com/KNaeon/foundbyme" target="_blank">GitHub Repository에서 설치 파일 다운로드</a>
</div>

### 필수 요구사항
* Python 3.8+
* PostgreSQL Database

```bash
pip install -r requirements.txt
```
Python 가상환경(Virtualenv) 사용을 권장합니다. db/db.py 등에서 PostgreSQL 접속 정보를 본인의 환경에 맞게 수정해야 할 수 있습니다. 
{: .callout-note }

2. 로컬 파일 인덱싱

```bash
python indexer.py --path "C:/my-documents"
```
파일을 세그먼트 단위로 분할(Chunking)하고 벡터화하는 과정이 포함되어 있어, 대용량 파일이 많을 경우 시간이 소요될 수 있습니다. 
{: .callout-warning }

3. 서버 실행 및 검색
```bash
uvicorn app:app --reload
```
브라우저에서 http://localhost:8000/docs로 접속하여 API를 테스트하거나, 프론트엔드 대시보드를 통해 검색을 수행하세요.