import { FastifyInstance } from 'fastify'
import SearchControllers from './controllers'

async function searchRoutes(server: FastifyInstance) {
  server.get('/', SearchControllers.allMovies)
  server.get('/movie', SearchControllers.movieByTitle)
  server.get('/tv', SearchControllers.seriesByTitle)
  server.get('/person', SearchControllers.personByName)
  server.get('/episode', SearchControllers.episodeByTitle)
  server.get('/review', SearchControllers.reviewByComment)
  server.get('/award', SearchControllers.awardByName)
}

export default searchRoutes
