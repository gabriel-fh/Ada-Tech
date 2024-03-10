import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Role } from "../../types";
import { useAuth } from "../../providers/AuthProvider";

type Props = {
  children: React.ReactNode;
  role: Role;
};

export const ProtectedRoute = ({ children, role }: Props) => {
  const { user } = useAuth();

  if (!user?.role || user.role !== role) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return children;
};
