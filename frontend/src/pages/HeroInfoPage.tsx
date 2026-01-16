import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "../components/ui/Button.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {getHeroById} from "../store/heroesSlice.ts";
import {useEffect, useState} from "react";
import {ConfirmModal} from "../components/ui/ConfirmModal.tsx";

function HeroesInfoPage() {

    const [open, setOpen] = useState<boolean>(false)
    const {id} = useParams()
    const heroId = Number(id)

    const navigate = useNavigate();

    const {isLoading,selected} = useAppSelector((state) => state.heroes);


    const dispatch = useAppDispatch();

    const onDelete = async () => {
        if(!selected) return;

        console.log('delete')

        setOpen(false)
        navigate('/heroes')

    }


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
                    <Button type='button' onClick={() => setOpen(true)} disabled={isLoading} variant='danger'>
                        Delete
                    </Button>
                </div>
            </nav>

            <ConfirmModal
                open={open}
                title="Delete the Hero?"
                description="This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
                loading={isLoading}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
            />


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