import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>404 - Not Found</h1>
    <Link to="/">На главную</Link>
  </div>
);
export default NotFound;