import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type Hero = {
    id: number;
    nickname: string;
    realName: string;
    description: string;
    superPower: string;
    imageUrl: string;
};

export const heroesMock: Hero[] = [
    {
        id: 1,
        nickname: "Spider-Man",
        realName: "Peter Parker",
        description: "Friendly neighborhood hero.",
        superPower: "Spider sense, agility, web shooting.",
        imageUrl: "https://placehold.co/600x400/111827/FFFFFF/png?text=Spider-Man",
    },
    {
        id: 2,
        nickname: "All Might",
        realName: "Toshinori Yagi",
        description: "Symbol of Peace.",
        superPower: "One For All — incredible strength.",
        imageUrl: "https://placehold.co/600x400/111827/FFFFFF/png?text=All+Might",
    },
];
type HeroesState = {
    isLoading: boolean,
    items: Hero[],
    selected: Hero | null,
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
                });

    }}

})

export const heroesReducer = heroesSlice.reducer;

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export const getHeroes = createAsyncThunk<Hero[]>(
    "heroes/getAll",
    async () => {
            await delay(4000)
            return heroesMock
        });


