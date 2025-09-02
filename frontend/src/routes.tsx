import Dashboard from './page/Dashboard'
import Team from './page/Team'
import Publication from './page/Publication'
import Media from './page/Media'
import Youtube from './page/Youtube'
import Gallery from './page/Gallery'
import Lectures from './page/Lectures'
import GalleryDetail from './page/GalleryDetail'
import Notice from './page/Notice'
import NoticeDetail from './page/NoticeDetail.'

export const routes = [
  {
    name: '',
    path: '/',
    element: <Dashboard />,
    items: [],
  },
  {
    name: 'Team',
    path: '/team',
    element: <Team />,
    items: [],
  },
  {
    name: 'Media',
    path: '/media',
    element: <Media />,
    items: [
      {
        name: 'News',
        path: '/media/news',
        element: <Media />,
      },
      {
        name: 'Youtube',
        path: '/media/youtube',
        element: <Youtube />,
      },
      {
        name: 'Gallery',
        path: '/media/gallery',
        element: <Gallery />,
      },
      {
        name: 'GalleryDetail',
        path: '/media/gallery/:gid',
        element: <GalleryDetail />
      },
    ],
  },
  {
    name: 'Publication',
    path: '/publication',
    element: <Publication />,
    items: [
      { name: 'Publication', path: '/publication/publication', element: <Publication /> },
      { name: 'Lectures', path: '/publication/lectures', element: <Lectures /> },
    ],
  },
  {
    name: 'Notice',
    path: '/notice',
    element: <Notice />,
    items: [
      {
        name: 'Notice',
        path: '/notice',
        element: <Notice />
      },
      {
        name: 'NoticeDetail',
        path: '/notice/:nid',
        element: <NoticeDetail />
      },
    ],
  },
]

export default routes
