//Meteremos los personajes de Rick and Morty
export type Medico={
    id:string,
    nombre:string,
    status:string;
    species:string,
    exit:boolean,
    hospital:Omit<Hospital,"medico">
    citas:Array<Omit<Cita,"medico">>
}
export type Hospital={
    id:string,
    nombre:string,
    coordenadas:string,
    codigo_pais:string,
    pais:string,
    ciudad:string,
    medicos:Array<Omit<Medico,"hospital">>
    citas:Array<Omit<Cita,"hospital">>

}
export type Cita={
    id:string,
    nombre:string,
    hora_cita:string,
    dia_cita:string,
    mes_cita:string,
    ano_cita:string,
    medico:Omit<Medico,"citas">
    hospital:Omit<Hospital,"citas">
}