import Fastify, { FastifyInstance } from 'fastify'
import searchRoutes from './modules/search/routes'
import titleRoutes from './modules/title/routes'

function buildServer() {
  const server: FastifyInstance = Fastify({
    logger: true,
  })

  server.get('/healthcheck', async function (request) {
    console.log('🚀 ~ file: server.ts:14 ~ request:', request)

    return { status: 'OK' }
  })

  //Routes
  server.register(searchRoutes, { prefix: 'search' })
  server.register(titleRoutes, { prefix: 'title/:id' })

  return server
}

export default buildServer
