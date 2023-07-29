# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

![image](https://github.com/eunjikimdev/frontend-mentor-challenges/assets/107173877/977e7892-ef49-40e3-85fe-ea87ab5e4271)
![image](https://github.com/eunjikimdev/frontend-mentor-challenges/assets/107173877/4a7112f0-9d34-4110-920e-db72dbf11349)
![image](https://github.com/eunjikimdev/frontend-mentor-challenges/assets/107173877/1f2043eb-0f10-41ad-be03-588a828ce909)

### 링크

- Solution URL: [https://www.frontendmentor.io/solutions/article-preview-component-S4HmlhZVGl](https://www.frontendmentor.io/solutions/article-preview-component-S4HmlhZVGl)
- Live Site URL: [https://spiffy-haupia-548f33.netlify.app/](https://spiffy-haupia-548f33.netlify.app/)

## 진행과정

### 구축 대상

- Semantic HTML5 markup
- CSS custom properties
- 장치의 화면 크기에 따라 구성 요소에 대한 최적의 레이아웃 짜기
- 공유 아이콘을 클릭하면 소셜 미디어 공유 링크 표시

### 내가 배운 것

- classList를 사용하여 토글하기

- transition: all 0.5s ease;

- ::after를 사용하여 말풍선 꼬리 만드는 법
  작은사각형을 만들고
  transform: translate(-50%, -60%) rotate(45deg)로 돌려서 만듦

- filter: invert(1) >> 이미지 색상 반전

- hover했을 때 글자색 변경이나 썸네일 이미지 확대 등으로 확실하게 표현 하는 것이 사용자경험을 위해 좋다.

- grid-template-columns: 285px minmax(300px, 445px)는 컬럼(열)의 배치를 의미함. 사진부분은 285px. 텍스트 컨텐츠부분은 최소 300px, 최대 445px 로 하겠다는 뜻이다.

grid-template-columns: 1fr;

minmax()함수 : 반응형으로 사용가능.

- transform: translate(var(--translateX), var(--translateY)) scale(var(--scale));

transform: translate(-50%, -60%) rotate(45deg);

- bottom: calc(100% + 28px);
  calc()함수를 사용할 땐, 부호를 꼭 띄어서 써야한다.

- transform-origin: bottom >> transform의 기준점 정하기

- transform: scale(1.1);
  scale: 1.1; 의 차이 >> scale만 단독으로 쓰는 것은 적합하지 않다. 무조건 transform : scale을 써야한다.

### 지속적으로 공부 할 부분

- 클래스 이름지을 때 BEM방식을 사용하면 좋을 것 같다.

- flex는 사용해봤는데 grid는 사용을 잘 안해봤다. 익숙해지면 좋을 것 같다.

- 접근성을 위해서, alt="arrow-redo icon" aria-label="arrow-redo icon"의 차이점

### 유용한 리소스

- [Buttons must have discernible text](https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI)

- [[role='img'] elements must have an alternative text](https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI)

## 작성자

- github - [@eunjikimdev](https://github.com/eunjikimdev)
- Frontend Mentor - [@eunjikimdev](https://www.frontendmentor.io/profile/eunjikimdev)

## 감사의 말

- codewithsadee - [Article preview card component with HTML CSS JS](https://youtu.be/SKhZ0IBk1_A)
