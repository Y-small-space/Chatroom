import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Login from "../view/Login";
import Contacts from "../view/Contacts";
import NullUser from "../view/Contacts/NullUser";
import Layouts from "../view/Layout";

const layoutRoutes = [
  {
    path: "/layout/chat/:userid",
    name: "chat",
    component: lazy(() =>
      import(/* webpackChunkName:"layout" */ "../view/Chat")
    ),
  },
  {
    path: "/layout/contacts",
    name: "contacts",
    component: Contacts,
    children: [
      {
        path: "/layout/contacts",
        component: () => <Navigate to="/layout/contacts/null" />,
      },
      {
        path: "/layout/contacts/null",
        name: "null",
        component: NullUser,
      },
      {
        path: "/layout/contacts/userdetails/:userid",
        name: "userDetails",
        component: lazy(() =>
          import(/* webpackChunkName:"layout" */ "../view/Contacts/UserDetails")
        ),
      },
      {
        path: "/layout/contacts/searchuser",
        name: "searchuser",
        component: lazy(() =>
          import(
            /* webpackChunkName:"layout" */ "../view/Contacts/SearchUserPage"
          )
        ),
      },
    ],
  },
  {
    path: "/layout/showprofile",
    name: "showprofile",
    component: lazy(() =>
      import(/* webpackChunkName:"layout" */ "../view/Profile/showProfile")
    ),
  },
  {
    path: "/layout/setprofile",
    name: "setprofile",
    component: lazy(() =>
      import(/* webpackChunkName:"layout" */ "../view/Profile/setProfile")
    ),
  },
];

export const routes = [
  {
    path: "/",
    component: () => <Navigate to="/login" />,
  },
  {
    path: "/login",
    name: "login",
    element: <Login />,
  },
];
