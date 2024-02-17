// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div className="footer-format">
      {[
        <Link key={1} className="nav-link profile-footer" to="https://github.com/tonymagr" target="_blank">
          GitHub Profile
        </Link>,
      ]}
    </div>
  );
}