import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {SuperheroFullInfoType} from "../shared/types/superhero-full-info.type.ts";
import type {SuperheroSummaryType} from "../shared/types/superhero-summary.type.ts";


export const heroesFull:SuperheroFullInfoType[] = [
    {
        id: 1,
        nickname: "Spider-Man",
        realName: "Peter Parker",
        description: "Friendly neighborhood hero.",
        superPower: "Spider-sense, agility, web shooting.",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Spider-Man",
    },
    {
        id: 2,
        nickname: "All Might",
        realName: "Toshinori Yagi",
        description: "Symbol of Peace.",
        superPower: "One For All — incredible strength.",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=All+Might",
    },
    {
        id: 3,
        nickname: "Batman",
        realName: "Bruce Wayne",
        description: "Dark Knight of Gotham.",
        superPower: "Peak human abilities, intelligence, gadgets.",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Batman",
    },
    {
        id: 4,
        nickname: "Iron Man",
        realName: "Tony Stark",
        description: "Genius inventor in a high-tech suit.",
        superPower: "Powered armor, flight, advanced weapons.",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Iron+Man",
    },
    {
        id: 5,
        nickname: "Wonder Woman",
        realName: "Diana Prince",
        description: "Amazon warrior and protector of justice.",
        superPower: "Super strength, combat skill, lasso of truth.",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Wonder+Woman",
    },
];


// 2) Короткі дані (тільки id, nickname, imageUrl) — теж 5 елементів
export const heroesShort:SuperheroSummaryType[] = [
    {
        id: 1,
        nickname: "Spider-Man",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Spider-Man",
    },
    {
        id: 2,
        nickname: "All Might",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=All+Might",
    },
    {
        id: 3,
        nickname: "Batman",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Batman",
    },
    {
        id: 4,
        nickname: "Iron Man",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Iron+Man",
    },
    {
        id: 5,
        nickname: "Wonder Woman",
        imageUrl: "https://placehold.co/1200x1200/111827/FFFFFF/png?text=Wonder+Woman",
    },
];
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

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export const getHeroes = createAsyncThunk<SuperheroSummaryType[]>(
    "heroes/getAll",
    async () => {
            await delay(2010)
            return heroesShort
        });

export const getHeroById = createAsyncThunk<SuperheroFullInfoType | null, number>(
    "heroes/getById",
    async (id:number) => {
        await delay(2100)
        return heroesFull.find((item:SuperheroFullInfoType) => item.id === id) ?? null
    });




















