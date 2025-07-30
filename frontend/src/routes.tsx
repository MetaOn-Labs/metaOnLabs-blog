import Dashboard from './page/Dashboard'
import Team from './page/Team'
import Publication from './page/Publication'
import Media from './page/Media'
import Youtube from './page/Youtube'
import Gallery from './page/Gallery'
import Lectures from './page/Lectures'

export const routes = [
  {
    name: '',
    path: '/',
    element: <Dashboard />,
    items: []
  },
  {
    name: 'Team',
    path: '/team',
    element: <Team />,
    items: []
  },
  {
    name: 'Media',
    path: '/media',
    element: <Media />,
    items: [
      {
        name: 'News',
        path: 'news',
        element: <Media />,
      },
      {
        name: 'Youtube',
        path: 'youtube',
        element: <Youtube />,
      },
      {
        name: 'Gallery',
        path: 'gallery',
        element: <Gallery />,
      },
    ],
  },
  {
    name: 'Publication',
    path: '/publication',
    element: <Publication />,
    items: [
      { name: 'Publication', path: 'publication', element: <Publication /> },
      { name: 'Lectures', path: 'lectures', element: <Lectures /> },
    ],
  },
]

export default routes
