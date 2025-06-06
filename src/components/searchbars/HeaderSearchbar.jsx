import { Container, TextField } from '@mui/material'
import React from 'react'

export default function HeaderSearchbar() {
  return (
    <Container id="header-search-bar">
      <TextField id="hsb-search-field" variant="filled" size="small" placeholder="Escriba aquí una palabra" fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            paddingLeft: "36px"
          }
        }}
      />
      <button id="hsb-search-button">
        <img src="./images/search.svg"/>
      </button>
    </Container>
  )
}
