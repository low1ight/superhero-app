import HeroCard from "../components/HeroCard.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {useEffect, useState} from "react";
import HeroCardSkeleton from "../skeletons/HeroCardSkeleton.tsx";
import type {SuperheroSummaryType} from "../../model/types/superhero-summary.type.ts";
import {AddHeroFab} from "../components/AddNewHeroFab.tsx";
import {getHeroes} from "../../model/thunks.ts";


function HeroesListPage() {

    const heroes:SuperheroSummaryType[] = useAppSelector((state) => state.heroes.items);
    const isLoading = useAppSelector((state) => state.heroes.isLoading);

    const dispatch = useAppDispatch();


    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);


    useEffect(() => {
        dispatch(getHeroes(page))
            .unwrap()
            .then((res) => {
                window.scrollTo(0, 0);
                const newPagesCount = Math.max(Math.ceil(res.totalCount / 5), 1);
                setPagesCount(newPagesCount);

                if (page > newPagesCount) {
                    setPage(newPagesCount);
                }
            })
            .catch(() => {
                setPagesCount(1);
                setPage(1);
            });
    }, [dispatch, page]);

    const goPrev = () => setPage((p) => Math.max(1, p - 1));
    const goNext = () => setPage((p) => Math.min(pagesCount, p + 1));


    return (
        <div>
            <div className="cursor-pointer mt-4 grid grid-cols-1 gap-4">
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



            <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
                <button
                    onClick={goPrev}
                    disabled={page === 1 || isLoading}
                    className="cursor-pointer px-3 py-1 rounded-lg border disabled:opacity-50"
                >
                    Prev
                </button>

                {Array.from({ length: pagesCount }, (_, i) => i + 1).map((p) => (
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        disabled={p === page || isLoading}
                        className={`cursor-pointer px-3 py-1 rounded-lg border disabled:opacity-50 ${
                            p === page ? "bg-black text-white" : ""
                        }`}
                    >
                        {p}
                    </button>
                ))}

                <button
                    onClick={goNext}
                    disabled={page === pagesCount || isLoading}
                    className="cursor-pointer px-3 py-1 rounded-lg border disabled:opacity-50"
                >
                    Next
                </button>
            </div>



        </div>
    )

}

export default HeroesListPage;