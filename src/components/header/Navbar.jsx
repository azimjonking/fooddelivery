import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="head1">
        <img src="./src/assets/delivery.png" alt="" />
      </div>
      <div className="head2">
        <ul>
          <li>
            <p className="home">Home</p>
          </li>
          <li>
            <p>Order</p>
          </li>
          <li>
            <p>Company</p>
          </li>
          <li>
            <p>FAQ</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <img src="./src/assets/bean.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
