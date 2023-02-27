import { Link } from "react-router-dom"

function Home(){

    return (<>
        <div>
            <h1>
                Welcome
            </h1>
            <Link to="dashboard/">
                <button>DASHBOARD</button>
            </Link>
        </div>
    
    </>)
}

export default Home