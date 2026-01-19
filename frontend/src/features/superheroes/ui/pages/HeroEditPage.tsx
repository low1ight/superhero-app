import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {FormProvider, useForm} from "react-hook-form";
import {defaultValues, type HeroFormValues, heroSchema} from "../../model/validators/superhero.validation.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import BackToList from "../components/BackToList.tsx";
import {SuperHeroForm} from "../components/SuperHeroForm.tsx";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getHeroById, updateHero} from "../../model/thunks.ts";
import NotFound from "../../../../shared/ui/NotFoundPage.tsx";

function HeroEditPage() {

    const dispatch = useAppDispatch();

    const {id} = useParams()
    const currentSuperHeroId = Number(id)

    const navigate = useNavigate();

    const {selected} = useAppSelector((state) => state.heroes);

    useEffect(() => {
        if(!selected || selected?.id !== currentSuperHeroId) {
            dispatch(getHeroById(currentSuperHeroId))
        }

    }, [dispatch, currentSuperHeroId, selected]);

     const form = useForm<HeroFormValues>({
        resolver: zodResolver(heroSchema),
        defaultValues: selected ? {
            nickname: selected.nickname,
            realName: selected.realName,
            originDescription:selected.originDescription,
            superPower: selected.superPower,
            catchPhrase: selected.catchPhrase,
        } : defaultValues,
    });

    const onSubmit = async (data: HeroFormValues) => {
        try {
            await dispatch(updateHero({id:currentSuperHeroId, dto:data}))
            navigate(`/heroes/${currentSuperHeroId}`);
        } catch (error) {
            console.log("Updating hero failed:", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <BackToList/>
            </div>
            {selected ?
                <FormProvider {...form}>
                <SuperHeroForm currentImage={selected.imageUrl} submitButtonName="Update" onSubmit={onSubmit}/>
            </FormProvider> : <NotFound />}



        </div>
    );

}

export default HeroEditPage;