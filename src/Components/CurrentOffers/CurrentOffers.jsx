import React from "react";
import { Link } from "react-router-dom";
import "./CurrentOffers.css";
import SnowEffect from "./SnowEffect";

const CurrentOffers = () => {
  const products = [
     { id: 716, name: "Santa suit set (6 pcs, one size)", category: "Accessories", image: "https://i.postimg.cc/xdWgL4hn/santa-suit.jpg", price: 1800.0, new_price: 1800, old_price: 2200, description: "Santa suit set🔥🔥 ⏹️ One size fits most ⏹️ Includes jacket, trouser, belt, beard, hat and boots cover ⏹️ Perfect for Christmas events and parties ⏹️ Now available @1800 ⏹️" },
     { id: 717, name: "2M Christmas poinsettia garland", category: "Accessories", image: "https://i.postimg.cc/pTcW0KQd/2M-Christmas-poinsettia-garland.jpg", price: 1000.0, new_price: 1000, old_price: 1200, description: "2M Christmas poinsettia garland🔥🔥 ⏹️ Bright festive colors ⏹️ Ideal for doors, walls and Christmas trees ⏹️ Reusable and durable ⏹️ Now available @1000 ⏹️" },
     { id: 718, name: "Christmas tree storage bag (10FT)", category: "Accessories", image: "https://i.postimg.cc/Y21kLcZC/Christmas-tree-storage-Bags.jpg", price: 2000.0, new_price: 2000, old_price: 2200, description: "Christmas tree storage bag🔥🔥 ⏹️ Waterproof, termite proof and tear proof material ⏹️ Size 166cm x 76cm x 39cm ⏹️ Fits up to 10FT tree ⏹️ Durable and reusable ⏹️ Now available @2000 ⏹️" },
     { id: 719, name: "Christmas tree storage bag (7FT and below)", category: "Accessories", image: "https://i.postimg.cc/g2xTR8j0/christmass-bas.webp", price: 1800.0, new_price: 1800, old_price: 2000, description: "Christmas tree storage bag🔥🔥 ⏹️ Waterproof, termite proof and tear proof material ⏹️ Size 122cm x 51cm x 39cm ⏹️ Fits 7FT trees and below ⏹️ Durable and reusable ⏹️ Now available @1800 ⏹️" },
     { id: 720, name: "30cm Christmas wreath with lights (30 cm diameter) ", category: "Accessories", image: "https://i.postimg.cc/zf5T5Ysf/30cm-Christmas-wreath-with-lights.jpg", price: 1800.0, new_price: 1800, old_price: 2200, description: "30cm Christmas wreath with lights🔥🔥 ⏹️ Built-in warm lights ⏹️ Perfect for doors and walls ⏹️ Festive and reusable decor ⏹️ Now available @1800 ⏹️" },
     { id: 721, name: "Christmas decorative lantern", category: "Accessories", image: "https://i.postimg.cc/g0TRhLwc/Christmas-lantern.jpg", price: 450.0, new_price: 450, old_price: 550, description: "Christmas decorative lantern🔥🔥 ⏹️ Lamp-style festive design ⏹️ Perfect for indoor and outdoor decor ⏹️ Lightweight and reusable ⏹️ Sold per piece ⏹️ Now available @450 ⏹️" },
     { id: 722, name: "Redberry Christmas decor branches (10 branches)", category: "Accessories", image: "https://i.postimg.cc/vmVqcyBC/10-branches-redberry.jpg", price: 450.0, new_price: 450, old_price: 500, description: "Redberry Christmas decor branches🔥🔥 ⏹️ 10 decorative branches ⏹️ Ideal for Christmas trees and vases ⏹️ Festive and reusable ⏹️ Now available @450 ⏹️" },
     { id: 723, name: "Christmas decor package 1", category: "Accessories", image: "https://i.postimg.cc/bwjRYBWb/package1.jpg", price: 900.0, new_price: 900, old_price: 1000, description: "Christmas decor package 1🔥🔥 ⏹️ Includes 2 deers, 1 Father Christmas, 6 cones, 6 bows and 1 star ⏹️ Perfect for tree and home decor ⏹️ Now available @900 ⏹️" },
     { id: 724, name: "Christmas decor package 2", category: "Accessories", image: "https://i.postimg.cc/jqpHv1s4/package2.jpg", price: 900.0, new_price: 900, old_price: 1000, description: "Christmas decor package 2🔥🔥 ⏹️ Includes Christmas banner, sock, Father Christmas, balls, bows, plums, gift boxes, flowers, drums and bells ⏹️ Full festive decor set ⏹️ Now available @900 ⏹️" },
     { id: 725, name: "Christmas decor package 3", category: "Accessories", image: "https://i.postimg.cc/P541Xr14/package3.jpg", price: 900.0, new_price: 900, old_price: 1000, description: "Christmas decor package 3🔥🔥 ⏹️ Includes deer, star, 3 snowmen, Christmas banner, balls, berries, bells and sticks ⏹️ Ideal for complete tree decoration ⏹️ Now available @900 ⏹️" },
     { id: 726, name: "Christmas door mat (50x80cm)", category: "Accessories", image: "https://i.postimg.cc/gJ9z13r5/christmass-mat.jpg", price: 750.0, new_price: 750, old_price: 900, description: "Christmas door mat🔥🔥 ⏹️ Size 50x80cm ⏹️ Festive Christmas design ⏹️ Durable and easy to clean ⏹️ Perfect for entrances ⏹️ Now available @750 ⏹️" },
     { id: 727, name: "Christmas tree skirt (90x90cm)", category: "Accessories", image: "https://i.postimg.cc/jSVMw5wd/skirt.jpg", price: 999.0, new_price: 999, old_price: 1200, description: "Christmas tree skirt🔥🔥 ⏹️ Size 90x90cm ⏹️ Soft and festive design ⏹️ Perfect for covering tree base ⏹️ Durable and reusable ⏹️ Now available @999 ⏹️" },
     { id: 728, name: "Tree Decor Fairy Light Pendant (Moon LED)", category: "Accessories", image: "https://i.postimg.cc/ZKLLRcSw/Tree-Decor-Fairy-Light-Pendant-moon-LED-Light.jpg", price: 499.0, new_price: 499, old_price: 550, description: "Tree Decor Fairy Light Pendant🔥🔥 ⏹️ Moon-shaped LED light ⏹️ Perfect for Christmas trees and room decor ⏹️ Soft glow and energy efficient ⏹️ Now available @499 ⏹️" },
     { id: 729, name: "Curtain Light Short (4m x 0.7m)", category: "Accessories", image: "https://i.postimg.cc/9FzfRX3L/christmas-lights.jpg", price: 999.0, new_price: 999, old_price: 1100, description: "Curtain Light Short🔥🔥 ⏹️ Electric powered ⏹️ Size 4m x 0.7m ⏹️ Perfect for windows, walls and festive decoration ⏹️ Soft and bright illumination ⏹️ Now available @999 ⏹️" },
 
     { id: 730, name: "White Christmas Tree (2.1m / 7ft)", category: "Accessories", image: "https://i.postimg.cc/bv2Rgf7p/White-Christmas-Tree.jpg", price: 5700.0, new_price: 5700, old_price: 6000, description: "White Christmas Tree🔥🔥 ⏹️ Size 2.1 meters (7ft) ⏹️ Elegant and full branches ⏹️ Perfect for festive home decoration ⏹️ Durable and reusable ⏹️ Now available @5700 ⏹️" },


    { id: 715, name: "Brown dinnerset (24 pcs)", category: "dinnersets", image: "https://i.postimg.cc/hv3BrgBQ/dinnerset-brown.jpg", price: 6000.0, new_price: 6000, old_price: 6500, description: "Brown 24 pcs dinnerset🔥🔥 ⏹️ Includes 6 cups, 6 bowls, 6 side plates and 6 dinner plates ⏹️ Elegant and durable ⏹️ Perfect for everyday use and guests ⏹️ Now available @6000 ⏹️" },
    { id: 708, name: "MDF coffee table(marble effect)", category: "Furniture", image:"https://i.postimg.cc/FKp1cv05/mdf-table-round.jpg", price: 5800.0, new_price: 5800, old_price: 6500 , description: "2 pairs of nesting table with Marble effect🔥🔥⏹️ Material: mdf wood, heat resistant, water resistant. Now available @5800 ⏹️ 2 pairs ⏹️ " },
    { id: 709, name: "Pure marble top nesting coffee tables (Black stand)", category: "Furniture", image: "https://i.postimg.cc/Gpv52RgJ/pure-marble-table.jpg", price: 7500.0, new_price: 7500, old_price: 8000, description: "Pure marble top nesting coffee tables🔥🔥 ⏹️ Genuine marble top ⏹️ Strong black metal stand ⏹️ Modern and elegant design ⏹️ Perfect for living rooms ⏹️ Now available @7500 ⏹️" },
    { id: 710, name: "Synix washing machine (Top Load)", category: "Electronics", image: "https://i.postimg.cc/rmpKMpzQ/10-kg-top-load-synix-washing-machine.jpg", price: 23000, new_price: 23000, old_price: 30000, description: "Synix top load washing machine🔥🔥 ⏹️ Powerful cleaning performance ⏹️ Energy & water efficient ⏹️  large capacity ⏹️ Easy to use & low noise ⏹️ Now available @23,000 ⏹️" },
    { id: 711, name: "Marble oil dispenser", category: "Kitchenware", image: "https://i.postimg.cc/dtRTQxw8/marle-oil-dispenser.jpg", price: 1000.0, new_price: 1000, old_price: 1300, description: "Marble oil dispenser🔥🔥 ⏹️ Elegant marble finish ⏹️ Durable and easy to clean ⏹️ Perfect for oil, vinegar and sauces ⏹️ Now available @1000 ⏹️" },
    { id: 712, name: "Automatic oil dispenser", category: "kitchenware", image: "https://i.postimg.cc/hvTMt1tG/automatic-oil-jar.jpg", price: 550.0, new_price: 550, old_price: 650, description: "Automatic oil dispenser🔥🔥 ⏹️ One-touch control ⏹️ Leak-proof and easy to use ⏹️ Perfect for cooking oils and vinegar ⏹️ Now available @550 ⏹️" },
    { id: 713, name: "Oil spray dispenser", category: "kitchenware", image: "https://i.postimg.cc/3xn1NRY2/oil-spray.jpg", price: 650.0, new_price: 650, old_price: 750, description: "Oil spray dispenser🔥🔥 ⏹️ Even oil spraying ⏹️ Helps control oil usage ⏹️ Durable and easy to clean ⏹️ Now available @550 ⏹️" },
    { id: 714, name: "12 pcs Redberry Aluminium pots", category: "coockware", image: "https://i.postimg.cc/CLdk7NgQ/12-pcs-redbery-normal-sufurias.jpg", price: 6700.0, new_price: 6700, old_price: 7000, description: "12 pcs normal Redberry sufurias🔥🔥 ⏹️ Aluminium material ⏹️ Heavyweight and durable ⏹️ No lids ⏹️ Ideal for daily cooking ⏹️ Now available @6700 ⏹️" },


    { id: 700, name: "Japanese 24 pc dinnerset", image: "https://i.postimg.cc/pTzTgXGr/japanese-dinnerset.jpg", price: 3000, new_price: 2600, old_price: 3000, description: "24 pc japanese dinnerset 🔥🔥 includes: 6 dinnerplates,  6 sideplates,  6 bowls,  6 cups ⏹️ ⏹️"  },
    { id: 701, name: "Primdale 2 in 1 blender", image: "https://i.postimg.cc/vTX6NZTy/blender-primdale-2-in-1.jpg", price:1500, new_price: 1500, old_price: 2000 , description: "2 in 1 Primdale Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 702, name: "Ailyons 2 in 1 blender", image: "https://i.postimg.cc/XYWYCbY8/ailyons-2-in-1-blender.jpg", price:1800, new_price: 1800, old_price: 2000 , description: "2 in 1 Ailyons Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 703, name: "Nunix  2 in 1 blender", image: "https://i.postimg.cc/vTmSjDhj/nunix-blender-2in1.jpg", price:1500, new_price: 1500, old_price: 2000 , description: "2 in 1 Nunix Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 704, name: "Rashnik  2 in 1 blender", image: "https://i.postimg.cc/QNkTY0WD/Rashnik-2in1-blender.webp", price:1800, new_price: 1800, old_price: 2000 , description: "2 in 1 Rashnik Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 705, name: "Ailyons 2 in 1 blender", image: "https://i.postimg.cc/s2sFmfFD/Ailyons-green-2in1-blender.webp", price:1800, new_price: 1800, old_price: 2000 , description: "2 in 1 Ailyons Blender, 🔥🔥 includes a jug, motar and a grinder"},
    { id: 706, name: "silicone spoons set 12 pcs", image: "https://i.postimg.cc/FzTs5PSn/silicone-set-12-pc.jpg", price:1000, new_price: 1000, old_price: 1300 , description: "12 pcs silicone spoons, 🔥🔥 includes a spoons, whisk, spartula, tongs"},
    { id: 707, name: "silicone spoons set 19 pcs", image: "https://i.postimg.cc/5y6DypGz/19-pc-silicone-spoons.jpg", price:2200, new_price: 2200, old_price: 2400 , description: "19 pcs silicone spoons, 🔥🔥 includes 6 Knives, scissors, spoons, whisk, spartula, tongs"},
    { id: 77, name: "14 Pcs TC Nonstick", category: "Cookware", image:"https://i.postimg.cc/3xkHNXRD/tc.png", price: 5300.0, new_price: 5300, old_price: 5600 , description: "14 Pcs Tc Nonstick 🔥🔥⏹️ 5 cooking pots 20cm, 22cm, 26cm, 28cm, 30cm ⏹️ 1 Frying Pan ⏹️ 2 Serving Spoons ⏹️ 1 Scrubber ⏹️Now available @5,300 ksh " },
   
    


  ];

  return (
    <div className="offers-container">
        <SnowEffect />


      {/* Title */}
      <div className="offers-title">🔥🎄🎄 Christmas OFFERS !! 🎄🎄🎄</div>

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
