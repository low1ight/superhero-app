import HeroCard from "../components/heroes/HeroCard.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {getHeroes, type Hero} from "../store/heroesSlice.ts";
import {useEffect} from "react";


function HeroesListPage() {

    const heroes:Hero[] = useAppSelector((state) => state.heroes.items);
    const isLoading = useAppSelector((state) => state.heroes.isLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getHeroes())
    },[dispatch]);


   if(isLoading) return <div>LOADING</div>

    return (
        <div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {heroes.map((item:Hero) => <HeroCard
                    key={item.id}
                    id={item.id}
                    imgUrl={item.imageUrl}
                    nickname={item.nickname}/>)}
            </div>

        </div>
    )

}

export default HeroesListPage;