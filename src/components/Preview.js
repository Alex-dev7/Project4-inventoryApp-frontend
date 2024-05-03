import { Link } from "react-router-dom"
import CreateForm from "./CreateForm"
import { useState } from "react"


function Preview({items}){

   
    const [toggle, setToggle] = useState(false)

    function handleClick(e){
       setToggle(!toggle) 
      
    }

    return (<>
    
        <section className="preview">
        { toggle ?  <CreateForm /> : (
          <div className="qty-container">
            
            {items.filter(i => i.quantity <= 3).map((item, index) => ( 
            <Link key={index} to={`/item/${item.id}`}>
                <div>         
                      <img src={item.image} alt={item.name} />
                      <div className="text-container">
                        <p key={item.id}>{item.name}:</p>
                        <span style={{"color": "orange"}}>restock -  {item.quantity}  left</span>                  
                      </div>
                </div>
            </Link>
            
            ))}
          </div>
        )
         }
        <button id="form-toggle-btn" onClick={handleClick}>{toggle ? "x" : "add item"}</button>
    </section>
    </>
)
}

export default Preview