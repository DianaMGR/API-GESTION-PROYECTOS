import mongoose from 'mongoose';
import { projectModel } from '../project/project.js';
import { UserModel } from '../user/user.js';

//interface Avances {
    //fecha: Date;
    //descripcion: string;
    //observaciones: [string];
    //proyecto: Schema.Types.ObjectId;
    //creadopor:Schema.Types.ObjectId;
//}
const {Schema, model}= mongoose;
const avanceSchema = new Schema({
fecha:{
    type:Date,
    required: true,
},

descripcion:{
    type: String,
    required: true,
},

observaciones:[
    
    {
        type: String,

    },

    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref: projectModel,
        required: true,
    },

    creadopor:{
        type:Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }

});

const avancesModel = model('Avances', avanceSchema);

export {avancesModel};