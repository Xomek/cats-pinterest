import { ComponentType } from "react";
import { AllCats, LikedCats } from "../pages";
import { ALL_CATS_ROUTE, LIKED_CATS_ROUTE } from "./types";

interface IRoute {
  path: string;
  Component: ComponentType;
}

export const publicRoutes: IRoute[] = [
  {
    path: ALL_CATS_ROUTE,
    Component: AllCats,
  },
  {
    path: LIKED_CATS_ROUTE,
    Component: LikedCats,
  },
];
