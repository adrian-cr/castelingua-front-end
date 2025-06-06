import React from "react";
import "../../styles/searchbars/DrawerSearchbar.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export default function SearchBar() {
  return (
    <Container id="drawer-search-bar">
      <TextField id="dsb-search-field" variant="filled" size="small" placeholder="Escriba aquí una palabra" fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          }
        }}
      />
      <button id="dsb-search-button">
        <img src="./images/search.svg"/>
      </button>
    </Container>
  );
}
