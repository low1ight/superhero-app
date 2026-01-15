import {Link} from "react-router-dom";

type HeroCardType = {
    name: string;
    imgUrl: string;
    id: number;
}


export function HeroCard({id, name, imgUrl}: HeroCardType) {
    return (
        <Link to={`/heroes/${id}`}>

            <figure className="overflow-hidden cursor-pointer rounded-xl border bg-white shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                        src={imgUrl}
                        alt={name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>

                <figcaption className="mx-auto p-3 text-bas font-semibold text-center truncate">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis ea ipsam laboriosam nobis pariatur quis quo saepe! Aspernatur atque autem beatae blanditiis deleniti doloribus dolorum ea eligendi enim esse exercitationem facere fugit harum illo ipsa iure mollitia nam neque placeat quidem rem reprehenderit sapiente tempore, temporibus vero. A accusantium animi, eos excepturi facilis laboriosam, necessitatibus nihil officia possimus provident quas quasi reiciendis sequi sit suscipit temporibus tenetur voluptate! Impedit necessitatibus rem saepe? Ab accusantium adipisci aut blanditiis dolorum earum eligendi laboriosam numquam obcaecati omnis porro qui ratione similique, soluta sunt suscipit tenetur! Cupiditate dolorem doloribus dolorum eius eligendi error expedita fuga illo impedit inventore ipsam, ipsum itaque minima modi nemo neque nihil nisi obcaecati odio praesentium provident, quaerat quo reprehenderit saepe sint suscipit tempora tenetur velit voluptatem voluptates! A aspernatur at consequuntur cumque deleniti, dignissimos ducimus ea earum incidunt iure, libero minus molestias officia optio placeat porro quia repellat rerum sint voluptatem? Animi aperiam debitis deserunt eum eveniet facere ipsum magni molestiae odit omnis quidem quis quo quod ratione reiciendis repellat saepe suscipit temporibus, tenetur veniam vitae voluptas voluptates! Consectetur dolorum iusto praesentium repudiandae. Aliquam consectetur consequuntur debitis deserunt labore laborum, nesciunt, numquam placeat porro, quia soluta vitae voluptatibus.</span>
                </figcaption>
            </figure>
        </Link>
    )

}

export default HeroCard;