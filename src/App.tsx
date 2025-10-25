import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routerObj } from "./router";

function App() {
  const router = createBrowserRouter(routerObj);

  return <RouterProvider router={router} />;
}

export default App;
