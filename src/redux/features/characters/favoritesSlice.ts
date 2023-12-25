import { createSlice } from  "@reduxjs/toolkit";
import {AppState} from "@/redux/store"

export interface CharactersSlice {
    
    favorites: Array<object>
    
}
const initialState: CharactersSlice = {
    
    favorites: [],
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
    
        addToFavorites(state, action) {
            const character = action.payload;
            state.favorites.push(character);
        },
        removeFromFavorites(state, action) {
            const character = action.payload;
            state.favorites = state.favorites.filter((id) => id !== character.id);
        },
        
    }
})

export const { addToFavorites, removeFromFavorites} = favoritesSlice.actions
export const  getFavoritesCharacters = (state: AppState) =>  state.favorites.favorites;


export default favoritesSlice;