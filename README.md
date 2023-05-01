# styled-component

프롭스로 컴포넌트에서 원하는 색을 지정합니다.

#### props 로 속성 간단히 입력받기

```jsx
${(props) => props.bgColor}
```

#### box이용하여 속성 그대로 가져오기

```jsx
const Circle = styled(Box)`    box의 스타일을 그대로 가져옵니다.`;
```

#### as 사용하여 원하는 태그로 변경하기

```jsx
<Box as="원하는 태그">
as를 이용하여 원하는 태그로 변경할 수 있습니다.
```

#### attrs 사용하여 전달될 모든 속성을 가진 오브젝트를 담을 수 있음

```jsx
const Input = styled.input.attrs({required: true})`
    background-color:tomato;
```

#### styled component 에서 animation 사용하기

#### 자식 태그 선택(selector) 하는방법

#### 호버 태그 선택하는법

@import styled, {keyframes} from ~~ 호출해주고

```jsx
const rotationAnimatio n = keyframes`
 0% {
    trasnform:rotate(0deg);
    border-radius:0px
 }
 50% {
    trasnform:rotate(360deg);
    border-radius:100px
 }
 100%{
trasnform:rotate(0deg   );
    border-radius:0px
 }
`
** 원하는 태그에 호출해준다/ 자식태그 불러오기 **
const box = styled.div`
    animation:${rotationAnimation} 1s linear infinte
    span {
        font-size:20px;
        &:hover {
            // span:hover 랑 적어주는게 같음
        }
    }
`
```

#### Theme 사용하기

** import {ThemeProbider} from 'styled-components' 호출 **

```jsx
const 원하는테마 = {
    스타일속성: 지정
}
const 반대의테마 = {
    스타일속성: 지정
}

<ThemeProvider theme={원하는테마}>
  <App />
</ThemeProvider>
```

이후 App 컴포넌트에서 상위컴포넌트파일에서 테마 프롭에 접근이가느앟ㅁ
