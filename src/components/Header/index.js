import React from 'react'
import { styled } from '../../stitches.config'

import setting from './../../assets/icons/setting.svg'
import color from './../../assets/icons/color.svg'

export const StyledHeader = styled('header', {
  backgroundColor: "#1f1f1f",
  height: '8vh',
  width:'100%',
  borderLeft: '1px solid gray',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 32px',
  gap: '8px',

  '.color-picker':{
    display: 'flex',
    gap: '4px',
    '.current-color':{
      width:'24px',
      height:'24px',
      backgroundColor: '#6C35AD',
      borderRadius: '999999px',
      border: '2px solid white'
    },
  },
  'img':{
    width:'24px',
    height:'24px',
  }
})

export const StyledButton = styled('button', {
  border: 'none',
  padding: '0 16px',
  minWidth: '124px',
  height: '32px'
})

const Header = () => {
  return (
    <StyledHeader>
      <div className='color-picker'>
        <div className='current-color'></div>
        <img src={color} alt='svg-icon'/>
      </div>
      <img src={setting} alt='svg-icon'/>
      <StyledButton>Share</StyledButton>
    </StyledHeader>
  )
}

export default Header