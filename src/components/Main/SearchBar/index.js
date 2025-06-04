import React from "react";
import "./SearchBar.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export default function SearchBar() {
  return (
    <Container id="search-bar">
      <TextField id="search-field" variant="filled" size="small" placeholder="Escriba aquí una palabra" fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            paddingLeft: "36px"
          }
        }}
      />
      <button id="search-button">
        <img src="./images/search.svg"/>
      </button>
    </Container>
  );
}
