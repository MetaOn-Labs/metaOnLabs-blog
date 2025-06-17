import Dashboard from './page/Dashboard';
import Team from './page/Team';
import Publication from './page/Publication';
import Media from './page/Media';

export const routes = [
  {
    name: "",
    path: "/",
    element: <Dashboard />,
  },
  {
    name: "Team",
    path: "/team",
    element: <Team />,
  },
  {
    name: "Media",
    path: "/media",
    element: <Media />,
  },
  {
    name: "Publication",
    path: "/publication",
    element: <Publication />,
  },
];

export default routes;
