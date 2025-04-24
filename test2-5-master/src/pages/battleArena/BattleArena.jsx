import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Select, Button } from 'antd'
import CardPokemon from '../../components/cardPokemon/CardPokemon'

const BattleArena = () => {
    const { caughtPokemons } = useSelector(state => state.main)
    const [pokemon1, setPokemon1] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)
    const [winner, setWinner] = useState(null)

    const handleBattle = () => {
        if (pokemon1 && pokemon2) {
            const stats1 = pokemon1.details.stats.reduce((acc, stat) => acc + stat.base_stat, 0)
            const stats2 = pokemon2.details.stats.reduce((acc, stat) => acc + stat.base_stat, 0)
            setWinner(stats1 > stats2 ? pokemon1 : pokemon2)
        }
    }

    return (
        <div style={{display: 'flex',justifyContent:'center' , flexDirection: 'column', alignItems:'center'}}>
            <h1 style={{color: 'white'}}>Battle Arena</h1>
            <div>
            <Select
                placeholder="Select Pokemon 1"
                style={{ width: 200 }}
                onChange={(value) => setPokemon1(caughtPokemons.find(p => p.name === value))}
            >
                {caughtPokemons.map(pokemon => (
                    <Select.Option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                    </Select.Option>
                ))}
            </Select>
            <Select
                placeholder="Select Pokemon 2"
                style={{ width: 200, marginLeft: 20 }}
                onChange={(value) => setPokemon2(caughtPokemons.find(p => p.name === value))}
            >
                {caughtPokemons.map(pokemon => (
                    <Select.Option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                    </Select.Option>
                ))}
            </Select>
            <Button type="primary" onClick={handleBattle} style={{ marginLeft: 20 }}>
                Battle
            </Button>
            </div>
            
            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'center' ,}}>
                {pokemon1 && (
                    <div style={{ marginRight: 20 ,width: '250px', height: '300px'}}>
                        <CardPokemon data={pokemon1} caught={true}  />
                    </div>
                )}
                {pokemon2 && (
                    <div style={{width: '250px', height: '300px'}}>
                        <CardPokemon data={pokemon2} caught={true} />
                    </div>
                )}
            </div>
            {winner && (
                <div>
                    <h2 style={{color: 'white', marginTop: '40px'}}>Winner: {winner.name}</h2>
                </div>
            )}
        </div>
    )
}

export default BattleArena
