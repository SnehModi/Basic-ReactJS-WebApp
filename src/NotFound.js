import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Please open the correct link. </p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default NotFound;
