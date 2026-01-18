import {Link} from "react-router-dom";


function BackToList() {
    return (
        <Link
            to="/heroes"
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
        >
            ← Back to List
        </Link>
    )
}

export default BackToList