import React, { Component } from 'react'
import HomeNavBar from '../components/HomeNavBar/HomeNavBar'
import Main from '../components/Main/Main'
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
