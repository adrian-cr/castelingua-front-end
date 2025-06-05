import React from "react";
import "./DrawerSearchBar.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export default function SearchBar() {
  return (
    <Container id="search-bar-2">
      <TextField id="search-field-2" variant="filled" size="small" placeholder="Escriba aquí una palabra" fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          }
        }}
      />
      <button id="search-button-2">
        <img src="./images/search.svg"/>
      </button>
    </Container>
  );
}
