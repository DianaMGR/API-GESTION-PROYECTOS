import mongoose from 'mongoose';
//import { Enum_Estado_Inscripcion } from '../enum/enums.js';
import { projectModel } from '../project/project.js';
import { UserModel } from '../user/user.js';

//interface Inscripcion {
  //  estado:Enum_Estado_Inscripcion;
   // fechaIngreso:Date;
   // fechaEgreso:Date;
   // proyecto: Schema.Types.ObjectId;
   // estudiante: Schema.Types.ObjectId;
//}
const {Schema, model} = mongoose;

const inscripcionSchema = new Schema({
    estado:{
        type: String,
        enum: ['ACEPTADA','RECHAZADA','PENDIENTE'],
        required: true,
    },

    fechaIngreso:{
        type: Date,
        required: false,
    },

    fechaEgreso:{
        type: Date,
        required: false,
    },

    proyecto:{
        type: Schema.Types.ObjectId,
        ref: projectModel,
        required:true,
    },
    estudiante:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required:true,
    },
});

const inscripcionModel=model('Inscripcion',inscripcionSchema, "Inscripcion");

export {inscripcionModel};