export type LatitudLongitud={
    latitud:string,
    longitud:string
}
const getLatitudLongitud=async(
    CP:string,codigo_pais:string
):Promise<LatitudLongitud>=>{
    const API_URL="https://zip-api.eu/api/v1";
    const url = `${API_URL}/info/${codigo_pais.toUpperCase()}-${CP}`;
    const response= await fetch(url);
    if(response.status!=200)throw new Error("Codigo postal o codigo pais invalido");
    const data=await response.json();;
    return{
        latitud:data.lat,
        longitud:data.lng
    }
}
export default getLatitudLongitud;