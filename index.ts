import conectarBD from "./db/db";
import { projectModel } from "./models/project";
//import { UserModel } from "./models/user";
import {  Enum_Tipo_Objetivo } from "./models/enums";
import { objetivoModel } from "./models/Objetivo";


const proyectoConObjetivos = async ()=>{

const proyectocreate = await projectModel.create({
  nombre:'Proyecto Ecologico',
  presupuesto: 200000,
  fechainicio: Date.now(),
  fechafinal: new Date(2023/12/11),
  lider:'61a6cb8d397f93f03c8c2027'
  });
  
  const objetivoGeneral= await objetivoModel.create({
  descripcion:'Objetivo general',
  tipo:Enum_Tipo_Objetivo.GENERAL,
  proyecto:proyectocreate._id,
  });
  
  const objetivoespeifico= await objetivoModel.create({
    descripcion:'Objetivo Espeicifico Uno',
    tipo:Enum_Tipo_Objetivo.ESPECIFICO,
    proyecto:proyectocreate._id,
    });
  
  
    const objetivoespeificoDos= await objetivoModel.create({
      descripcion:'Objetivo Espeicifico Dos',
      tipo:Enum_Tipo_Objetivo.ESPECIFICO,
      proyecto:proyectocreate._id,
      });
    };  
  
const main = async () =>{
    await conectarBD();



 const proyecto = await projectModel.findOne({
  _id:'61a6cd10bc0b05838c09470f'}); 
   
console.log('Proyecto', proyecto);

const objetivos = await objetivoModel.find({
  project:'61a6cd10bc0b05838c09470f'});

console.log('Los objetivos del Proyecto son:', objetivos);

const proyectoObjetivos = {...proyecto, objetivos:objetivos};
console.log('El proyecto con sus objetivos:', proyectoObjetivos);7

//const Proyecto = await projectModel.find({
  //nombre:'Proyecto Ecologico'
//}).populate('lider');
//console.log('Proyecto es:', Proyecto );

//const lider = await UserModel.find({
 // _id: Proyecto[0].lider
//});
//console.log('El lider es :', lider);


//Consultar todos los usuarios
//await UserModel.find()
//.then((u) =>{
   // console.log('Consulta realizada exitosamente',u);

//})
//.catch((e) => {
  //  console.log('Error consultando usuarios',e);
//});


   //Actualizar Usuario 
    //await UserModel.findOneAndUpdate(
      //  {correo:'gabriela@gabriela.com'}, 
    //{
     //   nombre:'Gabi',
    //    apellido:'Gonzalez',
    
  //  }
   // ).then((u)=>{
  //    console.log('usuario Modificado Exitosamente',u);
 //   })
  //  .catch((e)=>{
      //console.log('error Modificado usuario',e); 
  //  } ); 

    

//Elimanar usuario
//await UserModel.findOneAndDelete(
  //  {correo:'camilo@hotmail.com'}, 
//{
  //  nombre:'Camila',
   // apellido:'Tovar',

//}
//)
//.then((u) =>{
//    console.log('Usuario eliminado exitosamente',u);

//})
//.catch((e) => {
  //  console.log('Error eliminando usuario',e);
//});
};
main ();