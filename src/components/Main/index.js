import React from "react";
import "./Main.css";
import SearchBar from "./SearchBar";
import { Box, Container } from "@mui/material";

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
