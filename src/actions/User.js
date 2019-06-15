import { createThunk, GET, POST } from './utils'

const GET_GAMES = 'GET_GAMES'
const LOGIN = 'LOGIN'

export const login = user => {
  const parse = ({ result: { _id, username }, type }) =>
    type === 'SUCCESS' ? { id: _id, username } : { id: null }
  return createThunk({ action: LOGIN, url: '/users/login', payload: user, parse, method: POST })
}

export const getGames = userId => {
  const parse = ({ result, type }) => (type === 'SUCCESS' ? result : [])
  return createThunk({ action: GET_GAMES, url: `/users/${userId}/games`, parse, method: GET })
}
