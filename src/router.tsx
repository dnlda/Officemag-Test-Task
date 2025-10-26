import { type RouteObject } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ButtonsVariantPage from "./pages/ButtonsVariantPage";
import FormPage from "./pages/FormPage";
import TextPage from "./pages/TextPage";
import BlackPage from "./pages/BlackPage";
import ShowcasePage from "./pages/ShowcasePage";
import BeautyPage from "./pages/BeautyPage";

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
      {
        path: "black_page",
        element: <BlackPage />,
      },
      {
        path: "showcase_page",
        element: <ShowcasePage />,
      },
      {
        path: "beauty_page",
        element: <BeautyPage />,
      },
    ],
  },
];
