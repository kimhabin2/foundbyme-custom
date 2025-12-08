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
RAG 기술을 사용하려면 데이터베이스 설정이 필요합니다.
{: .callout-note }

이것은 주의 사항입니다.
API 키가 노출되지 않도록 조심하세요!
{: .callout-warning }

## 1. 설치

<div class="button">
  <a href="https://github.com/KNaeon/foundbyme" target="_blank">GitHub Repository에서 설치 파일 다운로드</a>
</div>

```bash
pip install -r requirements.txt
```
Python 3.8 이상 버전을 권장합니다. 가상환경(Virtualenv)을 사용하면 패키지 충돌을 방지할 수 있어 더욱 안전합니다. 
{: .callout-note }

## 2. 로컬 파일 인덱싱
```bash
python indexer.py --path "C:/my-documents"
```
대용량 파일이 많을 경우 시간이 소요될 수 있습니다. 처음 실행 시에는 모든 파일을 스캔하므로, 파일 수에 따라 수 분 정도 걸릴 수 있습니다.
{: .callout-warning }

## 3. 검색 실행
```bash
python search.py "딥러닝 표준화"
```
---

