import React from 'react'
import SideBar from '../../components/SideBar'
import Piece from '../../components/Piece'
import Header from '../../components/Header'

import { styled } from '../../stitches.config'

export const StyledHome = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'relative',
  display: 'flex'
})

export const StyledContainer = styled('div', {
  backgroundColor: "red",
  width: '100%',
  height: '100vh',
})

export const StyledBoard = styled('div', {
  backgroundColor: "white",
  textAlign: "center",
  width: '100%',
  height: '92vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})


const Home = () => {
  return (
    <StyledHome>
      <SideBar /> 
      <StyledContainer>
        <Header />
        <StyledBoard>
            <Piece />
        </StyledBoard>
      </StyledContainer>
    </StyledHome>
  )
}

export default Home