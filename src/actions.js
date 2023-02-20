import { redirect } from "react-router-dom"

const URL = "https://inventory-api-yh0c.onrender.com"

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newItem = {
        name: formData.get("name"),
        quantity: formData.get("quantity"),
        department: formData.get("department"),
        image: formData.get("image"),
        details: formData.get("details"),
        location: formData.get("location"),
    }

    // send request to the backend
    await fetch(URL + "/inventory/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    })
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id


    const updateItem = {
        name: formData.get("name"),
        quantity: formData.get("quantity"),
        department: formData.get("department"),
        image: formData.get("image"),
        details: formData.get("details"),
        location: formData.get("location"),
    }

    // send request to the backend
    await fetch(URL + `/inventory/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateItem)
    })
    return redirect(`/item/${id}`)
}


export const deleteAction = async ({params}) => {
    const id = params.id

    await fetch(URL + `/inventory/${id}/`, {
        method: "delete",
    })

    return redirect("/")
}