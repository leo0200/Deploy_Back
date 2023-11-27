import { Router } from 'express'
import { isAutenticado } from './middleware/isAutenticado'

import { LoginController } from './Controller/Login/LoginController'
import { CriarusuariosController } from '../src/Controller/Usuarios/CriarUsuariosController'


const router = Router()



//Rotas de Logins
router.post('/LoginUsuarios',  new LoginController().handle)

//Estrutura de Usuários
router.post('/CriarUsuarios',isAutenticado,new CriarusuariosController().handle)


export { router }