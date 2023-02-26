import CreateForm from "./CreateForm"
import { useState } from "react"


function Preview(props){


    const [toggle, setToggle] = useState(false)

    function handleClick(e){
       setToggle(!toggle) 
       return 1
    }

    return (<section className="preview">
        
        { toggle ?  <CreateForm /> : <p>Preview</p> }
        <button id="form-toggle-btn" onClick={handleClick}>add item</button>
    </section>)
}

export default Preview