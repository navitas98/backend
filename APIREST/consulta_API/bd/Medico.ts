import mongoose from "mongoose";
import { Medico } from "../types.ts";

const Schema=mongoose.Schema;
const MedicoSchema=new Schema({
    nombre:String,
    apellido:String,
    correo:String,
    hospital:Schema.Types.ObjectId,
    citas:[Schema.Types.ObjectId]
})
export type MedicoModelType=mongoose.Document & Omit<Medico,"id"|"hospital"|"citas">&{
    hospitalId:mongoose.Types.ObjectId;
}
export const MedicoModel=mongoose.model<MedicoModelType>("Medico",MedicoSchema)