import React from 'react'
import { headerStyle } from '../Styles'

const Header = () => {
  return (
    <div style={headerStyle}>
        <h1 style={{textAlign: 'center', marginTop: '40px'}}>Tic Tac Toe Game</h1>
    </div>
  )
}

export default Header;