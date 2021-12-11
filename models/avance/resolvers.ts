import { avancesModel } from "./avances";

const resolversAvance ={
  
    Query:{

        Avances: async (parent, args)=>{
            const avances = await avancesModel.find();   
            return avances;
                },
    },    
    Mutation:{
        crearAvance: async (parents,args)=>{
        const avanceCreado = avancesModel.create({
        fecha:args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadopor:args.creadopor,
        }) ;
        return avanceCreado;   

        },

    },      
    };

    export { resolversAvance};
