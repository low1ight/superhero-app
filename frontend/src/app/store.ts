import { configureStore } from '@reduxjs/toolkit'
import {heroesReducer} from "../features/superheroes/model/heroesSlice.ts";

export const store = configureStore({
    reducer: {
        heroes: heroesReducer
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch