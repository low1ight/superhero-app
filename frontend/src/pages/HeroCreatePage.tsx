import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const heroSchema = z.object({
    nickname: z
        .string()
        .min(3, "Nickname must be at least 3 characters")
        .max(30, "Nickname must be max 30 characters"),
    realName: z
        .string()
        .min(2, "Real name must be at least 2 characters")
        .max(30, "Real name must be max 30 characters"),
    originDescription: z
        .string()
        .min(5, "Origin description be at least 5 characters")
        .max(300, "Origin description must be max 300 characters"),
    superpower: z
        .string()
        .min(5, "Origin description be at least 5 characters")
        .max(100, "Origin description must be max 100 characters"),
    catchPhrase: z
        .string()
        .min(5, "Origin description be at least 5 characters")
        .max(50, "Origin description must be max 50 characters"),
});

type HeroFormValues = z.infer<typeof heroSchema>;



function HeroCreatePage() {


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<HeroFormValues>({
        resolver: zodResolver(heroSchema),
        defaultValues: {
            nickname: "",
            realName: "",
            originDescription:"",
            superpower: "",
            catchPhrase: "",
        },
    });

    const onSubmit = async (data: HeroFormValues) => {
        console.log("FORM DATA:", data);

        // імітація запиту
        await new Promise((r) => setTimeout(r, 600));

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md space-y-4 rounded-xl border bg-white p-4"
        >
            <div>
                <label className="block text-sm font-medium">Nickname</label>
                <input
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                    placeholder="Spiderman"
                    {...register("nickname")}
                />
                {errors.nickname && (
                    <p className="mt-1 text-sm text-red-600">{errors.nickname.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium">Real name</label>
                <input
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                    placeholder="Peter Parker"
                    {...register("realName")}
                />
                {errors.realName && (
                    <p className="mt-1 text-sm text-red-600">{errors.realName.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium">Origin Description</label>
                <textarea
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                    placeholder="desc.."
                    {...register("originDescription")}
                />
                {errors.originDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.originDescription.message}</p>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium">Superpower</label>
                <textarea
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                    placeholder="power"
                    {...register("superpower")}
                />
                {errors.superpower && (
                    <p className="mt-1 text-sm text-red-600">{errors.superpower.message}</p>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium">catchPhrase</label>
                <textarea
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                    placeholder="desc.."
                    {...register("catchPhrase")}
                />
                {errors.catchPhrase && (
                    <p className="mt-1 text-sm text-red-600">{errors.catchPhrase.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60"
            >
                {isSubmitting ? "Saving..." : "Save"}
            </button>
        </form>
    );

}

export default HeroCreatePage;