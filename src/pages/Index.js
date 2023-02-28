import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import '../App.scss'
import { useState, useEffect} from "react";
import { Props } from "../App";
import Preview from "../components/Preview"


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


    return ( <>

   <Preview items={filteredItems} />
    <section className="content-container">
       { items ? <table className='item-container'> 
        <tr>
            <th>ID</th>
            <th>Item</th>
            <th id="department">Department</th>
            <th>Location</th>
            <th>Qty</th>
        </tr>
        
       
        {filteredItems.map( item => <Item key={item.id} item={item} /> )}
        </table> : <div style={{"margin": "auto"}}>Loading ...</div>}
    </section>
</>
    )
  };
  
  export default Index;