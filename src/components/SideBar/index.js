import React from 'react'
import List from '../List'
import { styled } from '../../stitches.config'

export const StyledBar = styled('aside', {
  backgroundColor: "#ebebeb",
  height: '100vh',
  borderBottom: '1px solid gray',
  zIndex: 2,
})

const SideBar = () => {
  return (
    <StyledBar>
      <List />
    </StyledBar>
  )
}

export default SideBar