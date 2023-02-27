import { Form } from "react-router-dom"
import './dashboard.scss'

function CreateForm(params) {

    return (
        <div className="create-form-container">
            <h2>Add new item</h2>
            <Form action="/create" method="post"   encType="multipart/form-data">
                <div>
                <input type="text" name="name" placeholder="item name" required/>
                <input type="number" name="quantity" placeholder="qty" required/>

                <input type="text" name="location" placeholder="location" required/>  
                 <input type="file" name="image" /> 
                </div>
                <div>
                    <textarea  name="details" rows="2" cols="33" placeholder="details" required />
                    <select id="department" name="department" required >
                         <option >Choose a department</option>
                        <option value="Electric">Electrical</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Networking">Networking</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Tools">Tools</option>
                    </select>                    
                </div>
                    <button>create</button> 
            </Form>
        </div>

    )
}

export default CreateForm