import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, catchPokemon } from '../../store/mainSlice'
import { List, Button } from 'antd'
import CardPokemon from '../../components/cardPokemon/CardPokemon'

const MainPage = () => {
    const { pokemons, caughtPokemons } = useSelector(state => state.main)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    const handleCatch = (pokemon) => {
        dispatch(catchPokemon(pokemon))
    }

    const isCaught = (pokemon) => {
        return caughtPokemons.some(p => p.name === pokemon.name)
    }

    return (
        <div>
            <h1 style={{color: 'white'}}>Pokemons</h1>
            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={pokemons}
                renderItem={(item) => (
                    <List.Item>
                        <CardPokemon data={item} caught={isCaught(item)} />
                        <Button onClick={() => handleCatch(item)}>Catch</Button>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default MainPage