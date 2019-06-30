export const BEGIN = 'BEGIN'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'

export const customFetch = (api, req) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(req)
      }, 1000)
    } catch (err) {
      reject(err)
    }
  })

export const createUpdateGameRequest = game => ({
  method: 'PUT',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(game),
})

export const API_URL = process.env.API_URL || 'http://localhost:8080/'

export const createAction = (type, body) => ({ type, body })

const createRequest = (payload, method) => ({
  method,
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  ...(method !== 'GET' && payload && { body: JSON.stringify(payload) }),
})

export const createThunk = ({
  action,
  url,
  payload,
  parse = ({ result }) => result,
  method,
}) => dispatch => {
  dispatch(createAction(`${action}_${BEGIN}`))
  return fetch(`${API_URL}${url}`, createRequest(payload, method))
    .then(result => result.json())
    .then(result => {
      dispatch(createAction(`${action}_${SUCCESS}`, parse({ result, type: SUCCESS })))
    })
    .catch(result => {
      dispatch(createAction(`${action}_${SUCCESS}`, parse({ result, type: ERROR })))
    })
}
