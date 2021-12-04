import { UserModel } from "../models/user";

const resolvers = {
    Query:{
        Usuarios: async(parent,args)=>{
            const usuarios = await UserModel.find();
            return usuarios
        },
    },

    Mutaion:{
        crearUsuario: async (parent, args)=>{
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                tipo_usuario: args.tipo_usuario,
            });
            return usuarioCreado;
        },
    },


};
    
   
export { resolvers };