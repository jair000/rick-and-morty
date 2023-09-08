import Card from "./Card";
import { CardsStyle } from "./CardsCss";

export default function Cards({ characters, onClose }) {
  const cartasStyle = {
    border: "1px solid #fff",
  };

  return (
    <CardsStyle>
      {characters.map(pj => {
        return (
          <Card key={pj.id} pj={pj} onClose={onClose} style={cartasStyle} />
        );
      })}
    </CardsStyle>
  );
}
