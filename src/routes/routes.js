import { createBrowserRouter } from "react-router-dom";
import FilmScrenn from "../components/FilmScrenn";
import Details from "../components/Details";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <FilmScrenn></FilmScrenn>,
  },
  {
    path: "/details",
    element: <Details></Details>,
  },
  {
    path: "/*",
    element: <FilmScrenn></FilmScrenn>,
  }
]);

export default routers;
