import mongoose from"mongoose"
import { Paciente } from "../types.ts";
const Schema=mongoose.Schema;

const PacienteSchema=new Schema({
    nombre:String,
    status:{type:String, enum: ["live", "dead", "unknown"], requiered:true},
    species:String,
    origin:String,
    exit_App:Boolean,
    cita:[Schema.Types.ObjectId]
})
export type PacienteModelType= mongoose.Document&Omit<Paciente,"id"|"cita">
export const PacienteModel=mongoose.model<PacienteModelType>("Paciente",PacienteSchema);
