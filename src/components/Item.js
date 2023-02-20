import { Link } from "react-router-dom";


const Item = ({item}) => {

    return ( <>
        <div className='item-container'>
            <Link to={`/item/${item.id}`}>
                <h1>{item.name}</h1>
            </Link>
            <h2>{item.quantity}</h2>
        </div>
    
    </>)
  };
  
  export default Item;