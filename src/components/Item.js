import { Link } from "react-router-dom";


const Item = ({item}) => {

    return ( 
        <>
            <tr >
                <th scope="row">{item.id}</th>
                
                <td className="table-name">
                    <Link to={`/item/${item.id}`}>
                         {item.name}
                    </Link> 
                </td>
     
                <td id="department">{item.department}</td> 
                <td>{item.location}</td>     
                <td>{item.quantity}</td>      
            </tr>
                
    </>
    )
  };
  
  export default Item;