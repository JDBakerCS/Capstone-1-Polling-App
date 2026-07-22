import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-navbar" aria-label="Main navigation">
      <div className="site-navbar__content">
        <Link className="site-navbar__brand" to="/">
          Polling App
        </Link>

        <div className="site-navbar__links">
          <Link to="/">Home</Link>
          <Link to="/create">Create Poll</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;