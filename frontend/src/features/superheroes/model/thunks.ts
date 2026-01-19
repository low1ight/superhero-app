import {createAsyncThunk} from "@reduxjs/toolkit";
import type {PaginatorType} from "../../../shared/types/paginator.type.ts";
import type {SuperheroSummaryType} from "./types/superhero-summary.type.ts";
import {superheroesApi} from "../api/superheroes.api.ts";
import type {SuperheroFullInfoType} from "./types/superhero-full-info.type.ts";
import type {HeroFormValues} from "./validators/superhero.validation.ts";
import type {ImageType} from "../../../shared/types/image.type.ts";

export const getHeroes = createAsyncThunk<PaginatorType<SuperheroSummaryType>,number>(
    "heroes/getAll",
    async (pageNumber:number) => {
        return  await superheroesApi.getAll(pageNumber)
    });

export const getHeroById = createAsyncThunk<SuperheroFullInfoType | null, number>(
    "heroes/getById",
    async (id: number) => await superheroesApi.getById(id))

export const createNewHero = createAsyncThunk<SuperheroFullInfoType, HeroFormValues>(
    "heroes/createNewHero",
    async (dto: HeroFormValues) => {
        return await superheroesApi.createHero(dto)
    })

export const updateHero = createAsyncThunk<void, { id: number, dto: HeroFormValues }>(
    "heroes/updateHero",
    async ({id, dto}: { id: number, dto: HeroFormValues }) => await superheroesApi.updateHero(id, dto))

export const deleteHero = createAsyncThunk<void, number>(
    "heroes/deleteById",
    async (id: number) => await superheroesApi.deleteHero(id))


export const addHeroImage = createAsyncThunk<
    ImageType,
    { heroId: number; image: File }
>("superheroes/addHeroImage", async ({heroId, image}) => {
    return await superheroesApi.addHeroImage(heroId, image);

});

export const deleteHeroImage = createAsyncThunk<number, { superheroId:number, imgId: number }>
("superheroes/deleteHeroImage", async ({superheroId,imgId}) => {
    return await superheroesApi.deleteHeroImage(superheroId, imgId);

});