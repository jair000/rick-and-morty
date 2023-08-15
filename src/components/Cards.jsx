import { styled } from "styled-components";
import Card from "./Card";

const CardsStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const cartasStyle = {
  border: "1px solid #fff",

}

export default function Cards({ characters }) {
  return (
    <CardsStyle>
      {characters.map((pj) => {
        return (
          <Card
            key={pj.id}
            pj={pj}
            onClose={() => window.alert("Emulamos que se cierra la card")} style={cartasStyle}
          />
        );
      })}
    </CardsStyle>
  );
}
