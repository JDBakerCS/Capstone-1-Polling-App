import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Polling App</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/polls/new">Create Poll</Link>
      </div>
    </nav>
  );
}

export default Navbar;