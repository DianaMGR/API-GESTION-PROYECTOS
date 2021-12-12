import { gql } from 'apollo-server-express';


const tipoAvance = gql ` 
type Avances {
    _id: ID!
    fecha:Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadopor:Usuario!
}

type Query{
    Avances:[Avances]
    filtrarAvance(_id:String!):[Avances]
}

type Mutation{
    crearAvance(
    fecha:Date!
    descripcion: String!
    proyecto: String!
    creadopor:String!
    ):Avances
    
}    

`;
export {tipoAvance};
