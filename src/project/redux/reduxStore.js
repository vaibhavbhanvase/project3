import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from "./accordionReducer";

export const AccordionStore = configureStore({
   reducer:{
    accordion:accordionReducer
   }
})