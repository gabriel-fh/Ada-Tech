import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "./use-user-data";

export const useProtected = () => {
  const user = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
};
