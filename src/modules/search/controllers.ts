import { FastifyReply, FastifyRequest } from 'fastify'
import db from '../../utils/prisma'

const allMovies = () => db.movie.findMany()
const movieByTitle = ({
  query,
}: FastifyRequest<{ Querystring: { q: string } }>) =>
  db.movie.findMany({
    where: {
      title: {
        contains: query.q,
      },
    },
  })

const seriesByTitle = ({
  query,
}: FastifyRequest<{ Querystring: { q: string } }>) =>
  db.movie.findMany({
    where: {
      title: {
        contains: query.q as string,
      },
      type: 'series',
    },
  })
const personByName = async ({
  query,
}: FastifyRequest<{ Querystring: { q: string } }>) =>
  db.person.findMany({
    where: {
      name: {
        contains: query.q as string,
      },
    },
  })
const episodeByTitle = async ({
  query,
}: FastifyRequest<{ Querystring: { q: string } }>) =>
  db.episode.findMany({
    where: {
      title: {
        contains: query.q as string,
      },
    },
  })
const reviewByComment = async ({
  query,
}: FastifyRequest<{ Querystring: { q: string } }>) =>
  db.review.findMany({
    where: {
      comment: {
        contains: query.q as string,
      },
    },
  })
const awardByName = async ({
  query,
}: FastifyRequest<{ Querystring: { q: string } }>) =>
  db.award.findMany({
    where: {
      name: {
        contains: query.q as string,
      },
    },
  })

export default {
  allMovies,
  movieByTitle,
  seriesByTitle,
  personByName,
  episodeByTitle,
  reviewByComment,
  awardByName,
}
