import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";

import '../App.scss'





const Index = (props) => {

    const items = useLoaderData()



    return (<section className="content-container">
     
        {items.map( item => <Item key={item.id} item={item} /> )}
    </section>)


  };
  
  export default Index;