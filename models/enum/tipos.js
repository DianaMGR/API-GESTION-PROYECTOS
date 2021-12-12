import { gql } from 'apollo-server-express';


const tipoEnum = gql `

enum Enum_EstadoUsuario{
    PENDIENTE
    NO_AUTORIZADO
    AUTORIZADO
}

enum Enum_tipousuario{
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
}

enum Enum_Estado_Proyecto{
    ACTIVO
    INACTIVO
}
enum Enum_Fase_Proyecto{
    INICIADO
    EN_PROCESO
    TERMINADO
    NULA
}
enum Enum_Tipo_Objetivo{
    GENERAL
    ESPECIFICO
            
    }
enum Enum_Estado_Inscripcion{
    ACEPTADA
    RECHAZADA
    PENDIENTE
    
    }        


    

`;
export { tipoEnum};