import { Schema, model } from 'mongoose';
import {Enum_Estado_Usuario, Enum_tipo_usuario} from './enums';



interface User{
    nombres:string;
    apellidos: string;
    identificacion: string;
    correo: string;
    tipo_usuario: Enum_tipo_usuario;
    estado:Enum_Estado_Usuario,

}

const userSchema = new Schema<User>({
    nombres:{
        type:String,
        required:true,
    },
    apellidos:{
        type:String,
        required:true,
    },    

    identificacion:{
        type:String,
        requiered:true,
        unique:true,
    },
    correo:{
        type:String,
        required:true, 
    },

    tipo_usuario:{
        type:String,
        required:true,
        enum: Enum_tipo_usuario,
    },
    estado:{
        type:String,
        required:true,
        enum: ['PENDIENTE','NO_AUTORIZADO','AUTORIZADO'],
        default:Enum_Estado_Usuario.PENDIENTE,

    },

});

const UserModel = model('User', userSchema);

export { UserModel };