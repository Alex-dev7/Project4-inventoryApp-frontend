import { Link, useLoaderData } from "react-router-dom"  

const ShowItem = () => {
    const item = useLoaderData()

    return (
        <div>
            <span>{item.id}</span>
            <h3>{item.name}</h3>
            <h3>{item.department}</h3>
            <p>{item.details}</p>
            <p>{item.quantity}</p>
            <span>{item.location}</span>
            <Link to={"/"} >
                <button>back</button>
            </Link>
        </div>
    )
}

export default ShowItem