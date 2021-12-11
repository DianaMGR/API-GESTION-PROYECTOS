
import { projectModel } from "./project";

const resolversProyecto ={
  
    Query:{

        Proyectos: async (parent, args)=>{
            const proyectos = await projectModel.find().populate('lider');   
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
    },
};

export { resolversProyecto};