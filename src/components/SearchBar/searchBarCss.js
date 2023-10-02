import { styled } from "styled-components";

// ? STYLED COMPONENTS
export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 2%;
  width: 50%;
`;

export const InputStyle = styled.input`
  padding: 15px;
  width: 30%;
  height: 15px;
  background-color: #000;
  border: none;
  border-bottom: 3px solid #000;
  &:focus {
    width: 32%;
    border: none;
    transition: 0.5s;
    border-bottom: 3px solid #00afa6;
    outline: 0;
  }
`;

export const BtnStyle = styled.button`
  color: white;
  font-size: 18px;
  background-color: #0085d3;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  &:active {
    background-color: #55bf81;
  }
`;
