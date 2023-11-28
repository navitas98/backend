import mongoose from "mongoose"
import { Hospital } from "../types.ts";
const Schema= mongoose.Schema;
const  HospitalSchema= new Schema({
    nombre:String,
    cp:String,
    codigo_pais:String,
    pais:String,
    ciudad:String,
    medicos:[Schema.Types.ObjectId],
    citas:[Schema.Types.ObjectId]
})
export type HospitalModelType=mongoose.Document & Omit<Hospital,"id"|"medico"|"citas">;
export const HospitalModel=mongoose.model<HospitalModelType>("Hospital",HospitalSchema);