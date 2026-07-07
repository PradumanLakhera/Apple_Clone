const navLinks = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "Support",
];

const NavBar = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <nav className="navbar">
      <img src={`${base}logo.svg`} alt="Apple Logo" className="logo" />

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      <div className="nav-icons">
        <img
          src={`${base}search.svg`}
          alt="Search"
          className="icon"
        />
        <img
          src={`${base}cart.svg`}
          alt="Cart"
          className="icon"
        />
      </div>
    </nav>
  );
};

export default NavBar;