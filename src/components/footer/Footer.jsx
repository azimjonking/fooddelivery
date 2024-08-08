import "./Footer.css";

const Footer = () => {
  return (
    <div className="foote">
      <div className="footer">
        <div className="footer1">
          <div className="foot1">
            <img src="./src/assets/delivery.png" alt="" />
            <p>
              Takeaway & Delivery template <br /> for small - medium businesses.
            </p>
          </div>
        </div>
        <div className="footer2">
          <div className="foot2">
            <ul>
              <li>
                <h3>COMPANY</h3>
              </li>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Order</p>
              </li>
              <li>
                <p>FAQ</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </div>
          <div className="foot3">
            <ul>
              <li>
                <h3>TEMPLATE</h3>
              </li>
              <li>
                <p>Style Guide</p>
              </li>
              <li>
                <p>Changelog</p>
              </li>
              <li>
                <p>Licence</p>
              </li>
              <li>
                <p>Webflow University</p>
              </li>
            </ul>
          </div>
          <div className="foot4">
            <ul>
              <li>
                <h3>FLOWBASE</h3>
              </li>
              <li>
                <p>More Cloneables</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerc">
        <div className="foot5">
          <p>
            More Cloneables <span>Flowbase</span>· Powered by
            <span>Webflow</span>
          </p>
        </div>
        <div className="foot6">
          <img src="./src/assets/Frame (56).png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
