import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  );
};

export default AppRoutes;
