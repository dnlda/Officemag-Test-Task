import { type RouteObject } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ButtonsVariantPage from "./pages/ButtonsVariantPage";
import FormPage from "./pages/FormPage";
import TextPage from "./pages/TextPage";

export const routerObj: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "buttons_variant_page",
        element: <ButtonsVariantPage />,
      },
      {
        path: "form_page",
        element: <FormPage />,
      },
      {
        path: "text_page",
        element: <TextPage />,
      },
    ],
  },
];
