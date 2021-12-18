import mongoose from 'mongoose';

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
    password:{
     type:String,
     required:true,   
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