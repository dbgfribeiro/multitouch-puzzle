import React from 'react'
import Draggable from 'react-draggable';

import { styled } from '../../stitches.config'
import piece1 from './../../assets/piece1.png'

export const StyledPiece = styled('img', {
  cursor: 'grab',
  width: '100px'
})

const Piece = () => {
  return (
    <Draggable>
      <StyledPiece src={piece1} alt='puzzle-piece'/>
    </Draggable>
  )
}

export default Piece