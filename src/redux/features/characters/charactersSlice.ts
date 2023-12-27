import { createSlice } from  "@reduxjs/toolkit";
import {AppState} from "@/redux/store"
export interface CharactersSlice {
    residents: Array<object>;
    testArr: any;
    residentsOfLocation: {
        name: string;
        url: string;
    }
    
}
const initialState: CharactersSlice = {
    residents: [],
    testArr: [],
    residentsOfLocation: {
        name: "",
        url: ""
    }
}

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharactersInResidentsList(state, action) {
            state.residents = action.payload
        },    
        setAlreadyCalledResidentsOfLocation(state, action) {
            
            state.residentsOfLocation = action.payload
        }
       
        
    }
})

export const {setCharactersInResidentsList, setAlreadyCalledResidentsOfLocation} = charactersSlice.actions
export const  getCharactersInResidentsList = (state: AppState) =>  state.characters.residents;
export const  getAlreadyCalledResidentsOfLocation = (state: AppState) =>  state.characters.residentsOfLocation;


export default charactersSlice;