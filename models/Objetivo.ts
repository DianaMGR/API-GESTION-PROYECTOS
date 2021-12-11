import {Schema, model} from 'mongoose';
import { Enum_Tipo_Objetivo } from './enum/enums';
import { projectModel } from './project/project';

interface Objetivo{
    descripcion: string;
    tipo: Enum_Tipo_Objetivo;
    proyecto:Schema.Types.ObjectId;
}

const objetivoSchema = new Schema<Objetivo>({
descripcion:{
    type:String,
    required:true,
} ,  
tipo:{
    type:String,
    enum: Enum_Tipo_Objetivo,
    required:true,
},
proyecto:{
type:Schema.Types.ObjectId,
ref: projectModel,
},
});
const objetivoModel = model('Objetivo', objetivoSchema);

export {objetivoModel};