
import { inscripcionModel } from "../inscripcion/inscripcion.js";
import { projectModel } from "./project.js";

const resolversProyecto ={
  
    Query:{

        Proyectos: async (parent, args)=>{
            const proyectos = await projectModel.find().populate('avances').populate('inscripciones'); 
            return proyectos;
                },
          
    },

    Mutation: {
      
    crearProyecto: async(parent, args)=>{ 
      const proyectoCreado = await projectModel.create({  
       nombre:args.nombre,
       estado:args.estado,
       fase:args.fase,
       presupuesto:args.presupuesto,
       fechainicio:args.fechainicio,
       fechafinal:args.fechafinal,
       lider: args.lider,
       objetivos:args.objetivos,
      });
  
      return proyectoCreado;
    },
    aprobarInscripcion:async(parent, args)=>{ 
        const inscripcionAprobada = await inscripcionModel.findByIdAndUpdate(args.id,{
            estado:args.estado,
            fechaIngreso:Date.now(),
        });
        return inscripcionAprobada
    }
    },
};

export { resolversProyecto};