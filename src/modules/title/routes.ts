import { FastifyInstance } from 'fastify'
import TitleControllers from './controllers'

async function titleRoutes(server: FastifyInstance) {
  server.get('/', TitleControllers.byMovie)
  server.get('/episodes', TitleControllers.byEpisode)
  server.get('/cast', TitleControllers.byCast)
  server.get('/reviews', TitleControllers.byReview)
  server.get('/awards', TitleControllers.byAward)
}

export default titleRoutes
