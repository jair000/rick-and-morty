import styled from "styled-components";

// ? STYLED COMPONENTS
export const Carta = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: 30px;
`;

export const BtnX = styled.button`
  background-color: red;
  border: none;
  color: white;
  position: absolute;
  width: 21px;
  height: 18px;
  border-radius: 10px 2px 2px 2px;
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 200px;
`;

export const Live = styled.h2`
  width: 80px;
  height: 40px;
  background-color: #181918;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: -60px;
  font-size: 20px;
  padding: 5px 10px;
  border-top: 10px solid #181918;
  border-right: 10px solid #181918;
  border-radius: 15px 15px 0 0;

  &::before {
    content: "";
    position: absolute;
    background-color: transparent;
    margin-left: 145px;
    margin-top: 25px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #181918;
  }
`;

export const NameStyle = styled.h2`
  & {
    text-align: center;
    width: 100%;
  }

  & > * {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    background-color: #f4420b;
    padding: 10px;
    border-radius: 0.5rem;
  }
`;
