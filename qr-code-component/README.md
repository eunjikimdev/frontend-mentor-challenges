# Frontend Mentor - QR code component solution

Frontend Mentor의 [QR code component solution](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H)에 대한 솔루션입니다.  
프론트엔드 멘토 챌린지는 실제 프로젝트를 만들면서 코딩 실력을 향상시키는 데 도움이 됩니다.


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

![screenshot](https://user-images.githubusercontent.com/107173877/220589856-3f967919-ad13-4565-b32c-d71af69f1a74.jpg)

### 링크

- Solution URL: [https://www.frontendmentor.io/solutions/qr-code-component-vjc-EUAHjo](https://www.frontendmentor.io/solutions/qr-code-component-vjc-EUAHjo)
- Live Site URL: [https://beamish-concha-5b2de8.netlify.app/](https://beamish-concha-5b2de8.netlify.app/)


## 진행과정

### 구축 대상

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### 내가 배운 것

- display: flex에 대해서 공부했다.

  * justify-content는 수평이동 ex) justify-content: space-between
  * align-items는 수직이동 ex) align-items: flex-end
  * flex-direction 정렬방향설정 ex)flex-direction: row-reverse;
  * flex-direction을 사용할 때 reverse를 쓰면 start와 end의 순서도 전환됌
  * order는 flex요소의 순서를 지정함 ex) order: 1 (-1, 0, 1)

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
```

- vh

- 마크다운 문법

  - 깃허브에 이미지를 삽입하는 법 : issue에 이미지를 업로드한후 그 주소를 사용함.
  - 코드블럭 삽입 ` ```main { width:320px; }``` `
  - 리스트항목 사용할 때 \*나 -를 사용함

- 접근성문제를 위해 main과 footer를 꼭 사용해야 한다.

- css units
  - padding, margin, width, height 같은 경우는 em 값을 사용한다.
  -font size의 경우 rem을 사용하여 값이 변하지 않도록 한다.
  - 기본 font 값은 16px
  
  - 구글 폰트 사용을 위한 @import 규칙

### 지속적으로 공부 할 부분

css의 단위에 대하여 공부해야겠다.  
px를 주로 사용해서 %, em, rem, vw, vh에 대해서 잘 알지 못했다.  
이에 대해 공부를 더 해서 반응형에서 잘 적용할 수 있게 하겠다.  

All page content should be contained by landmarks 에 대해서도 공부하기.

### 유용한 리소스

- [FLEXBOX FROGGY](https://flexboxfroggy.com/#ko) - display:flex에 관한 전반적인 사항을 다시 공부 할 수 있었다.  배운 것을 앞으로도 많이 활용할 것이다.
- [프론트엔드 필수 반응형 CSS 단위 총정리 (EM과 REM) | Responsive CSS Units](https://www.youtube.com/watch?v=7Z3t1OWOpHo&t=641s) - css units에 대한 개념을 공부할 수 있습니다.


## 작성자

- github - [@eunjikimdev](https://github.com/eunjikimdev)
- Frontend Mentor - [@eunjikimdev](https://www.frontendmentor.io/profile/eunjikimdev)

## 감사의 말

I would like to express my gratitude to Francisco Carrillo (@frank-itachi) and Melvin Aguilar (@MelvinAguilar) for their support throughout this project.
Thank you both for your help.
