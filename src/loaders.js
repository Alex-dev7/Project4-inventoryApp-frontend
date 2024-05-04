const URL = "https://inventory-app-api-kcu9.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/inventory/")
    const data = await response.json()

    return data
}

export const showLoader = async ({params}) => {
  
    const response = await fetch(URL + `/inventory/${params.id}/`)
    const item = await response.json()

    return item
}