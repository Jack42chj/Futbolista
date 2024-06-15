# ⚽ 내 발에 맞는 축구화 찾기 웹/앱 서비스 Futbolista

![logo](https://github.com/Jack42chj/Futbolista_FE/assets/86552441/37adcfe1-78af-47bf-af66-50055a478f71)

## 💡 실행 방법(Installation)

```bash
$ cd Futbolista_FE-master
$ yarn
$ yan start
```

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

#### ▶️ 축구화 찾기 기능(Search)

![result](https://github.com/Jack42chj/Futbolista_FE/assets/86552441/f9bc9393-0374-4959-84b5-1973b348fbc3)

-   발 정보 입력과 구장 선택을 통한 추천 결과 제공
-   학습된 분류 모델을 통해 결과 도출

#### 🔑 로그인/회원가입(Auth)

-   로그인을 통한 회원 발 정보 저장
-   저장된 정보를 기반으로 추천 결과 즉시 제공

#### 🔍 축구화 정보 조회(Search)

-   다양한 브랜드의 축구화 정보 제공
