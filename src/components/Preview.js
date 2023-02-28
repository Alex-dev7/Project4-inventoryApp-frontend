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
            
            {items.filter(i => i.quantity <= 3).map((item) => ( <>
            <div>
                <img src={item.image} alt={item.name} />
                <p key={item.id}>{item.name}:</p>
                <span style={{"color": "green"}}>restock - only {item.quantity} left</span>
            </div>

            </>
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