import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "../components/ui/Button.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {getHeroById} from "../store/heroesSlice.ts";
import {useEffect, useState} from "react";
import {ConfirmModal} from "../components/ui/ConfirmModal.tsx";
import HeroInfo from "../components/heroes/HeroInfo.tsx";
import HeroInfoSkeleton from "../components/heroes/HeroInfoSekeleton.tsx";

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

            {isLoading ?
                <HeroInfoSkeleton/> :
                selected ?
                    <HeroInfo {...selected} /> :
                    <div>404 :(</div>}

        </div>
    )

}

export default HeroesInfoPage;