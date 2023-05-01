import React from 'react'
import  styled, { keyframes } from 'styled-components'

const Body = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color:${(props) => props.theme.textColor};
  height: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const Titlecontainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: gold;
  justify-content: center;
`
const Boxcontainer = styled.div`
  display: flex;
`
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  margin:10px;
`

const changeAni = keyframes`
  from{
    background-color: red;
    transform:rotate(0deg);
  }
  to{
    border-radius: 50px;
    transform:rotate(360deg);
  }
`

const Circle = styled(Box)`
  animation:${changeAni} 1s linear infinite;
  &:hover{
    background-color: red;
  }
`

export default function App() {
  return (
    <Body>
      <Titlecontainer>
        <h1>styled-component-Test</h1>
      </Titlecontainer>
      <Boxcontainer>
        <Box bgColor="tomato"/>
        <Box bgColor="gold"/>
        <Circle bgColor="blue"/>
        <Circle bgColor="blue"/>
      </Boxcontainer>
    </Body>
  )
}
