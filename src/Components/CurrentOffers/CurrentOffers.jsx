import React from "react";
import { Link } from "react-router-dom";
import "./CurrentOffers.css";
import SnowEffect from "./SnowEffect";

const CurrentOffers = () => {
  const products = [
    { id: 700, name: "Japanese 24 pc dinnerset", image: "https://i.postimg.cc/pTzTgXGr/japanese-dinnerset.jpg", price: 2600, new_price: 2600, old_price: 3000, description: "24 pc japanese dinnerset 🔥🔥 includes: 6 dinnerplates,  6 sideplates,  6 bowls,  6 cups ⏹️ ⏹️"  },
    { id: 701, name: "Primdale 2 in 1 blender", image: "https://i.postimg.cc/vTX6NZTy/blender-primdale-2-in-1.jpg", price:1500, new_price: 1500, old_price: 2000 , description: "2 in 1 Primdale Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 702, name: "Ailyons 2 in 1 blender", image: "https://i.postimg.cc/XYWYCbY8/ailyons-2-in-1-blender.jpg", price:1800, new_price: 1800, old_price: 2000 , description: "2 in 1 Ailyons Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 703, name: "Nunix  2 in 1 blender", image: "https://i.postimg.cc/vTmSjDhj/nunix-blender-2in1.jpg", price:1500, new_price: 1500, old_price: 2000 , description: "2 in 1 Nunix Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 704, name: "Rashnik  2 in 1 blender", image: "https://i.postimg.cc/QNkTY0WD/Rashnik-2in1-blender.webp", price:1800, new_price: 1800, old_price: 2000 , description: "2 in 1 Rashnik Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 705, name: "Ailyons 2 in 1 blender", image: "https://i.postimg.cc/s2sFmfFD/Ailyons-green-2in1-blender.webp", price:1800, new_price: 1800, old_price: 2000 , description: "2 in 1 Ailyons Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 706, name: "silicone spoons set 12 pcs", image: "https://i.postimg.cc/FzTs5PSn/silicone-set-12-pc.jpg", price:1000, new_price: 1300, old_price: 1300 , description: "12 pcs silicone spoons, 🔥🔥 includes a spoons, whisk, spartula, tongs"},
    { id: 707, name: "silicone spoons set 19 pcs", image: "https://i.postimg.cc/5y6DypGz/19-pc-silicone-spoons.jpg", price:2200, new_price: 2200, old_price: 2400 , description: "19 pcs silicone spoons, 🔥🔥 includes 6 Knives, scissors, spoons, whisk, spartula, tongs"},




  ];

  return (
    <div className="offers-container">
        <SnowEffect />


      {/* Title */}
      <div className="offers-title">🔥 Black November & Christmas Deals 🎄</div>

      {/* Scrolling Wrapper */}
      <div className="scroll-wrapper">
        {products.map((p) => (
          <Link key={`a-${p.id}`} to={`/product/${p.id}`}>
            <div className="offer-item">
              <img src={p.image} alt={p.name} />
              <p className="offer-name">{p.name}</p>
              <div className="offer-prices">
                <span className="offer-new">sh.{p.new_price}</span>
                <span className="offer-old">sh.{p.old_price}</span>
              </div>
            </div>
          </Link>
        ))}

        {/* Duplicate for seamless infinite scroll */}
        {products.map((p) => (
          <Link key={`b-${p.id}`} to={`/product/${p.id}`}>
            <div className="offer-item">
              <img src={p.image} alt={p.name} />
              <p className="offer-name">{p.name}</p>
              <div className="offer-prices">
                <span className="offer-new">sh.{p.new_price}</span>
                <span className="offer-old">sh.{p.old_price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* OPTIONAL SNOW */}
      <div id="snow-container"></div>
    </div>
  );
};

export default CurrentOffers;
