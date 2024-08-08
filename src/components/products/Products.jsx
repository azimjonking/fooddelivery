import "./Products.css";
import product from "../../assets/Products.png"

const Products = () => {
  return (
    <section className="products1">
      <div className="products">
      <h2>Produts</h2>
          <h1>The home of <br />
          fresh products</h1>

        <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's  <br />standard dummy text ever since the 1500.</p>

      
        <button>Learn about us</button>
      </div>  


     

    <img src={product} alt="" />

    </section>
  );
};

export default Products;
