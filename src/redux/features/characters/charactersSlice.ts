import { createSlice } from  "@reduxjs/toolkit";
import {AppState} from "@/redux/store"
export interface CharactersSlice {
    residents: Array<object>
}
const initialState: CharactersSlice = {
    residents: []
}

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharactersInResidentsList(state, action) {
            state.residents = action.payload
        }
    }
})

export const {setCharactersInResidentsList} = charactersSlice.actions
export const  getCharactersInResidentsList = (state: AppState) =>  state.characters.residents;
export default charactersSlice;