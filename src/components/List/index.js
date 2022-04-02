import React from 'react'
import { styled } from '../../stitches.config'

import piece1 from './../../assets/piece1.png'
import piece2 from './../../assets/piece2.png'
import piece3 from './../../assets/piece3.png'
import piece4 from './../../assets/piece4.png'
import piece5 from './../../assets/piece5.png'
import piece6 from './../../assets/piece6.png'
import piece7 from './../../assets/piece7.png'
import piece8 from './../../assets/piece8.png'

const projects = [
  {
    image: piece1,
    id: 1
  },
  {
    image: piece2,
    id: 2
  },
  {
    image: piece3,
    id: 3
  },
  {
    image: piece4,
    id: 4
  },
  {
    image: piece5,
    id: 5
  },
  {
    image: piece6,
    id: 6
  },
  {
    image: piece7,
    id: 7
  },
  {
    image: piece8,
    id: 8
  }
]

export const StyledList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  gap: '16px',
  height: '100%',
  padding: '32px',
  'img':{
    width: '100px',
  }
})


const List = () => {
  return (
    <StyledList>
      {projects.map((e) => 
       <img src={e.image} alt='puzzle-piece' key={e.id}/>
      )}
    </StyledList>
  )
}

export default List