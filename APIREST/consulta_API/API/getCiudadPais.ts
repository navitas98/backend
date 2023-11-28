export type CiudadPais={
    ciudad:string,
    pais:string
}
const getCiudadPais=async(
    latitud:string,
    longitud:string
):Promise<CiudadPais>=>{
    const API="http://api.weatherapi.com/v1";
    const clave="8b3e7d372aab473d96854840230911 ";
    const url = `${API}/current.json?key=${clave}&q=${latitud},${longitud}`;
    const response=await fetch(url);
    if(response.status!=200)throw new Error("No podemos monstar los datos");
    const data=await response.json();
    return {
        ciudad: data.location.name,
        pais: data.location.country,
    }
}
export default getCiudadPais;