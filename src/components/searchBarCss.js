import { styled } from "styled-components";

// ? STYLED COMPONENTS
export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 2%;
  background-color: grey;
`;

export const InputStyle = styled.input`
  padding: 20px;
  width: 20%;
  height: 40px;
  border: 3px solid #4abaff;
  border-radius: 10px;
  transition: 0.5s;
  box-shadow: 0px 7px 10px -7px rgba(0, 0, 0, 0.75);
  &:focus {
    border: none;
    border-bottom: 3px solid #00afa6;
    outline: 0;
    border-radius: 0px;
  }
`;

export const BtnStyle = styled.button`
  color: white;
  font-size: 18px;
  background-color: #0085d3;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
`;
