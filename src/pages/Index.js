import { useLoaderData } from "react-router-dom";
import Item from "../components/Item";

const Index = (props) => {

    const items = useLoaderData()


    return (<>
        {items.map( item => <Item key={item.id} item={item} /> )}
    </>)


  };
  
  export default Index;