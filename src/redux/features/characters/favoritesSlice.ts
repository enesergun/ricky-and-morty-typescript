import { createSlice, current, PayloadAction } from  "@reduxjs/toolkit";
import {AppState} from "@/redux/store"

export interface CharactersSlice {
    favorites: Array<any>
    currentPage: number;
    pageSize: number;
}
const initialState: CharactersSlice = {
    favorites: [],
    currentPage: 1,
    pageSize: 20,
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
            state.favorites = state.favorites.filter(element => element. id !== character.id)
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
          },
        
    }
})

export const { addToFavorites, removeFromFavorites, setCurrentPage} = favoritesSlice.actions
export const  getFavoritesCharacters = (state: AppState) =>  state.favorites.favorites;
export const getPaginatedFavorites = (state: AppState): any => {
    
    const startIndex = (state.favorites.currentPage - 1) * state.favorites.pageSize;
    const endIndex = startIndex + state.favorites.pageSize;
    const totalPage = Math.ceil(state.favorites.favorites.length / Number(state.favorites.pageSize))
    const firstPage = state.favorites.currentPage
    const info = {
        count: state.favorites.favorites,
        pages: totalPage,
        next: state.favorites.currentPage !== totalPage,
        prev: firstPage !== 1,
      }
    return {favorites:state.favorites.favorites.slice(startIndex, endIndex), info};
  };
  


export default favoritesSlice;