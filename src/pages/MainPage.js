import { Link } from "react-scroll";
import Bull from "../assets/Bull.png";
import SearchBarWithMic from "../components/Search";

export default function MainPage() {
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <img className="logo" src={Bull} alt="Bull" />
            </li>
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
      <section id="Home">
        <SearchBarWithMic
          style={{
            height: 44,
            width: 355
          }}
        ></SearchBarWithMic>
      </section>
      <section id="Sector">Sector</section>
      <section id="Products">Products</section>
      <section id="About">About Us</section>
    </div>
  );
}
