import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Repositores from "./pages/Repositores/Repositores";
import Home from "./pages/Home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/repositores' element={<Repositores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;