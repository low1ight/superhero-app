import type {ImageType} from "../../../../shared/types/image.type.ts";

export type SuperheroFullInfoType = {
    id: number;
    nickname: string;
    realName: string;
    originDescription: string;
    superPower: string;
    catchPhrase: string
    imageUrl: string;
    imagesSet: ImageType[];
};
