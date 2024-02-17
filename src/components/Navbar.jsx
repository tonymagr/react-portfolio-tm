export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="inline-block half-page-width text-light">
        <div>
          <h2>Tony Magrady Portfolio</h2>
        </div>
      </div>
      <div className="container-fluid half-page-width">
        <div className="navbar-expand-lg" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}