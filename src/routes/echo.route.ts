import { Hono } from 'hono'
import { echoController } from '../controllers/echo.controller'

const echoRoute = new Hono()

echoRoute.post('/', echoController.echo)

export default echoRoute