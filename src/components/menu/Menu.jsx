import "./Menu.css";

import MenuData from "./MenuData";

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu-header">
        <h1>Browse our menu</h1>
        <p>
          Use our menu to place an order online, or <span>phone</span> our store <br />
          to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <div className="menu-categories">
        <button className="active">Burgers</button>
        <button>Sides</button>
        <button>Drinks</button>
      </div>
      <div className="menu-container">
        {MenuData &&
          MenuData.map((food) => {
            return (
              <div className="menu-food" key={food.id}>
                <div className="food-img">
                  <img src={food.src} alt={food.title} />
                </div>
                <div className="food-info">
                  <div className="name">
                    <span>{food.title}</span>
                    <span>$ {food.price} USD</span>
                  </div>
                  <p>{food.description}</p>
                  <div className="add">
                    <span>1</span>
                    <button>Add to card</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <button>See Full Menu</button>
    </section>
  );
};

export default Menu;
