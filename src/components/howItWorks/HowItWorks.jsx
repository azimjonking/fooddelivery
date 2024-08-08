import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="howItWork">
      <div className="container">
        <h1>How it works.</h1>
        <div className="boxes">
          <div className="box">
            <img src="src/assets/image1.png" alt="" />
            <div className="box-text">
              <h2>Adapt your menu items</h2>
              <p>Easily adapt your menu using the <br /> webflow CMS and allow <br /> customers to browse your items.</p>
            </div>
          </div>
          <div className="box">
            <img src="src/assets/image2.png" alt="" />
            <div className="box-text">
              <h2>Accept online orders & takeout</h2>
              <p>Let your customers order and pay <br /> via the powerful ecommerce system, <br />or simple let them call your store.</p>
            </div>
          </div>
          <div className="box">
            <img src="src/assets/image3.png" alt="" />
            <div className="box-text">
              <h2>Manage delivery or takeout</h2>
              <p>Manage your own logistics and <br /> take orders simply through the <br />ecommerce system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
