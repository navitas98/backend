import getCiudadPais from "../API/getCiudadPais.ts";
import getLatitudLongitud from "../API/getLatitudLongitud.ts";
import { HospitalModel } from "../bd/Hospital.ts";
import { MedicoModel } from "../bd/Medico.ts";
import { HospitalFromModel } from "../controladores/HospitalfromModel.ts";
import { getMedicoFromModel } from "../controladores/MedicoFromModel.ts";

import { Hospital, Medico } from "../types.ts";

export const Mutation={
    anadirHospital:async(
        _:unknown,
        args:{nombre:string, codigo_pais:string, cp:string}
    ):Promise<Hospital>=>{
        const {nombre, codigo_pais, cp}=args;
        const {latitud,longitud}= await getLatitudLongitud(cp,codigo_pais);
        const {ciudad,pais}= await getCiudadPais(latitud,longitud);
        const hospital={nombre, cp, codigo_pais, ciudad,pais}
        const nuevoHospital= await HospitalModel.create(hospital);
        return HospitalFromModel(nuevoHospital);
    },
    
    anadirMedico:async(
        _:unknown,
        args:{nombre:string,apellido:string, correo:string, hospital:string}
    ):Promise<Medico>=>{
        const {nombre,apellido, correo, hospital}=args;
        const medico={nombre,apellido, correo, hospital};
        const nuevoHospital=await MedicoModel.create(medico);
        return getMedicoFromModel(nuevoHospital)
    }
}