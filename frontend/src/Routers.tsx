import { createBrowserRouter } from "react-router-dom";
import Error from "./components/error";
import { Suspense } from "react";
import Dashboard from "./pages/Dashboard";

import Loading from "./components/loading";
import NotFound from "./components/not-found";
import LoginForm from "./components/(auth)/Login";
import Layout from "./layout/Layout";

const routes = [
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <LoginForm />,
    path: "/login",
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  } as any, // Using "as any" to bypass type checking for experimental flags
});
