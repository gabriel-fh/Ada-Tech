import { useLogout } from "../../hooks/use-logout";

export const Backstage = () => {
  const logout = useLogout();

  return (
    <div className="container">
      <div className="home">
        <h1 className="title">BACKSTAGE</h1>

        <button className="btn btn--white" onClick={() => logout()}>
          Logout{" "}
        </button>
      </div>
    </div>
  );
};
