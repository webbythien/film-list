import { createBrowserRouter } from "react-router-dom";
import FilmScrenn from "../components/FilmScrenn";
import Details from "../components/Details";
import Loading from "../components/Loading";

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
  },
  {
    path: "/loading",
    element: <Loading></Loading>,
  }
]);

export default routers;
