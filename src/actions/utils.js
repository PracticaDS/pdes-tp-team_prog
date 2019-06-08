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

export const createUserRequest = user => ({
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, cors, *same-origin
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user), // body data type must match "Content-Type" header
})

export const createNewGameRequest = () => ({
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createPlayGameRequest = () => ({
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, cors, *same-origin
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createDeleteGameRequest = () => ({
  method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, cors, *same-origin
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createUpdateGameRequest = game => ({
  method: 'PUT',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(game),
})

export const API_URL = 'http://localhost:8080'
