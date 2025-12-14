import "./Navbar.css";
import React, { useContext, useRef, useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { allItems } from "../../Components/Assets/all_items.jsx";
import '../CategorySection/Category.jsx'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // State to track navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide when scrolling down
      } else {
        setShowNavbar(true); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const dropdown_toggle = (e) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("nav-menu-visible");
    }
    e.target.classList.toggle("open");
  };

  const handleMenuItemClick = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("nav-menu-visible"); // Close the menu
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredResults([]);
    } else {
      const results = allItems.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredResults(results);
    }
  };

  const handleItemClick = () => {
    setSearchQuery("");
    setFilteredResults([]);
  };

  return (
    <div className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="nav-logo">
       
      <Link to="/"> <img src={logo} alt="" /></Link>

      <Link to="/"><p >MODERN</p></Link>
          
          
        
      </div>
      <img className="nav-dropdown" src={nav_dropdown} onClick={dropdown_toggle} alt="" />
      
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop"); handleMenuItemClick(); }}>
          <Link to="/">HOME</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
      </ul>

      {/* ✅ Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="searchbar"
          placeholder="Enter Your Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        {filteredResults.length > 0 && (
          <div className="search-results">
            {filteredResults.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="search-item"
                onClick={handleItemClick}
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>About Us</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
