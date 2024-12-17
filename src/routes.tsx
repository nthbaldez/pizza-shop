import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './pages/__layouts/app'
import AuthLayout from './pages/__layouts/auth'
import Dashboard from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import SignIn from './pages/auth/sign-in'
import SignUp from './pages/auth/sign-up'
import { Error } from './pages/error'
import { NotFound } from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
