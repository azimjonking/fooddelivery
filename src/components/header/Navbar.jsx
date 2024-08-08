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
            <a className='active'>Home</a>
          </li>
          <li>
            <a>Order</a>
          </li>
          <li>
            <a>Company</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Contact</a>
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
