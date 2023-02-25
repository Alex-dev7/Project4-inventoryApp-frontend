import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import { Form } from "react-router-dom";



const Index = (props) => {

    const items = useLoaderData()

    return (<>
        <h2>Add new item</h2>
        <Form action="/create" method="post"   encType="multipart/form-data">
            <input type="text" name="name" placeholder="item name" />
            <input type="number" name="quantity" placeholder="qty" />
            <input type="text" name="department" placeholder="department" />
            <input type="file" name="image" />
            <input type="text" name="details" placeholder="details" />
            <input type="text" name="location" placeholder="location" />
            <button>create</button>
        </Form>
        {items.map( item => <Item key={item.id} item={item} /> )}
    </>)


  };
  
  export default Index;