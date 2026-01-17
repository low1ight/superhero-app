import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {SuperheroFullInfoType} from "../shared/types/superhero-full-info.type.ts";
import type {SuperheroSummaryType} from "../shared/types/superhero-summary.type.ts";
import {superheroesApi} from "../shared/api/superheroes.api.ts";


type HeroesState = {
    isLoading: boolean,
    items: SuperheroSummaryType[],
    selected: SuperheroFullInfoType | null,
    error: string | null,
}

const initialState:HeroesState = {
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
                    state.items = action.payload;
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
                });


    }}

})

export const heroesReducer = heroesSlice.reducer;

export const getHeroes = createAsyncThunk<SuperheroSummaryType[]>(
    "heroes/getAll",
    async () => await superheroesApi.getAll());

export const getHeroById = createAsyncThunk<SuperheroFullInfoType | null, number>(
    "heroes/getById",
    async (id:number) => await superheroesApi.getById(id))




















