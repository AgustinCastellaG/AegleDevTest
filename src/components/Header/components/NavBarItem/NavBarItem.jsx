import React from 'react'
import arrowDown from '../../../../assets/arrow-down.svg'
import './NavBarItem.scss'

const NavBarItem = ({ children, isBeta, isDropdown }) => {
  return (
    <div className='nav-bar-item-container'>
      <div className='nav-bar-item-text'>{ children }</div>
      { isBeta &&
        <div className='beta-container'>
          <div className='beta-text'>Beta</div>
        </div>
      }
      { isDropdown &&
        <div className='dropdown-icon-container'>
          <img className='dropdown-icon' src={ arrowDown } alt="arrow-down-icon" />
        </div>
      }
    </div>
  )
}

export default NavBarItem