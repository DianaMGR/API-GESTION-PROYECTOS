import { gql } from 'apollo-server-express';


const tipoUsuario = gql `

scalar Date


type Usuario{
    _id: ID!
    nombres: String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario
    tipo_usuario:Enum_tipousuario!
}

type Objetivo{
    _id:ID!
    descripcion:String!
    tipo:Enum_Tipo_Objetivo!

}

input creacionObjetivo{
   descripcion:String!
    tipo: Enum_Tipo_Objetivo!
}


type Query{
    Usuarios:[Usuario]
    Usuario(_id:String!):Usuario
    
}
type Mutation{
    crearUsuario(
    nombres:String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario 
    tipo_usuario:Enum_tipousuario!
   ): Usuario

   eliminarUsuario(
    _id:String
    nombres: String 
    )
    :Usuario

    editarUsuario(
    _id: ID!    
    nombres:String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario 
    tipo_usuario:Enum_tipousuario!   
    ): Usuario
    
    
    }

`;
export { tipoUsuario};