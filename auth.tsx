import { AuthProvider } from 'react-admin'

export const authProvider: AuthProvider = {
  // Runs when an user attemps to log in
  login: ({ username, password }) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', JSON.stringify({ username, password }))
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  },
  // Runs when log out
  logout: () => {
    localStorage.removeItem('user')
    return Promise.resolve()
  },
  // Runs when API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('user')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  // Runs when the user navigates to a new location to check for auth
  checkAuth: ({}) => {
    const user = localStorage.getItem('user')
    return user ? Promise.resolve() : Promise.reject()
  },
  // Runs when user navigates to a new location to check for permissions or rules
  getPermissions: () => {
    return Promise.resolve()
  },
}
