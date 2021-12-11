import { gql } from 'apollo-server-express';
import { tipoEnum } from '../models/enum/tipos';
import { tipoUsuario } from '../models/user/tipo';
import { tipoProyecto } from '../models/project/tipos';
import { tipoAvance } from '../models/avance/tipos';

const tiposGlobales = gql `

scalar Date

`;
export const tipos = [tiposGlobales, tipoEnum, tipoProyecto, tipoUsuario, tipoAvance];