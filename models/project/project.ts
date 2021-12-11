import { Schema, model } from 'mongoose';
import { Enum_Estado_Proyecto, Enum_Fase_Proyecto, Enum_Tipo_Objetivo } from '../enum/enums';
import { UserModel } from '../user/user';

interface Project{
nombre:string;
presupuesto:number;
fechainicio:Date;
fechafinal:Date;
estado: Enum_Estado_Proyecto;
fase: Enum_Fase_Proyecto;
lider:Schema.Types.ObjectId;
objetivos:[{descripcion:String; tipo:Enum_Tipo_Objetivo}]


}

const projectSchema = new Schema<Project>({
nombre: {
    type:String,
    required: true,
},
presupuesto: {
    type:Number,
    required: true,
},

fechainicio: {
    type:Date,
    required: true,
},
fechafinal: {
    type:Date,
    required: false,
},
estado:{
    type: String,
    enum: Enum_Estado_Proyecto,
    default:Enum_Estado_Proyecto.INACTIVO,
},
fase:{
    type: String,
    enum: Enum_Fase_Proyecto,
    default:Enum_Fase_Proyecto.NULA,
},

lider:{
    type: Schema.Types.ObjectId,
    required:true,
    ref:UserModel,
},

objetivos: [
{
    descripcion: {
        type:String,
        required:true,
    },
    tipo:{
        type:String,
        enum:Enum_Tipo_Objetivo,
        required:true,
    },
},
],    

});

const projectModel=model('Project',projectSchema, "Proyectos");

export {projectModel};