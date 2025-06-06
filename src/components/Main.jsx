import React from "react";
import "../styles/Main.css";
import { Box, Container } from "@mui/material";
import Searchbar from "./searchbars/MainSearchbar";

export default function Main() {
  return (
    <main>
      <Container id="main-wrapper">
        <Box component="img" id="logo" src="./images/isotype_indigo_seethrough.png"/>
        <Searchbar></Searchbar>
      </Container>

    </main>
  );
}
