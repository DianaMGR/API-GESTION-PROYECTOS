import { gql } from 'apollo-server-express';


const tipoProyecto = gql `

type Objetivo{
    _id:ID!
    descripcion:String!
    tipo:Enum_Tipo_Objetivo!

}

input creacionObjetivo{
   descripcion:String!
    tipo: Enum_Tipo_Objetivo!
}

type Proyecto{
    _id:ID!
    nombre: String!
    presupuesto:Float!
    fechainicio:Date!
    fechafinal:Date
    estado:Enum_Estado_Proyecto!
    fase:Enum_Fase_Proyecto!
    lider:Usuario!
    objetivos:[Objetivo]
    avances:[Avances]
    inscripciones:[Inscripcion]
    
}
type Query{
    
    Proyectos:[Proyecto]
}
type Mutation{
       
    crearProyecto(
        nombre:String!
        presupuesto: Float!
        fechainicio: Date!
        fechafinal: Date
        estado: Enum_Estado_Proyecto!
        fase: Enum_Fase_Proyecto!
        lider:String!
        objetivos:[creacionObjetivo]
        ):Proyecto
    }

`;
export { tipoProyecto};