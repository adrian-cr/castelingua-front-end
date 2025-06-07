import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import "../styles/pages/Search.css"
import { Container } from '@mui/material';
import ResourceTabs from '../components/ResourceTabs';
export default class Search extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <main id="search-main">
          <h1 id="term">palabra</h1>
          <Container id="resources">
            <ResourceTabs/>
          </Container>

        </main>
      </>
    )
  }
}
