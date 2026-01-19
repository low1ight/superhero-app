import type {SuperheroSummaryType} from "../model/types/superhero-summary.type.ts";
import {api} from "../../../shared/api/api.ts";
import type {SuperheroFullInfoType} from "../model/types/superhero-full-info.type.ts";
import type {HeroFormValues} from "../model/validators/superhero.validation.ts";
import type {ImageType} from "../../../shared/types/image.type.ts";
import type {PaginatorType} from "../../../shared/types/paginator.type.ts";


function toFormData(dto: HeroFormValues) {
    const formData = new FormData();

    Object.entries(dto).forEach(([key, value]) => {
        if (value === undefined || value === null) return;


        if (value instanceof File) {
            formData.append(key, value);
            return;
        }

        formData.append(key, String(value));
    });

    return formData;
}

export const superheroesApi = {
    async getAll(pageNumber:number):Promise<PaginatorType<SuperheroSummaryType>> {
        const result =  await api.get(`/superheroes?pageNumber=${pageNumber}`);
         return result.data
    },

    async getById(id:number):Promise<SuperheroFullInfoType | null> {
        const result =  await api.get(`/superheroes/${id}`)
        return result.data
    },

    async createHero(dto:HeroFormValues):Promise<SuperheroFullInfoType> {
            const result =  await api.post(`/superheroes`, dto.image ? toFormData(dto) : dto)
            return result.data


    },

    async deleteHero(id:number):Promise<void>{
         await api.delete(`/superheroes/${id}`)
    },

    async updateHero(id:number,dto:HeroFormValues):Promise<void> {
        console.log(dto)
          await api.put(`/superheroes/${id}`, dto.image ? toFormData(dto) : dto)

    },

    async addHeroImage(
        heroId: number,
        image: File
    ): Promise<ImageType> {
        const formData = new FormData();
        formData.append("image", image);
        const result = await api.post(`/superheroes/${heroId}/images`, formData);
        return result.data;
    },


     async deleteHeroImage(
        heroId: number,
        imageId: number
    ): Promise<number> {
        await api.delete(`/superheroes/${heroId}/images/${imageId}`);
        return imageId
    }
}