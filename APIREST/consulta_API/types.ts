//Comprobar que el correo tiene un @ y que termina en .com o .es
export type Medico={
    id:string,
    nombre:string,
    apellido:string
    correo:string,
    hospital:Omit<Hospital,"medico">
    cita:Array<Omit<Cita,"medico">>
}
//Al hacer getHospital por id tiene que aparecer la informacion que hace en grados centigrados y la climatologia
export type Hospital={
    id:string,
    nombre:string,
    cp:string,
    codigo_pais:string,
    pais:string,
    ciudad:string,
    medicos:Array<Omit<Medico,"hospital">>
    cita:Array<Omit<Cita,"hospital">>
}
//Cuando guardemos una cita aparecera en un unico string la hora, mes y ano de la cita. Hay que comprobar que el dia mes y año existe y guardalo en las diferentes variables
export type Cita={
    id:string,
    nombre:string,
    hora_cita:string,
    dia_cita:string,
    mes_cita:string,
    ano_cita:string,
    medico:Omit<Medico,"cita">
    hospital:Omit<Hospital,"cita">
    paciente:Omit<Paciente,"cita">
}
/*
Los pacientes seran personajes de la API de rick and morty. Hay que comprobar que exista el pesonaje y si esta vivo o muerto. Si el personaje no existe solo le podemos añadir
cita si el origin es la tierra, y si el personaje esta muerto no podra ser atendido.
*/
export type Paciente={
    id:string,
    nombre:string,
    status:Status,
    species:string,
    origin:string,
    exit_Api:boolean
    cita:Array<Omit<Cita,"paciente">>
}
enum Status{
    live,
    dead,
    unknown
}