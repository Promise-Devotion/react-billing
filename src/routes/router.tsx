import { createBrowserRouter } from 'react-router-dom'
import { Root } from '../components/Root'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import { Home } from '../pages/home/Home'
import { Welcome1 } from '../pages/welcome/Welcome1'
import { Welcome2 } from '../pages/welcome/Welcome2'
import { Welcome3 } from '../pages/welcome/Welcome3'
import { Welcome4 } from '../pages/welcome/Welcome4'
import { ItemsPage } from '../pages/Items/ItemsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeLayout />,
    errorElement: <Root />,
  },
  { path: '/home', element: <Home title="首页" /> },
  {
    path: '/welcome',
    element: <WelcomeLayout />,
    children: [
      { path: '1', element: <Welcome1 /> },
      { path: '2', element: <Welcome2 /> },
      { path: '3', element: <Welcome3 /> },
      { path: '4', element: <Welcome4 /> },
    ],
  },
  { path: '/items', element: <ItemsPage /> },
])
