import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './pages/__layouts/app'
import AuthLayout from './pages/__layouts/auth'
import Dashboard from './pages/app/dashboard'
import SignIn from './pages/auth/sign-in'
import SignUp from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> }
    ],
  },
])
