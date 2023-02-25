# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## 목차

- [개요](#개요)
  - [스크린샷](#스크린샷)
  - [링크](#링크)
- [진행과정](#진행과정)
  - [구축 대상](#구축-대상)
  - [내가 배운 것](#내가-배운-것)
  - [지속적으로 공부 할 부분](#지속적으로-공부-할-부분)
  - [유용한 리소스](#유용한-리소스)
- [작성자](#작성자)
- [감사의 말](#감사의-말)

## 개요

### 스크린샷

![screenshot](https://user-images.githubusercontent.com/107173877/221366818-d619927b-7f80-43d7-aa44-6bc95693f866.jpg)

![screenshot_hover](https://user-images.githubusercontent.com/107173877/221366916-a070275e-2040-4270-8f0f-d730ec3ba2e9.jpg)

### 링크

- Solution URL: [https://www.frontendmentor.io/solutions/qr-code-component-vjc-EUAHjo](https://www.frontendmentor.io/solutions/qr-code-component-vjc-EUAHjo)
- Live Site URL: [https://grand-cocada-7dd0d0.netlify.app/](https://grand-cocada-7dd0d0.netlify.app/)

## 진행과정

### 구축 대상

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS hover

### 내가 배운 것

- display : flex 를 적용할 때 height를 마크업하지않는 것.
  플랙스 아이템의 크기에 따라서 자체적으로 높이가 조절되기 때문이다. 그러나 수직정렬등을 원할 때에는 높이 설정을 하기도 한다.

-hover시 overlay 되도록 적용할 때, 기존에는 display: none으로 하고, hover때에만 display: block을 주는 방식을 사용할 수 있다.

- 중앙정렬하는 방법

```css
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

### 지속적으로 공부 할 부분

- 클래스 변수명을 더 잘 알아볼 수 있도록 작성하면 좋을 것같다고 생각했다. BEM등을 사용해볼까싶다.

- 좀 더 복잡한 프로젝트를 하게되면 git을 좀 더 활용해서 커밋도 자주하고 netlify에 올릴 때에도 자동으로 깃과 연동되어서 배포될 수 있도록 하고싶다.

- 프로필 사진과 이름사이의 간격을 margin으로 주어야하는지 padding으로 주어야하는지 알고싶다.

- flex를 사용할 때 사진에도 height를 주지 않는 것이 맞는가?(비율을 살릴 경우)

- ETH와 DAYS옆의 아이콘이 묘하게 찌그러져있는데, 이유와 수정하는 방법

### 유용한 리소스

- [pxtoem](http://pxtoem.com/) - px를 em으로 전환해주는 사이트

-[CSS Scan](https://getcssscan.com/css-box-shadow-examples) - 예쁜 그림자 예시를 보여주는 사이트

## 작성자

- github - [@eunjikimdev](https://github.com/eunjikimdev)
- Frontend Mentor - [@eunjikimdev](https://www.frontendmentor.io/profile/eunjikimdev)

## 감사의 말
