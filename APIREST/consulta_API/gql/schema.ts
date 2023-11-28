export const typeDefs=`#graphql
type Medico{
    id:ID!
    nombre:String!
    apellido:String!
    correo:String!
    hospital:Hospital!
    citas:[Cita!]!
}
type Hospital{
    id:ID!
    nombre:String!
    cp:String!
    codigo_pais:String!
    pais:String!
    ciudad:String!,
    medicos:[Medico!]!
    citas:[Cita!]!
    temperatura:String!,
    clima:String!
}
type Cita{
    id:ID!
    nombre:String!
    hora_cita:String!
    dia_cita:String!
    mes_cita:String!
    ano_cita:String!
    medico:Medico!
    hospital:Hospital!
    paciente:Paciente!
}
type Paciente{
    id:ID!
    nombre:String!
    status:String!
    species:String!
    origin:String!
    exit_Api:Boolean!
    cita:[Cita!]!
}
type Query{
    ejemplo:String!
}
type Mutation{
    anadirHospital(nombre:String!, codigo_pais:String!,cp:String!):Hospital!
    anadirMedico(nombre:String!, apellido:String!, correo:String!,hospital:ID!):Medico!
}

`