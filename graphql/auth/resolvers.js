import { UserModel } from "../../models/user/user.js";
import bcrypt from 'bcrypt'; 
import { generateToken } from "../../utils/tokenUtils.js";

const resolversAutenticacion = {
    Mutation: {
        registro: async (parent, args) =>{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const usuarioCreado = await UserModel.create({
                nombres: args.nombres,
                apellidos: args.apellidos,
                identificacion: args.identificacion,
                correo: args.correo,
                tipo_usuario: args.tipo_usuario,
                password: hashedPassword,
              });
              console.log('usuario creado', usuarioCreado);
            return {
                token: generateToken({
                    _id: usuarioEncontrado._id,
                    nombres: usuarioCreado.nombres,
                    apellidos: usuarioCreado.apellidos,
                    identificacion: usuarioCreado.identificacion,
                    correo: usuarioCreado.correo,
                    tipo_usuario: usuarioCreado.tipo_usuario,
                    
                }),
            };
        },


    login: async (parent, args) => {
      const usuarioEncontrado = await UserModel.findOne({ correo: args.correo });
      if (await bcrypt.compare(args.password, usuarioEncontrado.password)) {
        return {
          token: generateToken({
            _id: usuarioEncontrado._id,
            nombres: usuarioEncontrado.nombres,
            apellidos: usuarioEncontrado.apellidos,
            identificacion: usuarioEncontrado.identificacion,
            correo: usuarioEncontrado.correo,
            tipo_usuario: usuarioEncontrado.tipo_usuario,
            
          }),
        };
      }
    },
    refreshToken: async (parent, args, context) => {
        console.log('contexto', context);
        if (!context.userData) {
          return {
            error: 'token no valido',
          };
        } else {
          return {
            token: generateToken({
              _id: context.userData._id,
              nombreS: context.userData.nombreS,
              apellidoS: context.userData.apellidoS,
              identificacion: context.userData.identificacion,
              correo: context.userData.correo,
              tipo_usuario: context.userData.tipo_usuario,
              
            }),
          };
        }
        
      },
    },
  };
    
 
export {resolversAutenticacion};