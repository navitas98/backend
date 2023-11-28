import { HospitalModelType } from "../bd/Hospital.ts";
import { Hospital } from "../types.ts";
export const HospitalFromModel=async(hospitalModel:HospitalModelType):Promise<Hospital>=>{
    return {
        id:hospitalModel._id.toString(),
        nombre:hospitalModel.nombre,
        cp:hospitalModel.cp,
        codigo_pais:hospitalModel.codigo_pais,
        ciudad:hospitalModel.ciudad,
        pais:hospitalModel.pais,
        medicos:[],
        cita:[]
    }
}