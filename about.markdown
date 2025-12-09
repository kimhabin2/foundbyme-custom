---
layout: page
title: About
permalink: /about/
---

# About FoundByMe

**FoundByMe**는 개인의 로컬 학습 자료를 효율적으로 관리하고 검색할 수 있도록 돕는 **오픈소스 시맨틱 검색 엔진**입니다.

단순한 키워드 매칭을 넘어, 문맥을 이해하는 **RAG(Retrieval-Augmented Generation)** 기술을 통해 강의 자료, PDF, 코드 조각 등 흩어진 지식을 자연어로 쉽게 찾을 수 있습니다.

---

## 🏗️ Open Source Contribution Strategy

FoundByMe는 혁신적인 오픈소스 기술인 **txtai**를 활용하여, 개발자가 아닌 일반 사용자도 쉽게 사용할 수 있는 **'Local-First Knowledge App'** 생태계를 제안합니다.

### 1. txtai: Application Layer 확장 (Reference Implementation)
* **기여 포인트:** 고성능 AI 인덱싱 프레임워크인 `txtai`를 실제 **엔드유저용 애플리케이션(End-User Application)**으로 구현했습니다.
* **상세:** 기존 `txtai`는 주로 파이썬 개발자들의 라이브러리로 사용되었습니다. 우리는 이를 백엔드 코어로 활용하고, 사용자 친화적인 GUI와 결합하여 **"일반 학생을 위한 로컬 검색 도구"**라는 새로운 유즈 케이스(Use Case)를 만들어 오픈소스 커뮤니티에 공유했습니다.

### 2. Docker: 복잡한 AI 스택의 배포 자동화
* **기여 포인트:** `Node.js`(프론트), `Python(txtai)`(백엔드), `PostgreSQL`(메타데이터) 등이 혼재된 복잡한 개발 환경을 **Docker Compose**로 표준화했습니다.
* **상세:** AI 모델 설치와 데이터베이스 연동 과정을 명령어 한 줄로 자동화하여, 비전문가도 자신의 PC에 즉시 **독립적인 검색 엔진**을 구축할 수 있도록 진입 장벽을 획기적으로 낮췄습니다.

### 3. PostgreSQL: 메타데이터 관리 최적화
* **기여 포인트:** 벡터 검색만으로는 부족한 파일 메타데이터(경로, 수정일, 확장자) 관리를 위해 관계형 데이터베이스(RDBMS)를 효율적으로 통합했습니다.
* **상세:** 벡터 DB와 RDBMS의 장점을 결합한 하이브리드 구조를 설계하여, 검색 정확도와 데이터 관리의 편의성을 동시에 확보했습니다.

---

## 💡 Why FoundByMe? (Innovation & Difference)

FoundByMe는 기존 상용 소프트웨어들이 해결하지 못한 **'검색의 질적 한계'**를 극복하고, 무거운 오픈소스 AI 도구들의 **'진입장벽'**을 낮췄습니다.

