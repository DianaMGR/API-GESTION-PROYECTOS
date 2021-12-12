import mongoose from 'mongoose';
//import { Enum_Tipo_Objetivo } from './enum/enums.js';
import { projectModel } from './project/project.js';

//interface Objetivo{
    //descripcion: string;
   // tipo: Enum_Tipo_Objetivo;
  //  proyecto:Schema.Types.ObjectId;
//}
const {Schema, model} = mongoose;
const objetivoSchema = new Schema({
descripcion:{
    type:String,
    required:true,
} ,  
tipo:{
    type:String,
    enum: ['GENERAL','ESPECIFICO'],
    required:true,
},
proyecto:{
type:Schema.Types.ObjectId,
ref: projectModel,
},
});
const objetivoModel = model('Objetivo', objetivoSchema);

export {objetivoModel};