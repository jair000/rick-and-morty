import { Carta, BtnX, Live, Img, Descriptions, NameStyle } from "./CardCss";
export default function Card({ pj, onClose }) {
  const { id, name, status, species, gender, origin, image } = pj;
  return (
    <Carta id={id}>
      <BtnX onClick={() => onClose(id)}>X</BtnX>
      <Live>{status}</Live>
      <Img src={image} alt={name} />
      <NameStyle>{name}</NameStyle>
      <Descriptions>{species}</Descriptions>
      <Descriptions>{gender}</Descriptions>
      <Descriptions>{origin.name}</Descriptions>
    </Carta>
  );
}
