import React from 'react'
import logo from '../../assets/logo.svg'
import Button from '../Button/Button'
import NavBarItem from './components/NavBarItem/NavBarItem'
import './Header.scss'

const Header = () => {
  return (
    <div id='header-container'>
      <img id='header-logo' src={ logo } alt="My logo" />
      <div id='nav-bar-container'>
        <NavBarItem>What is Aegle</NavBarItem>
        <NavBarItem>How Aegle Works</NavBarItem>
        <NavBarItem>Why Aegle Works</NavBarItem>
        <NavBarItem isBeta>Simulate Aegle</NavBarItem>
        <NavBarItem isDropdown>What is Aegle</NavBarItem>
      </div>
      <div id='login-contact-container'>
        <div id='contact-button'>Contact Us</div>
        <Button primary>Log in to Aegle</Button>
      </div>
    </div>
  )
}

export default Header