### 1. vs Traditional PDF Viewers (e.g., PDF-XChange)
> **Reference:** [PDF-XChange Editor](https://www.tracker-software.com/product/pdf-xchange-editor), [Adobe Acrobat Reader](https://www.adobe.com/acrobat/pdf-reader.html)

* **The Limitation:** 기존 뷰어들의 검색 기능은 단순한 **키워드 매칭(Ctrl+F)**에 불과합니다. 단어가 정확히 일치하지 않으면, 문서 내에 관련 내용이 있어도 찾을 수 없습니다.
* **Our Solution:** FoundByMe는 **'문맥(Context)'**을 검색합니다. 사용자의 의도를 파악하여 키워드가 달라도 의미가 유사한 문서를 찾아주는 **차세대 시맨틱 검색**을 제공합니다.

### 2. vs Cloud AI Services (e.g., ChatPDF)
> **Reference:** [ChatPDF](https://www.chatpdf.com/), [AskYourPDF](https://askyourpdf.com/)

* **The Limitation:** 대부분의 AI 문서 도구는 파일을 서버에 업로드해야 하므로 **데이터 유출 위험(Privacy Risk)**이 있고, 인터넷 연결과 구독료가 필요합니다.
* **Our Solution:** **txtai**와 **Docker**를 활용한 **"100% 로컬 온프레미스"** 아키텍처입니다. 데이터가 PC 밖으로 나가지 않아 보안이 완벽하며, 오프라인 환경에서도 무료로 사용할 수 있습니다.

### 3. vs Heavy Local LLMs (e.g., PrivateGPT)
> **Reference:** [zylon-ai/private-gpt (GitHub)](https://github.com/zylon-ai/private-gpt), [LocalAI](https://github.com/mudler/LocalAI)

* **The Limitation:** 기존의 로컬 RAG 서비스(PrivateGPT 등)는 무거운 LLM(거대언어모델)을 구동해야 해서 **고사양 GPU가 필수적**이고 속도가 느립니다.
* **Our Solution:** 우리는 생성(Chat)보다 **'탐색(Search)'에 집중한 경량화 모델**을 채택했습니다. 무거운 LLM 의존성을 제거하여, 일반 학생용 노트북에서도 쾌적하게 돌아가는 **보급형 AI 검색 엔진**을 구현했습니다.

### 4. vs Open Source DMS (e.g., Paperless-ngx)
> **Reference:** [paperless-ngx/paperless-ngx (GitHub)](https://github.com/paperless-ngx/paperless-ngx)

* **The Limitation:** 기존 문서 관리 시스템들은 OCR과 텍스트 일치 방식에 의존하여, 정확한 단어를 모르면 파일을 찾기 어려웠습니다.
* **Our Solution:** FoundByMe는 **txtai 기반의 시맨틱 엔진**을 도입하여, 단순 보관을 넘어 **"문맥을 이해하는 지능형 문서 검색"** 경험을 제공합니다.

---

## 🎨 Custom Theme Development Report

이 웹사이트는 FoundByMe 프로젝트의 정체성을 나타내기 위해 **직접 제작 및 재설계한 커스텀 Jekyll 테마**를 사용하고 있습니다. 기존 테마를 단순히 적용하는 것에 그치지 않고, 구조와 디자인을 전면적으로 개편하여 독창성과 사용성을 높였습니다.

### 1. 테마 독립화 및 구조 재설계 (Theme Ejection & Restructuring)
* 기존의 `remote_theme` 의존 방식을 제거하고, `Just the Docs`의 원본 소스 코드(`_layouts`, `_includes`, `_sass`, `assets`)를 로컬 환경으로 이관하여 **직접 수정 가능한 독립적인 테마 구조**를 구축했습니다.
* `_config.yml` 및 `Gemfile`의 불필요한 외부 의존성을 최적화하고, 로컬 개발 환경에 맞게 설정을 재구성했습니다.

### 2. 타이포그래피 고도화 (Typography)
* **폰트 변경:** 가독성이 뛰어나고 현대적인 느낌을 주는 구글 폰트 **'Inter'**를 적용하여 전문적인 기술 문서의 느낌을 강화했습니다.
* **적용 파일:** `_includes/head.html` (CDN 링크 추가), `_sass/support/_variables.scss` (SCSS 변수 재정의)

### 3. 브랜드 아이덴티티 확립 (Color System)
* **색상 변경:** 기존 테마의 기본 색상(Purple)을 **학교 상징색인 '크림슨 레드(#c3002f)'**와 **슬레이트 그레이(#51626f)**로 전면 수정하여 프로젝트의 브랜드 정체성을 통일했습니다.
* **적용 파일:** `_sass/support/_variables.scss` (메인 테마 컬러 및 링크 색상 변수 수정)

### 4. 레이아웃 커스터마이징 (Layout Customization)
* **상단 공지 배너 추가:** `_layouts/default.html` 뼈대 코드를 직접 수정하여, 사이트 전역에 중요한 메시지를 전달할 수 있는 **상단 배너 영역**을 신설했습니다.
* **확장형 푸터(Footer) 개발:** 기존의 단순한 푸터를 제거하고, 학교 정보, 팀원 연락처, GitHub 링크 등을 포함한 **커스텀 푸터 컴포넌트(`_includes/custom_footer.html`)**를 직접 코딩하여 적용했습니다.

### 5. UX/UI 구조 혁신 (UI Innovation)
* **Dynamic Landing Page (홈페이지 전면 개편):** 기존의 정적인 텍스트 위주 대문을 탈피하고, **데이터의 연결성을 시각화한 커스텀 SVG 애니메이션**(`hero_animation.svg`)을 메인 화면(`index.md`)에 구현했습니다. 중앙 정렬 레이아웃과 브랜드 컬러 그라데이션을 적용하여 몰입감을 극대화했습니다.
* **Card UI (카드형 디자인):** 밋밋한 텍스트 리스트 대신 `Grid` 레이아웃 기반의 **카드형 디자인**을 기능 소개 및 커뮤니티 페이지에 적용하여 정보 전달력과 심미성을 높였습니다. *(Django Community 디자인 영감)*

### 6. 디테일 및 사용자 경험 강화 (Detail & UX Enhancement)
* **기능 모듈화 (JS Modularization):** '맨 위로 가기(Back to Top)' 기능의 자바스크립트 로직을 별도 파일(`assets/js/backtotop.js`)로 분리하여 유지보수성과 코드 재사용성을 높였습니다.
* **파비콘(Favicon) 적용:** 브라우저 탭에서도 서비스의 정체성(검색)을 드러낼 수 있도록 돋보기(🔍) 아이콘을 적용했습니다. (`_includes/head.html`)
* **검색창 디자인 고도화:** 프로젝트의 핵심 기능인 '검색'을 강조하기 위해 검색창에 둥근 모서리와 브랜드 컬러 포커스 효과를 추가했습니다. (`_sass/custom/custom.scss`)
* **404 페이지 커스터마이징:** 단순한 에러 메시지 대신, 사용자 친화적인 안내 문구와 홈으로 돌아가기 버튼을 배치한 커스텀 404 페이지를 제작했습니다. (`404.html`)

### 7. 헤더 디자인 전면 개편 (Header Redesign)
* **상단바 스타일 변경:** 기존의 평범한 흰색 헤더를 **학교 상징색(Crimson Red)** 배경으로 과감하게 변경하여 사이트의 첫인상을 강렬하게 만들고 브랜드 정체성을 극대화했습니다.
* **검색창 및 아이콘 최적화:** 붉은 배경에 어울리도록 헤더 내 검색창을 **반투명한 흰색 스타일**로 변경하고, 로고와 아이콘 색상을 흰색으로 통일하여 가독성과 심미성을 동시에 확보했습니다.

---

### 📬 Contact & Contribute

FoundByMe는 여러분의 기여를 환영합니다.
GitHub 저장소에서 코드를 확인하거나, 이슈를 등록해 주세요.

* **GitHub:** [https://github.com/KNaeon/foundbyme](https://github.com/KNaeon/foundbyme)
* **Team:** 세종대학교 데이터사이언스학과 오픈소스SW개론 팀
### 📅 Project History
* **기간:** 2025.10 ~ 2025.12
* **목표:** 학습 효율을 극대화하는 로컬 RAG 검색 도구 개발