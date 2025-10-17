import { Link } from "@tanstack/react-router";
const NavBar = () => {
  return (
    <ul>
      <Link to="/">Home - </Link>
      <Link to="/newcustomer">Add a new Customer - </Link>
      <Link to="/quotation">Add a new quotation</Link>
    </ul>
  );
};

export default NavBar;
