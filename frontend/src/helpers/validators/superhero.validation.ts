import {z} from "zod";

export const heroSchema = z.object({
    nickname: z
        .string()
        .min(2, "Nickname must be at least 2 characters")
        .max(30, "Nickname must be max 30 characters"),
    realName: z
        .string()
        .min(2, "Real name must be at least 2 characters")
        .max(30, "Real name must be max 30 characters"),
    originDescription: z
        .string()
        .min(10, "Origin description must be at least 10 characters")
        .max(500, "Origin description must be max 500 characters"),
    superPower: z
        .string()
        .min(2, "Super power must be at least 2 characters")
        .max(100, "Super power must be max 100 characters"),
    catchPhrase: z
        .string()
        .min(2, "Catch phrase must be at least 2 characters")
        .max(100, "Catch phrase must be max 100 characters"),
});

export const defaultValues = {
    nickname: "",
    realName: "",
    originDescription:"",
    superPower: "",
    catchPhrase: "",
}

export type HeroFormValues = z.infer<typeof heroSchema>;