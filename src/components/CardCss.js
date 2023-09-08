import styled from "styled-components";

// ? STYLED COMPONENTS
export const Carta = styled.div`
  border: 2px solid #398b77;
  width: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Live = styled.h2`
  width: 40px;
  background-color: #00c9a7;
  color: #fff;
  position: fixed;
  top: 95px;
  margin-left: 130px;
  border-radius: 7px;
  font-size: 14px;
  padding: 5px 10px;
  text-align: center;
`;

export const Img = styled.img`
  border-radius: 10px 10px 0 0;
  width: 200px;
`;

export const BtnX = styled.button`
  background-color: red;
  border: none;
  color: white;
  position: absolute;
  width: 21px;
  height: 18px;
  /* bottom: 639px; */
  border-radius: 10px 2px 2px 2px;
`;

export const Descriptions = styled.h2`
  font-size: 16px;
  margin-left: 10px;
`;

export const NameStyle = styled.h2`
  font-size: 18px;
  position: absolute;
  color: #fff;
  margin-top: 165px;
  margin-left: 10px;
  -webkit-text-stroke: 0.8px #000;
`;
