import { GraphQLError } from "graphql";
import { HospitalModel } from "../bd/Hospital.ts";
import { MedicoModelType } from "../bd/Medico.ts";
import { Medico } from "../types.ts";

export const getMedicoFromModel=async(medico:MedicoModelType):Promise<Medico>=>{
const {_id, nombre, apellido, correo, hospitalId}=medico;
const hospital=await HospitalModel.findById(hospitalId);
if(!hospital)throw new GraphQLError("No se ha encontrado el id del hospital "+hospitalId);
return{
    id:_id.ToSting(),
    nombre,
    apellido,
    correo,
    hospital:hospital._id.ToSting(),
    cita:[]
}
}