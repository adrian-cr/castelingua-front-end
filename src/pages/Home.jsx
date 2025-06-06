import React, { Component } from 'react'
import HomeNavBar from '../components/HomeNavbar'
import Main from '../components/Main'
export default class Home extends Component {
  render() {
    return (
      <>
      <HomeNavBar></HomeNavBar>
      <Main></Main>
      </>
    )
  }
}
