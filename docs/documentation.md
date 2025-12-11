---
layout: default
title: Documentation
nav_order: 3
has_children: true
permalink: /docs/
---

# Documentation

환영합니다! **FoundByMe**의 공식 기술 문서 페이지입니다.
여기서는 설치부터 고급 사용법, 아키텍처 설계 원칙까지 프로젝트의 모든 기술적 세부 사항을 다룹니다.

## 📚 문서 구성 (Table of Contents)

이 문서는 다음과 같은 순서로 구성되어 있습니다.

* **[Getting Started]({{ '/docs/getting-started/' | relative_url }})**: Docker를 이용한 설치 및 실행 가이드.
* **[Features]({{ '/docs/features/' | relative_url }})**: txtai 기반의 시맨틱 검색, 하이브리드 아키텍처 등 핵심 기술 소개.
* **[Usage]({{ '/docs/usage/' | relative_url }})**: 웹 인터페이스 사용법 및 검색 팁.
* **[Examples]({{ '/docs/example/' | relative_url }})**: 실제 검색 시나리오와 API 활용 예제.

---

## 🛠️ 기술 스택 요약 (Tech Stack)

FoundByMe는 최고의 오픈소스 기술들을 조합하여 설계되었습니다.

| 구분 | 기술 스택 | 설명 |
| :--- | :--- | :--- |
| **Frontend** | Node.js (React) | 사용자 친화적인 웹 인터페이스 |
| **Backend** | Python (FastAPI) | REST API 서버 및 비즈니스 로직 |
| **Search Engine** | **txtai** | 시맨틱 벡터 검색 및 임베딩 엔진 |
| **Metadata DB** | **PostgreSQL** | 파일 정보 및 로그 관리 (RDBMS) |
| **Infra** | Docker Compose | 컨테이너 기반 배포 자동화 |

더 자세한 아키텍처 설명은 [Features]({{ '/docs/features/' | relative_url }}) 페이지를 참고하세요.
