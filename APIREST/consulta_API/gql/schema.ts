export const typeDefs=`#graphql
type Medico{
    id:ID!
    nombre:String!
    status:String!
    species:String!
    exit:Boolean!
    hospital:Hospital!
    citas:[Citas!]!
}
type Hospital{
    id:ID!
    nombre:String!
    coordenadas:String!
    codigo_pais:String!
    pais:String!
    ciudad:String!,
    medicos:[Medico!]!
    citas:[Cita!]!
}
type Cita{
    id:ID!
    nombre:String!
    cita:String!
    medico:Medico!
    hospital:Hospital!
}
type Query{
    ejemplo:String!
}
type Mutation{
    ejemplo:String!
}

`