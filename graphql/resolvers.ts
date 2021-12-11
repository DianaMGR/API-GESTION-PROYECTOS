import {resolversProyecto} from '../models/project/resolvers'
import { resolversUsuario } from '../models/user/resolvers'
import { resolversAvance } from '../models/avance/resolvers'


export const resolvers = [resolversProyecto, resolversUsuario, resolversAvance]