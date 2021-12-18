import mongoose from 'mongoose';
//import {Enum_EstadoUsuario, Enum_tipousuario} from '../enum/enums.js';



//interface User{
  //  nombres:string;
   // apellidos: string;
   // identificacion: string;
   // correo: string;
   // tipo_usuario: Enum_tipousuario;
   // estado:Enum_EstadoUsuario,

//}
const {Schema, model} = mongoose;
const userSchema = new Schema({
    
    nombres:{
        type:String,
        requiered:true,
    },
    apellidos:{
        type:String,
        requiered:true,
        
    },    

    identificacion:{
        type:String,
        requiered:true,
        unique:true,
        
    },
    correo:{
        type:String,
        required:true, 
        unique:true,
    },

    tipo_usuario:{
        type:String,
        required:false,
        enum: ['ESTUDIANTE','LIDER','ADMINISTRADOR'],
    },
    estado:{
        type:String,
        required:true,
        enum: ['PENDIENTE','AUTORIZADO','NO_AUTORIZADO'],
        default:'PENDIENTE',

    },

});

const UserModel = model('User', userSchema);

export { UserModel };