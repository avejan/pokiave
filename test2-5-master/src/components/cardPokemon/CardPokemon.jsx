import { Card, Image } from 'antd'
import React from 'react'

const CardPokemon = ({ data, caught }) => {
  return (
    <div>
        <Card 
          style={{backgroundColor: caught ? 'rgba(128, 0, 128, 0.5)' : 'rgba(0, 0, 0, 0.5)'}}
        >
            
            <Image src={data.details.sprites.other['official-artwork'].front_default} />
            <h2 style={{fontSize: '24px', color: 'white', textAlign: 'center'}}>{data.name}</h2>
        </Card>
    </div>
  )
}

export default CardPokemon