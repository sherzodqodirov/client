import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import LayoutCore from "./components/LayoutCore";
import Datainfo from "./pages/Datainfo";
import Error404 from "./pages/Error404";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LayoutCore/>}>
                  <Route index element={<Home/>}/>
                  <Route path={"/plane/:id"} element={<Datainfo/>}/>
                  <Route path={"/create_plane"} element={<CreatePage/>}/>
              </Route>
              <Route path={"*"} element={<Error404/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
