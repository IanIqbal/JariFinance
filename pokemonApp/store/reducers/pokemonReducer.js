import { GET_POKEMONS, GET_SELECTED_POKEMON, GET_PAGE_DONE } from "../actions/actionType";


const initialState = { pokemons: [], selectedPokemon: {} , page:1}

export default function pokemonReducer(state = initialState, action) {


    switch (action.type) {
        case GET_POKEMONS:

            return {
                ...state,
                pokemons: action.payload
            }

        case GET_SELECTED_POKEMON:

            return {
                ...state,
                selectedPokemon: action.payload
            }

        case GET_PAGE_DONE:

                return {
                    ...state,
                    page: action.payload
                }
        default:
            return state;
    }
}