import {Link} from "react-router-dom";
import Button from "../components/ui/Button.tsx";

function HeroesInfoPage() {
    return (
        <div className="space-y-4">
            <nav className="flex items-center justify-between">
                <Link to="/heroes" className="inline-block text-blue-600 hover:underline">
                    ← Return to the list
                </Link>
                <div>
                    <Button type='button' variant='primary'>
                        Edit
                    </Button>
                    <Button type='button' variant='danger'>
                        Delete
                    </Button>
                </div>
            </nav>


            <div className="grid gap-6 md:grid-cols-[280px_1fr] rounded-xl border bg-white p-4">

                <div className="self-start h-fit overflow-hidden rounded-xl border bg-gray-100">
                    <img
                        src={'https://www.dexerto.com/cdn-image/wp-content/uploads/2024/02/21/all-might-my-hero-academia.jpg?width=1200&quality=60&format=auto'}
                        alt={'test'}
                        className="h-60 w-full object-cover block"
                    />
                </div>


                <div>
                    <h1 className="text-2xl font-bold">Test name!</h1>
                    <p className="mt-1 text-gray-600">
                        <span className="font-medium">Real name:</span> AllMight
                    </p>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Descriotion:</h2>
                        <p className="mt-1 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolore eius ex exercitationem incidunt iure iusto modi omnis perspiciatis, similique. Cum exercitationem, illo minus molestias natus, nobis perspiciatis quis quisquam quod repellendus, reprehenderit sapiente velit voluptates! Animi deleniti, error exercitationem expedita explicabo illo labore laboriosam laborum magnam quisquam recusandae repellat repellendus repudiandae, sapiente sint! Accusamus delectus, ducimus earum fugit iure laboriosam, minus nisi non placeat, ratione repellendus soluta tempore voluptates. Deserunt ex illo ipsam laboriosam laborum odio ratione sapiente sequi sint vitae? Atque ducimus enim exercitationem expedita ipsam iste laborum, nobis nostrum odio quam quasi quo saepe sit totam voluptatum.</p>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Power:</h2>
                        <p className="mt-1 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur minima perferendis porro quos, sint voluptates? Aut beatae debitis delectus error impedit in libero magni maxime reiciendis voluptatibus! A, consectetur deserunt. Dicta doloremque enim fuga fugit hic ipsum natus nesciunt nulla omnis perferendis perspiciatis placeat quae quo sapiente sit vitae, voluptatum!</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeroesInfoPage;