import { gql } from 'apollo-server-express';


const tipoInscripcion = gql ` 
type Inscripcion {
    _id: ID!
    estado: Enum_Estado_Inscripcion!
    proyecto: Proyecto!
    estudiante: Usuario!
  }
  type Query {
    Inscripciones: [Inscripcion]
  }
type Mutation {
    crearInscripcion(
    estado:Enum_Estado_Inscripcion! 
    proyecto: String!, 
    estudiante: String!
    ): Inscripcion

    aprobarInscripcion(
      id:String!
    ):Inscripcion
    
  }`;

  export {tipoInscripcion};