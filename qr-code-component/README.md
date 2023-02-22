# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## 목차

- [개요](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![screenshot](https://user-images.githubusercontent.com/107173877/220589856-3f967919-ad13-4565-b32c-d71af69f1a74.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/qr-code-component-vjc-EUAHjo](https://www.frontendmentor.io/solutions/qr-code-component-vjc-EUAHjo)
- Live Site URL: [https://beamish-concha-5b2de8.netlify.app/](https://beamish-concha-5b2de8.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

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

* 깃허브에 이미지를 삽입하는 법 : issue에 이미지를 업로드한후 그 주소를 사용함.
* 코드블럭 삽입 ` ```main { width:320px; }``` `
* 리스트항목 사용할 때 \*나 -를 사용함

- 접근성문제를 위해 main과 footer를 꼭 사용해야 한다.

### Continued development

css의 단위에 대하여 공부해야겠다.
px를 주로 사용해서 %, em, rem, vw, vh에 대해서 잘 알지 못했다.
이에 대해 공부를 더 해서 반응형에서 잘 적용할 수 있게 하겠다.

All page content should be contained by landmarks

### Useful resources

- [FLEXBOX FROGGY](https://flexboxfroggy.com/#ko) - display:flex에 관한 전반적인 사항을 다시 공부 할 수 있었다. 배운 것을 앞으로도 많이 활용할 것이다.

## Author

- github - [@eunjikimdev](https://github.com/eunjikimdev)
- Frontend Mentor - [@eunjikimdev](https://www.frontendmentor.io/profile/eunjikimdev)
