# ⚽ 내 발에 맞는 축구화 찾기 웹/앱 서비스 Futbolista

![logo](https://github.com/Jack42chj/Futbolista_FE/assets/86552441/37adcfe1-78af-47bf-af66-50055a478f71)

## 🖥️ 서비스 소개(Introduction)

![service](https://github.com/Jack42chj/Futbolista_FE/assets/86552441/1a931623-af13-4334-b09d-fc2330c8d626)

-   사용자에게 맞는 축구화를 추천해주는 서비스입니다.
-   사용자의 발 정보와 잔디에 맞는 축구 구장을 선택하면 축구화를 추천해줍니다.
-   사용자 발 정보는 발 길이, 발 등 높이, 발 볼 너비를 의미합니다.
-   잔디에 맞는 구장은 천연잔디 구장, 인조잔디 구장, 맨땅 구장, 실내 구장를 의미합니다.
-   다양한 브랜드의 축구화 정보를 제공합니다.

## 🗓️ 개발 기간(Development Period)

-   **전체 개발 기간 : 2023.08 ~ 2023.11**
-   **기획 및 디자인 : 2023.08 ~ 2023.08**
-   **DB 구현 및 데이터 수집 : 2024.08 ~ 2023.08**
-   **분류 모델 구현 : 2023.09 ~ 2023.10**
-   **UI 및 기능 구현 : 2023.10 ~ 2023.11**

## 🙋‍♂️ 멤버 구성(Member)

**1인 기획, 디자인, 개발**

## 🗺️ 프로젝트 배경(Background)

- 올바른 축구화의 중요성(*올바른 축구화란? 축구화가 사용자 발보다 작지 않거나 크지 않은 축구화를 말한다)
- 올바른 축구화를 착용함으로써 플레이어의 성능, 편안함, 안전성을 향상시킨다.
- 특히 구장에 맞는 축구화는 선수의 관절과 근육에 부하 누적을 예방한다.
- 2023년 축구 유투버 GOALE에서 축구 동호인 16명을 상대로 진행한 인터뷰에 따르면 축구화 구매를 할 때 온라인 7명, 오프라인 9명으로 오프라인 구매를 더 선호한다.
- 구매자 개개인의 발 형태와 시중에 판매되는 축구화의 형태가 각각 다양하기 때문에, 경기 내내 신고 뛰어야 하는 축구화를 구매하는 경우 직접 착용해 볼 수 있는 오프라인 매장을 선호한다.
- 구매자가 직접 착용해 보지 않아도 사용자의 발 정보와 다양한 브랜드의 축구화에 대한 데이터 셋을 바탕으로, 축구화를 추천하여, 구매과정 단축 및 만족도 향상을 목표로 개발에 착수하였다.

## ⚙️ 시스템 아키텍처(System Architecture)

![architec](https://github.com/Jack42chj/Futbolista_FE/assets/86552441/4f534fad-f8db-4793-a8a6-1a52c6ff46d9)

## 📊 데이터 분석(Data Analysis)

1. 축구화 데이터
- 데이터 셋 수집 방법
- 오프라인 (34개) – 동대문 축구화 매장 싸카
- 온라인 (71개) – PRO:DIRECT SOCCER, CRAZY 11
- 각 축구화 별로 길이, 폭, 높이, 스터드 정보 저장

2. Data Clustering
- 수집한 데이터 셋 기반 군집 형성
- 데이터 셋을 Width/Length, Height/Length, Stud 기준으로 모델 학습

3. Decision Tree
- 학습된 클러스터링 모델 기반 Stud, Width/Length, Height/Length 각각 특징 분류
- 사용자 발 정보를 분류된 기준으로 변환하여 노드 탐색

## 🧾 데이터 전처리 및 결과

![dt](https://github.com/Jack42chj/Futbolista_FE/assets/86552441/2c53550c-8ee3-490f-b86b-4fbbd9c0aa08)

- Length(길이): 축구화의 총 길이(mm) * 1,000,000
- Width(너비): 축구화의 최대 발 볼 넓이(mm) * 1,000,000
- Height(높이): 지면으로부터 발등까지 높이(mm) * 1,000,000
- Stud(스터드): 5가지의 축구화 스터드(FG, AG, SG, TF, IC) 종류 별로 0부터 4까지 부여 후 * 1,000,000

## 📚 기술 스택(Stacks)

### 🛣️ 개발 환경(Environment)

<div>
  <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config

<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

### 🛠️ 개발 기술(Development)

<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=flask&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
</div>

### 🪄 디자인(Design)

<div>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

## 📂 디렉토리 구조

```
futbolista
├─ .gitignore
├─ package.json
├─ public
│  ├─ index.html
│  ├─ logo.svg
│  └─ manifest.json
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ font.css
│  │  │  ├─ Pretendard-Regular.woff
│  │  │  └─ Righteous-Regular.ttf
│  │  ├─ images
│  │  │  ├─ adidas.jpg
│  │  │  ├─ all.jpg
│  │  │  ├─ brand.png
│  │  │  ├─ foot.png
│  │  │  ├─ main.png
│  │  │  ├─ mizuno.jpg
│  │  │  ├─ newbalance.jpg
│  │  │  ├─ nike.jpg
│  │  │  ├─ puma.jpg
│  │  │  ├─ result.jpg
│  │  │  ├─ test1.png
│  │  │  └─ test2.png
│  │  └─ logo
│  │     ├─ github.png
│  │     ├─ logo.png
│  │     └─ velog.png
│  ├─ components
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ Inputs
│  │  │  ├─ AuthBtn.tsx
│  │  │  ├─ FormInputError.tsx
│  │  │  └─ InputBase.tsx
│  │  ├─ landing
│  │  │  ├─ LandingFour.tsx
│  │  │  ├─ LandingOne.tsx
│  │  │  ├─ LandingThree.tsx
│  │  │  └─ LandingTwo.tsx
│  │  ├─ layouts
│  │  │  ├─ BackGround.tsx
│  │  │  ├─ BrandSection.tsx
│  │  │  ├─ Column.tsx
│  │  │  ├─ ContentBox.tsx
│  │  │  ├─ FormBox.tsx
│  │  │  ├─ InnerSection.tsx
│  │  │  ├─ Items.tsx
│  │  │  ├─ Row.tsx
│  │  │  └─ Section.tsx
│  │  └─ Texts
│  │     ├─ Pretendard.tsx
│  │     └─ Righteous.tsx
│  ├─ contexts
│  │  ├─ authAction.tsx
│  │  ├─ authReducer.tsx
│  │  └─ store.tsx
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ Register.tsx
│  │  │  ├─ SignIn.tsx
│  │  │  └─ SignUp.tsx
│  │  ├─ Brand
│  │  │  ├─ Adidas.tsx
│  │  │  ├─ All.tsx
│  │  │  ├─ Mizuno.tsx
│  │  │  ├─ Nike.tsx
│  │  │  ├─ Others.tsx
│  │  │  └─ Puma.tsx
│  │  ├─ Landing.tsx
│  │  ├─ Main.tsx
│  │  ├─ Measure.tsx
│  │  ├─ Recommend.tsx
│  │  └─ Result.tsx
│  ├─ services
│  │  └─ userServices.tsx
│  ├─ styles
│  │  └─ styles.css
│  ├─ types
│  │  └─ index.d.ts
│  └─ utils
│     ├─ Regex.tsx
│     └─ Trim.tsx
├─ tsconfig.json
└─ yarn.lock
```

## 🌟 주요 기능(Specification)
![result](https://github.com/Jack42chj/Futbolista_FE/assets/86552441/f9bc9393-0374-4959-84b5-1973b348fbc3)

#### ▶️ 축구화 찾기 기능(Search)

-   발 정보 입력과 구장 선택을 통한 추천 결과 제공
-   학습된 분류 모델을 통해 결과 도출

#### 🔑 로그인/회원가입(Auth)

-   로그인을 통한 회원 발 정보 저장
-   저장된 정보를 기반으로 추천 결과 즉시 제공

#### 🔍 축구화 정보 조회(Search)

-   다양한 브랜드의 축구화 정보 제공
-   
