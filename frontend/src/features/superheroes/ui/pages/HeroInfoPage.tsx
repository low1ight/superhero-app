import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "../../../../shared/ui/Button.tsx";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {useEffect, useState} from "react";
import {ConfirmModal} from "../../../../shared/ui/ConfirmModal.tsx";
import HeroInfo from "../components/HeroInfo.tsx";
import HeroInfoSkeleton from "../skeletons/HeroInfoSekeleton.tsx";
import BackToList from "../components/BackToList.tsx";
import {deleteHero, getHeroById} from "../../model/thunks.ts";
import NotFound from "../../../../shared/ui/NotFoundPage.tsx";

function HeroesInfoPage() {

    const [open, setOpen] = useState<boolean>(false)

    const {id} = useParams()
    const heroId = Number(id)

    const navigate = useNavigate();

    const {isLoading, selected} = useAppSelector((state) => state.heroes);


    const dispatch = useAppDispatch();

    const onDelete = async () => {
        if (!selected) return;

        await dispatch(deleteHero(heroId))
        setOpen(false)
        navigate('/heroes')

    }


    useEffect(() => {
        dispatch(getHeroById(heroId))
    }, [dispatch, heroId])


    return (

        <div className="space-y-4">
            <nav className="flex items-center justify-between">
                <BackToList/>
                {!isLoading && selected ? <div>
                    <Link to={`/heroes/${id}/edit`}>
                        <Button type='button' buttonName="Edit" disabled={isLoading} variant='secondary'
                                className='mx-1.5'>
                            Edit
                        </Button>
                    </Link>
                    <Button type='button' buttonName="Delete" onClick={() => setOpen(true)} disabled={isLoading}
                            variant='danger'>
                        Delete
                    </Button>
                </div> : null}
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
                    <NotFound />}

        </div>
    )

}

export default HeroesInfoPage;