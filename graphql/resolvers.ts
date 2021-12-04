import { UserModel } from "../models/user";

const resolvers = {
    Query:{
        Usuarios: async(parent,args)=>{
            const usuarios = await UserModel.find();
            return usuarios
        },
    },

    Mutation:{
        crearUsuario: async (parent, args)=>{
            const usuarioCreado = await UserModel.create({
                nombres: args.nombre,
                apellidos: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                tipo_usuario: args.tipo_usuario,
            });

            if (Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
            }

            return usuarioCreado;
        },
        eliminarUsuario: async (parent, args)=>{
            if(Object.keys(args).includes('_id'))
            {
            const usuarioEliminado =await UserModel.findOneAndDelete({_id: args._id});
            return usuarioEliminado;

            } else if (Object.keys(args).includes('correo')){

            const usuarioEliminado =await UserModel.findOneAndDelete({correo: args.correo});
            return usuarioEliminado;

            }

        

        },

           
    },
};
    
 export { resolvers };