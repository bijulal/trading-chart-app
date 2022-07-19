import "./styles.css";
import { Link } from "react-scroll";

export default function App() {
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="Home">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Sector">
                Sector
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Products">
                Products
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="About">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="Home">Home</section>
      <section id="Sector">Sector</section>
      <section id="Products">Products</section>
      <section id="About">About Us</section>
    </div>
  );
}
