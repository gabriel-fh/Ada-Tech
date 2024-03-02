import { Navigate } from "react-router-dom";
import { useUserData } from "../../hooks/use-user-data";

type Props = {
  children: React.ReactNode;
  role: "user" | "admin";
};

export const ProtectedRoute = ({ children, role }: Props) => {
  const user = useUserData();

  if (!user?.role || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};
