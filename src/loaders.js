const URL = "https://inventory-api-yh0c.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/inventory/")
    const data = await response.json()
    // console.log(data)
    return data
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/inventory/${params.id}/`)
    const item = await response.json()
    console.log(item)
    return item
}