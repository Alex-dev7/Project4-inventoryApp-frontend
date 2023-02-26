import { Link, useLoaderData, Form } from "react-router-dom"  

const ShowItem = () => {
    const item = useLoaderData()

    return (<>
        <div>
            <span>{item.id}</span>
            <h3>{item.name}</h3>
            <h3>{item.department}</h3>
            <p>{item.details}</p>
            <p>{item.quantity}</p>
            <span>{item.location}</span>
            <img src={item.image} alt={item.name} />
            <Link to={"/"} >
                <button>back</button>
            </Link>
        </div>
        <div>
            <Form  action={`/update/${item.id}`} method="put" encType="multipart/form-data">
                <input type="text" name="name" placeholder="item name"  defaultValue={item.name}/>
                <input type="number" name="quantity" placeholder="qty" defaultValue={item.quantity}/>
                <label for="department">Choose a department:</label>
                <select id="department" name="department" defaultValue={item.department}>
                    <option value="Electric">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Networking">Networking</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Tools">Tools</option>
                </select>
                
                {/* <input type="file" name="image" onChange={handleChange} /> */}
                <input type="text" name="details" placeholder="details" defaultValue={item.details}/>
                <input type="text" name="location" placeholder="location" defaultValue={item.location}/>
                <button>create</button>
            </Form>
            <Form action={`/delete/${item.id}`} method="post">
                <button>delete</button>
            </Form>
        </div>
        </>
    )
}

export default ShowItem