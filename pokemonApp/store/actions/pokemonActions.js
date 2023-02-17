import axios from "axios";
import { GET_POKEMONS, GET_SELECTED_POKEMON ,GET_PAGE_DONE} from "./actionType";

const getPokemonDone = (payload) => {
    return {
        type:GET_POKEMONS,
        payload

    }
}

const getSelectedPokemonDone = (payload) => {

    return {
        type:GET_SELECTED_POKEMON,
        payload
    }
}

const getPageDone = (payload) => {

    return {
        type:GET_PAGE_DONE,
        payload
    }
}


export function getSelectedPokemon (id){
    return async (dispatch) =>{
        try {
            
            const {data} = await axios({
                url:`https://api.pokemontcg.io/v2/cards/${id}`,
                method:"get",
                headers:{
                    "X-Api-Key":"ff57f4bb-ac50-40d2-b2e6-0772fc6489b6"
                }
            })

            dispatch(getSelectedPokemonDone(data.data))
        } catch (error) {
            console.log(error);
        }
    }
}

export function getPokemons(query = "", page = 1){
    return async (dispatch) => {
        try {
            

            if(query){
                query = `&&q=name:${query}*`
            }
            
            const {data} = await axios({
                url:`https://api.pokemontcg.io/v2/cards?pageSize=20&&page=${page}${query}`,
                method:"get",
                headers:{
                    "X-Api-Key":"ff57f4bb-ac50-40d2-b2e6-0772fc6489b6"
                }
            })


            // console.log(data.data);
            
            dispatch(getPageDone(data.page))
            dispatch(getPokemonDone(data.data))
        } catch (error) {
            console.log(error);
        }
    }
}