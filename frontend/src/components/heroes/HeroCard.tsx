import {Link} from "react-router-dom";

type HeroCardType = {
    nickname: string;
    imgUrl: string;
    id: number;
}


export function HeroCard({id, nickname, imgUrl}: HeroCardType) {
    return (
        <Link to={`/heroes/${id}`}>

            <figure className="overflow-hidden cursor-pointer rounded-xl border bg-white shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                        src={imgUrl}
                        alt={nickname}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>

                <figcaption className="mx-auto p-3 text-bas font-semibold text-center truncate">
                    <span>{nickname}</span>
                </figcaption>
            </figure>
        </Link>
    )

}

export default HeroCard;