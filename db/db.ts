import { connect } from 'mongoose';
//import  mongoose  from 'mongoose';

const conectarBD = async () =>{

    console.log(process.env.DATABASE_URL );

    return await connect(
        process.env.DATABASE_URL
    )
    .then(() =>{
        console.log('Conexion Exitosa');
    })
    .catch((e)=>{
        console.error('Error conectando con la Base de Datos', e);
        });
    };
export default conectarBD;