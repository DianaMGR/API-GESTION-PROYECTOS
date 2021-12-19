import mongoose from 'mongoose';
//import { Enum_Estado_Proyecto, Enum_Fase_Proyecto, Enum_Tipo_Objetivo } from '../enum/enums.js';
import { UserModel } from '../user/user.js';


const {Schema, model}= mongoose;
const projectSchema = new Schema({
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
    enum: ['ACTIVO','INACTIVO'],
    default:'INACTIVO',
},
fase:{
    type: String,
    enum: ['EN_PROCESO','TERMINADO','INICIADO'],
    default:'NULA',
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
        enum:['GENERAL','ESPECIFICO'],
        required:true,
    },
},
],    

},{
    toJSON: {virtuals: true},
    toObject:{virtuals:true},
});
projectSchema.virtual("avances",{
    ref:'Avances',
    localField:"_id",
    foreignField:"proyecto"
});

projectSchema.virtual("inscripciones",{
    ref:'Inscripcion',
    localField:"_id",
    foreignField:"proyecto"

});

const projectModel=model('Project',projectSchema, "Proyectos");

export {projectModel};