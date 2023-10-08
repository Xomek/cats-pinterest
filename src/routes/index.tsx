import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts";
import { AllCats, LikedCats } from "../pages";
import { ROUTES } from "./routes";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <AllCats />,
      },
      {
        path: ROUTES.LIKED,
        element: <LikedCats />,
      },

      { path: "*", element: <Navigate to={ROUTES.ROOT} /> },
    ],
  },
]);

export default router;
