import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Recipe from "../pages/Recipe";
import Search from "../pages/Search";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:name?/:id?" element={<Recipe />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
