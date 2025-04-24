import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemons = createAsyncThunk(
    'getPokemons',
    async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        const pokemons = response.data.results

        const detailedPokemons = await Promise.all(
            pokemons.map(async (pokemon) => {
                const details = await axios.get(pokemon.url)
                return { ...pokemon, details: details.data }
            })
        )

        return detailedPokemons
    }
)

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        pokemons: [],
        status: '',
        caughtPokemons: []
    },
    reducers: {
        catchPokemon: (state, action) => {
            state.caughtPokemons.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPokemons.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getPokemons.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.pokemons = action.payload
        })
        .addCase(getPokemons.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const { catchPokemon } = mainSlice.actions
export default mainSlice.reducer