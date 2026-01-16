import {useParams} from "react-router-dom";

function HeroEditPage() {

    const {id} = useParams();


    return (
        <div>
            EDIT HERO PAGE {id}
        </div>
    )

}

export default HeroEditPage;