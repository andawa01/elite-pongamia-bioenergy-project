import React from "react";
import "./SectorResource.css";
import fifty from "../../assets/50litres.webp";
import sixty from "../../assets/60Litres.png";
import hundred from "../../assets/100Litres.jpg";
import twohundred from "../../assets/200Litres.jpg";
import threehundred from "../../assets/300Litres.jpg";
import fourhundred from "../../assets/400Litres.jpg";
import fivehundred from "../../assets/500Litres.jpg";

const products = [
  {
    size: "50L",
    power: "5kw",
    weight: "18–22 kg",
    capacity: "100 pax",
    price: "Ksh 300,000",
    image: fifty,
  },
  {
    size: "60L",
    power: "5kw",
    weight: "22–26 kg",
    capacity: "120 pax",
    price: "Ksh 350,000",
    image: sixty,
  },
  {
    size: "100L",
    power: "12–18kw",
    weight: "230 kg",
    capacity: "200 pax",
    price: "Ksh 530,000",
    image: hundred,
  },
  {
    size: "200L",
    power: "12–18kw",
    weight: "280 kg",
    capacity: "400 pax",
    price: "Ksh 650,000",
    image: twohundred,
  },
  {
    size: "300L",
    power: "12–18kw",
    weight: "330 kg",
    capacity: "600 pax",
    price: "Ksh 800,000",
    image: threehundred,
  },
  {
    size: "400L",
    power: "18–27kw",
    weight: "380 kg",
    capacity: "800 pax",
    price: "Ksh 900,000",
    image: fourhundred,
  },
  {
    size: "500L",
    power: "18–27kw",
    weight: "430 kg",
    capacity: "1000 pax",
    price: "Ksh 1,000,000",
    image: fivehundred,
  },
];

const SectorResource = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2>
            Jiko - Kul <span>Products</span>
          </h2>
          <p>Explore our bioenergy cooking solutions and pricing options.</p>
        </div>

        <div className="products-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={item.image} alt={item.size} />
              </div>

              <div className="product-content">
                <h3>{item.size} System</h3>

                <ul>
                  <li>⚡ Power: {item.power}</li>
                  <li>⚖️ Weight: {item.weight}</li>
                  <li>👥 Capacity: {item.capacity}</li>
                </ul>

                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorResource;
