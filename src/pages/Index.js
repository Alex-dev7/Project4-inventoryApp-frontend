import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import '../App.scss'





const Index = (props) => {

    const items = useLoaderData()



    return ( <>
    <section className="content-container">
        <table className='item-container'> 
        <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Department</th>
            <th>Location</th>
            <th>Qty</th>
        </tr>
        
       
        {items.map( item => <Item key={item.id} item={item} /> )}
        </table>
    </section>
</>
    )
  };
  
  export default Index;