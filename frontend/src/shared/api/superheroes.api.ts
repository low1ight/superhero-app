import type {SuperheroSummaryType} from "../types/superhero-summary.type.ts";
import {api} from "./api.ts";
import type {SuperheroFullInfoType} from "../types/superhero-full-info.type.ts";
import type {HeroFormValues} from "../../helpers/validators/superhero.validation.ts";


export const superheroesApi = {
    async getAll():Promise<SuperheroSummaryType[]> {
        const result =  await api.get("/superheroes")
         return result.data
    },

    async getById(id:number):Promise<SuperheroFullInfoType | null> {
        const result =  await api.get(`/superheroes/${id}`)
        return result.data
    },

    async createHero(dto:HeroFormValues):Promise<SuperheroFullInfoType> {
        const result =  await api.post(`/superheroes`, dto)
        return result.data
    },

    async deleteHero(id:number):Promise<void>{
         await api.delete(`/superheroes/${id}`)
    },

    async updateHero(id:number,dto:HeroFormValues):Promise<void> {
          await api.put(`/superheroes/${id}`, dto)

    }
}