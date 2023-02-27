import { Link, useLoaderData, Form } from "react-router-dom"  
import { useState } from "react"
import placeholderImage from'./tool-kit.png'
const ShowItem = () => {
    const item = useLoaderData()

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(!toggle)

    return (<>
        <div className="show-content-container">
            <div className="a-side">
               <span>ID:<p> {item.id}</p></span>
                <span>Item: <h3>{item.name}</h3></span>
                <span>Department: <h3>{item.department}</h3></span>
                <span>Details:<p>{item.details}</p></span> 
                <span>Qty:<p>{item.quantity}</p></span>
                <span>Location:<h3>{item.location}</h3></span>
                <div className='buttons-container'>
                    <Link to={"/"} >
                        <button>back</button>
                    </Link>
                    <button onClick={handleToggle}>{toggle ? "x" : <span>&#9881;</span>}</button>  
                </div>
                            
            </div>
            <div className="b-side">
              
                {item.image ? <img src={item.image} alt={item.name} /> :  <img src={placeholderImage} alt="placeholder icon" />}
                <Form action={`/delete/${item.id}`} method="post">
                    <button id="delete">delete item</button>
                </Form>
            </div>
        
            {toggle ? <Form className="update-form" action={`/update/${item.id}`} method="put" encType="multipart/form-data">
                <input type="text" name="name" placeholder="item name"  defaultValue={item.name}/>
                <input type="number" name="quantity" placeholder="qty" defaultValue={item.quantity}/>
                <textarea name="details" rows="2" cols="33" placeholder="details" defaultValue={item.details}/>
                { item.image ? "" : <input type="file" name="image"/>}
                <select id="department" name="department" required defaultValue={item.department}>
                         <option >Choose a department</option>
                        <option value="Electric">Electrical</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Networking">Networking</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Tools">Tools</option>
                </select>
                <select id="location" name="location" required defaultValue={item.location}>
                         <option >Choose a location</option>
                        <option value="A-1">A-1</option>
                        <option value="B-1">B-1</option>
                        <option value="C-1">C-1</option>
                        <option value="D-1">D-1</option>
                        <option value="E-1">E-1</option>
                        <option value="G-1">F-1</option>
                    </select>
                
                <button onClick={handleToggle}>update</button>
            </Form> : null}

        </div>
        </>
    )
}

export default ShowItem