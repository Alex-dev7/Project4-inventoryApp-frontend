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
                <select id="department" name="department" required >
                         <option >Choose a deprtment</option>
                        <option value="Electric">Electrical</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Networking">Networking</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Tools">Tools</option>
                </select>  
                <input type="file" name="image" required/> 
                
                </div>
                <div>
                    <textarea  name="details" rows="2" cols="33" placeholder="details" required />
                    <select id="location" name="location" required >
                    <option >Choose a location</option>
                        <option value="A-1">A-1</option>
                        <option value="B-1">B-1</option>
                        <option value="C-1">C-1</option>
                        <option value="D-1">D-1</option>
                        <option value="E-1">E-1</option>
                        <option value="G-1">F-1</option>
                    </select>
                                       
                </div>
                    <button>create</button> 
            </Form>
        </div>

    )
}

export default CreateForm