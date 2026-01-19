import {createSlice} from "@reduxjs/toolkit";
import type {SuperheroFullInfoType} from "./types/superhero-full-info.type.ts";
import type {SuperheroSummaryType} from "./types/superhero-summary.type.ts";

import {addHeroImage, createNewHero, deleteHeroImage, getHeroById, getHeroes} from "./thunks.ts";


type HeroesState = {
    isLoading: boolean,
    items: SuperheroSummaryType[],
    selected: SuperheroFullInfoType | null,
    error: string | null,
}

const initialState: HeroesState = {
    isLoading: false,
    items: [],
    selected: null,
    error: null,
}


const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        {
            builder
                .addCase(getHeroes.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(getHeroes.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.items = action.payload.items;
                })
                .addCase(getHeroes.rejected, (state) => {
                    state.isLoading = false;
                    state.error = "500";
                })
                .addCase(getHeroById.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(getHeroById.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.selected = action.payload;
                })
                .addCase(getHeroById.rejected, (state) => {
                    state.isLoading = false;
                    state.error = "500";
                })
                .addCase(createNewHero.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(createNewHero.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.selected = action.payload;
                })
                .addCase(createNewHero.rejected, (state) => {
                    state.isLoading = false;
                    state.error = "500";
                })
                .addCase(addHeroImage.fulfilled, (state, action) => {
                    state.isLoading = false;
                    if (!state.selected) return;
                    state.selected.imagesSet.push(action.payload);
                })
                .addCase(deleteHeroImage.fulfilled, (state, action) => {
                    state.isLoading = false;
                    if (!state.selected) return;
                    state.selected.imagesSet = state.selected.imagesSet.filter(image => image.id !== action.payload);
                })


        }
    }

})

export const heroesReducer = heroesSlice.reducer;






















