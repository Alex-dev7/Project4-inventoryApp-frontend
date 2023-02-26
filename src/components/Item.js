import { Link } from "react-router-dom";


const Item = ({item}) => {

    return ( <>
        <div className='item-container'>
            <p>{item.id}</p>
            <Link to={`/item/${item.id}`}>
                <p>{item.name}</p>
            </Link>
            <p>{item.department}</p>
            <p>{item.location}</p>
            <p>{item.quantity}</p>
        </div>
    
    </>)
  };
  
  export default Item;