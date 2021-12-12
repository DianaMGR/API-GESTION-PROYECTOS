//import { projectModel } from "./project";

import { inscripcionModel } from "./inscripcion.js";

const resolverInscripciones = {
    Query:{
    Inscripciones: async (parent, args) => {
        const inscripciones = await inscripcionModel.find();
        return inscripciones;
    },
},
Mutation: {
    crearInscripcion: async (parent, args) => {
        const inscripcionCreada = await inscripcionModel.create({
         estado:args.estado,
         proyecto:args.proyecto,
         estudiante: args.estudiante,
         });
         return inscripcionCreada;
    },
    aprobarInscripcion: async(parent, args) =>{
        const inscripcionAprobada = await inscripcionModel.findByIdAndUpdate(args.id,{
            estado:'ACEPTADA',
            fechaIngreso: Date.now(),
        });
        return inscripcionAprobada;
        
    },
},
};
export {resolverInscripciones};