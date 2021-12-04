import {gql} from 'apollo-server-express';



const typeDefs = gql `

enum Enum_Estado_Usuario{
    PENDIENTE
    NO_AUTORIZADO
    AUTORIZADO
}

enum Enum_tipo_usuario{
    ESTUDIANTE
    LIDER 
    ADMINISTRADOR 
}

type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_Estado_Usuario
    tipo_usuario:enum_tipo_usuario!
}

type Query{
Usuarios: [Usuario]
}

type Mutation{
    crearUsuario(
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_Estado_Usuario v 
    tipo_usuario:enum_tipo_usuario!
    ): Usuario


    editarUsuario(()

    eliminarUsuario(_id:String!, correo:String):Usuario
    }
}
`
;

export {typeDefs};
