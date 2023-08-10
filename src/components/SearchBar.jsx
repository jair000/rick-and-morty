import {useState} from 'react';

export default function SearchBar({onSearch}) {

   // No valida los IDs, solo muestra el valor del searchBar
   const [valorSearchBar, IngresarValorSearchBar] = useState('')

   const ChangeInputValue = event => {
      IngresarValorSearchBar(event.target.value)
   }

   const onSearchID = onSearch(valorSearchBar)
   return (
      <div>
         <input type='search' value={valorSearchBar} onChange={ChangeInputValue}/>
         <button onBeforeInput={onSearchID}>Agregar</button>
      </div>
   );
}
