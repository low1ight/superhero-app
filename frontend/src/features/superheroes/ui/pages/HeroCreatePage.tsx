import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useAppDispatch} from "../../../../app/hooks.ts";
import {defaultValues, type HeroFormValues, heroSchema} from "../../model/validators/superhero.validation.ts";
import BackToList from "../components/BackToList.tsx";
import {SuperHeroForm} from "../components/SuperHeroForm.tsx";
import {useNavigate} from "react-router-dom";
import {createNewHero} from "../../model/thunks.ts";


function HeroCreatePage() {

    const dispatch = useAppDispatch();

    const form = useForm<HeroFormValues>({
        resolver: zodResolver(heroSchema),
        defaultValues: defaultValues,
    });

    const navigate = useNavigate();

    const onSubmit = async (data: HeroFormValues) => {
        try {
            const superhero = await dispatch(createNewHero(data)).unwrap()
            form.reset();
            navigate(`/heroes/${superhero.id}`);
        } catch (error) {
            console.log("Create hero failed:", error);
        }

    };

    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">
                <BackToList/>
            </div>
            <FormProvider {...form}>
                <SuperHeroForm submitButtonName="Create" onSubmit={onSubmit} />
            </FormProvider>



        </div>
    );

}

export default HeroCreatePage;
