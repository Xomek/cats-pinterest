import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";

const AppRouter: FC = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;
