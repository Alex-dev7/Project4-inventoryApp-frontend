import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import '../App.scss'
import { useState, useEffect } from "react";
import { Props } from "../App";


const Index = (props) => {
    const textProp =  Props()
    const items = useLoaderData()
    const [filteredItems, setFilteredItmes] = useState(items)


    useEffect( () => {
         function filterData(){
            if(textProp === "" || textProp === undefined || textProp === null || textProp === "All"){
                setFilteredItmes(items)
                console.log("step 1")
            } else{
               
                const result = items.filter(item => item.department === textProp)
                setFilteredItmes(result)
                console.log(result)
                console.log("step 2")
            }
        }

        filterData()
    }, [items, textProp])    

    console.log(textProp)
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
        
       
        {filteredItems.map( item => <Item key={item.id} item={item} /> )}
        </table>
    </section>
</>
    )
  };
  
  export default Index;