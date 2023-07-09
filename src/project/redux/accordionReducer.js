import { createSlice } from "@reduxjs/toolkit";


export const accordionReducer = createSlice({
    name:"accordion",

    initialState:{
        info:[]
    },

    reducers:{
        sectionData:(state, action)=>{
            state.info=[...state.info, action.payload]
        }
    }
})

export const { sectionData } = accordionReducer.actions

export default accordionReducer.reducer