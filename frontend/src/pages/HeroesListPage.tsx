import HeroCard from "../components/heroes/HeroCard.tsx";

const arr = Array.from({length: 400});


function HeroesListPage() {
    return (
        <div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {arr.map((_, i) => <HeroCard
                    key={i}
                    id={i}
                    imgUrl={'https://www.dexerto.com/cdn-image/wp-content/uploads/2024/02/21/all-might-my-hero-academia.jpg?width=1200&quality=60&format=auto'}
                    name={'test'}/>)}
            </div>

        </div>
    )

}

export default HeroesListPage;