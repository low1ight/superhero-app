import {Link, useParams} from "react-router-dom";
import Button from "../components/ui/Button.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {getHeroById} from "../store/heroesSlice.ts";
import {useEffect} from "react";

function HeroesInfoPage() {


    const {id} = useParams()
    const heroId = Number(id)

    const {isLoading,selected} = useAppSelector((state) => state.heroes);


    const dispatch = useAppDispatch();


   useEffect(() => {
       dispatch(getHeroById(heroId))
   },[dispatch,heroId])



   if(isLoading) return <div>LOADING</div>
   if(!selected) return <div>404 :(</div>


    return (


        <div className="space-y-4">
            <nav className="flex items-center justify-between">
                <Link to="/heroes" className="inline-block text-blue-600 hover:underline">
                    ← Return to the list
                </Link>
                <div>
                    <Button type='button' disabled={isLoading} variant='secondary' className='mx-1.5'>
                        Edit
                    </Button>
                    <Button type='button' disabled={isLoading} variant='danger'>
                        Delete
                    </Button>
                </div>
            </nav>


            <div className="grid gap-6 md:grid-cols-[280px_1fr] rounded-xl border bg-white p-4">

                <div className="self-start h-fit overflow-hidden rounded-xl border bg-gray-100">
                    <img
                        src={selected.imageUrl}
                        alt={selected.nickname}
                        className="h-60 w-full object-cover block"
                    />
                </div>


                <div>
                    <h1 className="text-2xl font-bold">{selected.nickname}</h1>
                    <p className="mt-1 text-gray-600">
                        <span className="font-medium">Real name:</span> {selected.realName}
                    </p>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Description:</h2>
                        <p className="mt-1 text-gray-700">{selected.description}</p>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Power:</h2>
                        <p className="mt-1 text-gray-700">{selected.superPower}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeroesInfoPage;