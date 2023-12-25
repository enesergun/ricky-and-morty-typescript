import { createSlice } from  "@reduxjs/toolkit";
import {AppState} from "@/redux/store"
export interface CharactersSlice {
    residents: Array<object>;
    testArr: any
    
}
const initialState: CharactersSlice = {
    residents: [],
    testArr: []
}

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharactersInResidentsList(state, action) {
            state.residents = action.payload
        },
        updateTest(state, action) {
            state.testArr = action.payload
        }
       
        
    }
})

export const {setCharactersInResidentsList, updateTest} = charactersSlice.actions
export const  getCharactersInResidentsList = (state: AppState) =>  state.characters.residents;


export default charactersSlice;