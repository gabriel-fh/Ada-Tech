import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // apaga o token
    localStorage.removeItem("token");
    // redireciona pro login
    navigate("/login");
  };

  return logout;
};
