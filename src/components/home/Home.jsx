import "./Home.css";
import path from "../../assets/Path 55.png"
import image from "../../assets/IMAGE (12).png"
const Home = () => {
  return (
    <section className="home">
        <div className="home-left">
            <h1>Beautiful food & takeaway, <span>delivered</span> to your door.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            <button>Place an Order</button>
            <div>
            <img src={path} alt="" />
            <p>Trustpilot</p>
            </div>
            <p className="p"><span>4.8 out of 5</span>based on 2000+ </p>

        </div>
        <div className="home-right">
          <img src={image} alt="" />
        </div>
    </section>
  );
};

export default Home;
