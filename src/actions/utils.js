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

export const API_URL = 'http://localhost:8080'

export const isFunction = functionToCheck =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
