import { Link, Outlet } from "react-router-dom"; // [cite: 79]

const Layout = () => (
  <> 
    <nav style={{ display: 'flex', gap: '15px', padding: '10px' }}>
      <Link to="/">Главная</Link>
      <Link to="/courses">Курсы</Link>
      <Link to="/about">О нас</Link>
    </nav>
    <main style={{ padding: '20px' }}>
      <Outlet />
    </main>
    <footer style={{ padding: '10px' }}>Student Portal 2026</footer>
  </>
);

export default Layout;