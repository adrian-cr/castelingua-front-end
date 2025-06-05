import React from "react";
import "./Main.css";
import { Box, Container } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";

export default function Main() {
  return (
    <main>
      <Container id="main-wrapper">
        <Box component="img" id="logo" src="./images/isotype_indigo_seethrough.png"/>
        <SearchBar></SearchBar>
      </Container>

    </main>
  );
}
