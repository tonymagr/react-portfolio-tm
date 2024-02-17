import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      {/* Show one of different views associated with URL */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;