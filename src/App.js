import "./App.css";
import React, { useEffect } from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AuthContextProvider, FilmAuth } from "./context/FilmContext";
import FilmScrenn from "./components/FilmScrenn";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routes";
import Details from "./components/Details";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={routers}>
        <div className="App">
          <ResponsiveAppBar>
            <FilmScrenn />
          </ResponsiveAppBar>
        </div>
      </RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
