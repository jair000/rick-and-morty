export default function Card({pj, onClose}) {

   const {id, name,status,species,gender,origin,image} = pj
   return (
      <div id={id}>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
