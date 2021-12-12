import { gql } from 'apollo-server-express';
import { tipoEnum } from '../models/enum/tipos.js';
import { tipoUsuario } from '../models/user/tipo.js';
import { tipoProyecto } from '../models/project/tipos.js';
import { tipoAvance } from '../models/avance/tipos.js';
import { tipoInscripcion } from '../models/inscripcion/tipos.js';
const tiposGlobales = gql `

scalar Date

`;
export const tipos = [tiposGlobales, tipoEnum, tipoProyecto, tipoUsuario, tipoAvance,tipoInscripcion];