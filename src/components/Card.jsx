import { styled } from "styled-components";

export default function Card({ pj, onClose }) {
  // ? STYLED COMPONENTS
  const Card = styled.div`
    border: 2px solid #398B77;
    width: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  `;

  const Live = styled.h2`
    width: 40px;
    background-color: #00C9A7;
    color: #fff;
    position: fixed;
    top: 95px;
    margin-left: 130px;
    border-radius: 7px;
    font-size: 14px;
    padding: 5px 10px;
    text-align: center;
  `;

  const Img = styled.img`
    border-radius: 10px 10px 0 0;
    width: 200px;
  `;

  const BtnX = styled.button`
    background-color: red;
    border: none;
    color: white;
    position: absolute;
    width: 21px;
    height: 18px;
    /* bottom: 639px; */
    border-radius: 10px 2px 2px 2px;
  `;

  const Descriptions = styled.h2`
    font-size: 16px;
    margin-left: 10px;
  `;

  const NameStyle = styled.h2`
    font-size: 18px;
    position: absolute;
    color: #fff;
    margin-top: 165px;
    margin-left: 10px;
    -webkit-text-stroke: .8px #000;
  `

  const { id, name, status, species, gender, origin, image } = pj;
  return (
    <Card id={id}>
      <BtnX onClick={onClose}>X</BtnX>
      <Live>{status}</Live>
      <Img src={image} alt={name} />
      <NameStyle>{name}</NameStyle>
      <Descriptions>{species}</Descriptions>
      <Descriptions>{gender}</Descriptions>
      <Descriptions>{origin.name}</Descriptions>
    </Card>
  );
}
