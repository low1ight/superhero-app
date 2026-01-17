import type {SuperheroSummaryType} from "../types/superhero-summary.type.ts";
import {api} from "./api.ts";
import type {SuperheroFullInfoType} from "../types/superhero-full-info.type.ts";


export const superheroesApi = {
    async getAll():Promise<SuperheroSummaryType[]> {
        const result =  await api.get("/superheroes")
         return result.data
    },

    async getById(id:number):Promise<SuperheroFullInfoType | null> {
        const result =  await api.get(`/superheroes/${id}`)
        return result.data
    }
}