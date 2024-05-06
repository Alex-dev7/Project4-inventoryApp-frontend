import { redirect } from "react-router-dom"

const URL = "https://inventory-app-api-kcu9.onrender.com"


export const createAction = async ({request}) => {

 
    const formData = await request.formData()

    formData.append("name", formData.get("name"))
    formData.append("quantity", formData.get("quantity"))
    formData.append("department", formData.get("department"))
    formData.append("image", formData.get("image"))
    formData.append("details", formData.get("details"))
    formData.append("location", formData.get("location"))
  
    // console.log(formData.get("name"))

    await fetch(URL + "/inventory/", {
        method: "POST",
        body: formData
    })
    return redirect("/")
}


export const updateAction = async ({request, params}) => {

 
    const formData = await request.formData()
    const id = params.id
    

    formData.append("name", formData.get("name"))
    formData.append("quantity", formData.get("quantity"))
    formData.append("department", formData.get("department"))
    formData.append("details", formData.get("details"))
    formData.append("location", formData.get("location"))
  


    await fetch(URL + `/inventory/${id}`, {
        method: "PUT",
        body: formData
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

