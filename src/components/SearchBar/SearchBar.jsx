import { useState } from "react";
import { BtnStyle, InputStyle, Search } from "./searchBarCss";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = event => {
    setId(event.target.value);
  };

  return (
    <Search>
      <InputStyle
        type="text"
        placeholder="Ingresa el ID"
        value={id}
        onChange={handleChange}
      />
      <BtnStyle onClick={() => onSearch(id)}>Agregar</BtnStyle>
    </Search>
  );
}
