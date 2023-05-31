import Home from "../pages/home"
import About from "../pages/about"
import News from "../pages/about/news"
import Message from "../pages/about/message"
import { Navigate } from "react-router-dom";
import Detail from "../pages/about/message/detail"

const routes = [
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "message",
        element: <Message />,
        children: [
          {
            path: "detail/:id/:title/:content",
            element: <Detail />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routes;