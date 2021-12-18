import { gql } from 'apollo-server-express';


const tipoAutenticacion = gql `

type Token{
    token: String
    error:String
}

type Mutation{
registro(    
nombres:String!
apellidos:String!
identificacion:String!
correo:String!
tipousuario:Enum_tipousuario!
estado:Enum_EstadoUsuario
password:String!
):Token!

login(correo:String!,password:String!):Token

refreshToken:Token
}

`;
export {tipoAutenticacion}; 