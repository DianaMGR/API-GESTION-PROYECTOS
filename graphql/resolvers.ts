import { UserModel } from "../models/user";

const resolvers ={
    Query:{
        Usuarios: async (parent, args)=>{
          const usuarios =await UserModel.find();
          return usuarios; 
            
                
        },
          
    },
    Mutation: {
    crearUsuario: async (parent, args)=>{
      const usuarioCreado = await UserModel.create({
        nombres: args.nombres,
        apellidos: args.apellidos,
        identificacion: args.identificacion,
        correo: args.correo,
        tipo_usuario: args.tipo_usuario,
    });
    if (Object.keys(args).includes('estado')){
       usuarioCreado.estado = args.estado;
  }

    return usuarioCreado;
      
      },

      editarUsuario: async (parent, args)=>{
        const usuarioEditar = await UserModel.findByIdAndUpdate(args._id,{
                nombres: args.nombres,
                apellidos: args.apellidos,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                tipo_usuario: args.tipo_usuario, 
             
          }); 
          return usuarioEditar;
        },  

      eliminarUsuario: async (parent, args)=>{
       if(Object.keys(args).includes('_id'))
          {
          const usuarioEliminado =await UserModel.findOneAndDelete({_id: args._id});
          return usuarioEliminado;

          } else if (Object.keys(args).includes('nombres')){

          const usuarioEliminado = await UserModel.findOneAndDelete({nombres: args.nombres});
          return usuarioEliminado;
         
          } 
    },  
    },
};

export { resolvers};