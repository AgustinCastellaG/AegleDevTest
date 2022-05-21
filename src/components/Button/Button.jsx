import React from 'react'
import './Button.scss'

const Button = ({ primary, onClick, styles, children }) => {
  return (
    <button className={`button ${primary ? 'primary': 'secondary'}`} style={styles} onClick={onClick}>{ children }</button>
  )
}

export default Button