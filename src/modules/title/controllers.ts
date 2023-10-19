import { FastifyRequest } from 'fastify'
import db from '../../utils/prisma'

const byMovie = ({ params }: FastifyRequest<{ Params: { id: string } }>) =>
  db.movie.findUnique({
    where: {
      id: parseInt(params.id, 10),
    },
  })
const byEpisode = ({ params }: FastifyRequest<{ Params: { id: string } }>) =>
  db.episode.findMany({
    where: {
      movieId: parseInt(params.id, 10),
    },
  })
const byCast = ({ params }: FastifyRequest<{ Params: { id: string } }>) =>
  db.person.findMany({
    where: {
      movies: {
        some: {
          id: parseInt(params.id, 10),
        },
      },
    },
  })
const byReview = ({ params }: FastifyRequest<{ Params: { id: string } }>) =>
  db.review.findMany({
    where: {
      movieId: parseInt(params.id, 10),
    },
  })
const byAward = ({ params }: FastifyRequest<{ Params: { id: string } }>) =>
  db.award.findMany({
    where: {
      movieId: parseInt(params.id, 10),
    },
  })

export default {
  byMovie,
  byEpisode,
  byAward,
  byCast,
  byReview,
}
