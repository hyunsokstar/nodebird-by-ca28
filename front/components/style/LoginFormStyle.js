import styled from "styled-components";
import { Button } from "antd";

export const LoginFormWrapper = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  // border: 1px solid black;
  `
  export const LoginButtonWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
  `
  export const LoginButton = styled.button`
  width:118px;
  background-color: white;
  border-radius: 8px;
  margin-left: 4px;
  &:hover {
    background-color:skyblue
  }
`