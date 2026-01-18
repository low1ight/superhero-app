import HeroCard from "../components/heroes/HeroCard.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {getHeroes} from "../store/heroesSlice.ts";
import {useEffect} from "react";
import HeroCardSkeleton from "../components/heroes/HeroCardSkeleton.tsx";
import type {SuperheroSummaryType} from "../shared/types/superhero-summary.type.ts";
import {AddHeroFab} from "../components/ui/AddNewHeroFab.tsx";


function HeroesListPage() {

    const heroes:SuperheroSummaryType[] = useAppSelector((state) => state.heroes.items);
    const isLoading = useAppSelector((state) => state.heroes.isLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getHeroes())
    },[dispatch]);


    return (
        <div>
            <div className="mt-4 grid grid-cols-1 gap-4">
                <AddHeroFab />
                {isLoading ?
                    Array.from({ length: 5 }).map((_, i) => (
                            <HeroCardSkeleton key={i} />))
                    :
                    heroes.map((item:SuperheroSummaryType) => <HeroCard
                    key={item.id}
                    id={item.id}
                    imgUrl={item.imageUrl}
                    nickname={item.nickname}/>)}
            </div>

        </div>
    )

}

export default HeroesListPage;