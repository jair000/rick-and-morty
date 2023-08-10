import Card from "./Card";

export default function Cards({ characters }) {
  return (
    <div>
      {characters.map((pj) => {
        return (
          <Card
            key={pj.id}
            pj={pj}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
