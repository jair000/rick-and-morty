// import {useState} from 'react';

import { styled } from "styled-components";

export default function SearchBar({onSearch}) {

   // No valida los IDs, solo muestra el valor del searchBar
   // const [valorSearchBar, IngresarValorSearchBar] = useState('')

   // const ChangeInputValue = event => {
   //    IngresarValorSearchBar(event.target.value)
   // }

   // const onSearchID = onSearch(valorSearchBar)


   // ? STYLED COMPONENTS
   const Search = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      gap: 2%;
   `

   const InputStyle = styled.input`
      padding: 20px;
      width: 20%;
      height: 40px;
      border: 3px solid #4ABAFF;
      border-radius: 10px;
      transition: .5s;
      box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.75);
      &:focus {
         border: none;
         border-bottom: 3px solid #00AFA6;
         outline: 0;
         border-radius: 0px;
      }
   `

   const BtnStyle = styled.button`
      color: white;
      font-size: 18px;
      background-color: #0085D3;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
   `
   return (
      <Search>
         <InputStyle type='search' placeholder="Ingresa el ID"/*value={valorSearchBar} onChange={ChangeInputValue}*//>
         <BtnStyle 
         // onBeforeInput={onSearchID}
         >Agregar</BtnStyle>
      </Search>
   );
}
