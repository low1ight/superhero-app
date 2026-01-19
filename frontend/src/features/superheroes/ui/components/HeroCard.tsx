import {Link} from "react-router-dom";
import heroPlaceholder from '../../../../assets/hero-placeholder.png'

type HeroCardType = {
    nickname: string;
    imgUrl: string;
    id: number;
}




export function HeroCard({id, nickname, imgUrl}: HeroCardType) {

    const image = imgUrl || heroPlaceholder

    return (
        <Link to={`/heroes/${id}`} className="block group">
            <figure className="overflow-hidden cursor-pointer rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                        src={image}
                        alt={nickname}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                </div>

                <figcaption className="mx-auto p-4 text-base font-bold text-center truncate text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    <span>{nickname}</span>
                </figcaption>
            </figure>
        </Link>
    )

}

export default HeroCard;