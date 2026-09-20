import { Link, Outlet, useLocation } from "react-router";

export const PortafolioLayout = () => {
  const url = useLocation();

  return (
    <div>

      {url.pathname !== "/Home" && (
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      )}

      <Outlet />

    </div>
  );
};
