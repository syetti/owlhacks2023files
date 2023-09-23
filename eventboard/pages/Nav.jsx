import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/auth">Auth</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;
