import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import Search from "../pages/Search";
import { useEffect, useRef } from "react";

const AppRoutes = () => {
  const location = useLocation();
  const homeScrollPosition = useRef<number>(0);

  // Faz com que sempre as páginas sempre comecem do topo. 
  // Caso navegue da home pra outra página, ao voltar pra home, é retomado do lugar que parou
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, homeScrollPosition.current);
    } else {
      homeScrollPosition.current = window.scrollY;
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:name/:id" element={<Recipe />} />
      <Route path="/search/:name?" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
