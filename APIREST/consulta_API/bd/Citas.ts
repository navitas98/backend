import mongoose from "mongoose";
import { Cita } from "../types.ts";
const Schema=mongoose.Schema;
const CitaSchema=new Schema({
    nombre:String,
    hora_cita:String,
    dia_cita:String,
    mes_cita:String,
    ano_cita:String,
    medico:Schema.Types.ObjectId,
    hospital:Schema.Types.ObjectId,
    paciente:Schema.Types.ObjectId
})
export type CitaModelType=mongoose.Document&Omit<Cita,"id"|"medico"|"hospital"|"paciente">&{
    medicoID:mongoose.Types.ObjectId,
   
    pacienteID:mongoose.Types.ObjectId
}
export const CitaModel=mongoose.model<CitaModelType>("Cita",CitaSchema)
