import { Form } from "react-router-dom"
import './dashboard.scss'

function CreateForm(params) {

    return (
        <div >
            <h2>Add new item</h2>
            <Form action="/create" method="post"   encType="multipart/form-data">
                <input type="text" name="name" placeholder="item name" />
                <input type="number" name="quantity" placeholder="qty" />
                <label for="department">Choose a department:</label>
                    <select id="department" name="department" >
                        <option value="Electric">Electrical</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Networking">Networking</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Tools">Tools</option>
                    </select>
                <input type="file" name="image" />
                <input type="text" name="details" placeholder="details" />
                <input type="text" name="location" placeholder="location" />
                <button>create</button>
            </Form>
        </div>

    )
}

export default CreateForm