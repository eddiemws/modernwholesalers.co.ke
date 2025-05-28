import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
import banner_kitchen from '../Assets/banner_kitchen.PNG';
import banner_beddings from '../Assets/banner_beddings.PNG';
import banner_electronics from '../Assets/banner_electronics.PNG';
import { allItems } from "../../Components/Assets/all_items.jsx";




const categories = [
  "Cookware", "Beddings", "Kitchenware", "Electronics", "Furniture",
  "Clothing", "Shoes", "Accessories", "Beauty Products"
];

const bannerImages = [ banner_kitchen, banner_beddings, banner_electronics, "https://i.postimg.cc/28x3Fy10/furniture-banner.png"];

const CategoryBannerSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [visibleItems, setVisibleItems] = useState(12); // Show 3 rows initially (4 columns × 3 rows = 12 items)
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const filtered = allItems.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setVisibleItems(12); // Reset visible items when changing category
  };

  const handleShowMore = () => {
    setVisibleItems(prev => prev + 12); // Show 3 more rows
  };

  const displayedItems = filteredItems.slice(0, visibleItems);

  return (
    <div className="relative flex flex-col justify-center items-center py-8 px-4 md:px-16">
      <div className="relative flex w-full max-w-screen-lg h-[300px] md:h-[400px]">
        <div className={`bg-white p-4 shadow-lg rounded-xl transition-all duration-300 md:w-auto w-fit flex flex-col items-start overflow-hidden md:overflow-visible ${menuOpen ? "block" : "hidden"} md:flex`}>
          <div className="flex items-center gap-2 mb-4">
            <Menu className="cursor-pointer block md:hidden "  onClick={() => setMenuOpen(!menuOpen)} size={10} color="blue" />
            <h2 className="font-bold text-lg md:block">Categories</h2>
          </div>
          <ul className="md:block flex flex-col overflow-y-auto max-h-52 md:max-h-none">
            {categories.map((category, index) => (
              <li key={index} className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg" onClick={() => handleCategoryClick(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <Menu className="cursor-pointer absolute top-3 left-3 md:hidden z-10 bg-red-500 p-2 rounded-full shadow-lg" onClick={() => setMenuOpen(!menuOpen)} size={28}/>

        <div className="relative flex-1 overflow-hidden rounded-xl flex items-center justify-center">
          <button className="absolute left-2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}><ChevronLeft /></button>
          
          <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-xl">
            <motion.img 
              key={currentSlide} 
              src={bannerImages[currentSlide]} 
              alt="Banner" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }} 
              className="w-auto max-w-full h-auto max-h-full object-contain"
            />
          </div>

          <button className="absolute right-2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}><ChevronRight /></button>
        </div>
      </div>

      <div className="w-full max-w-screen-lg mt-6">
        {activeCategory && <h3 className="text-lg font-bold mb-4">{activeCategory} Items</h3>}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="border p-4 rounded-lg shadow-md cursor-pointer flex flex-col justify-between h-auto pb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/product/${item.id}`)}
            > 
              <div className="w-full h-44 flex justify-center items-center">
                <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain rounded-md" />
              </div>

              <p className="font-semibold text-center flex-grow flex items-center justify-center">{item.name}</p>
              {/* <div className="flex justify-between items-center mt-auto"> */}
              <div className="flex flex-col  justify-between items-center gap-2 mt-auto md:max-w-200">

                <span className="text-lg font-bold">{item.price}/=</span>
                <motion.button 
                  onClick={(e) => { e.stopPropagation(); addToCart(item.id); }} 
                  className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center gap-2 size-auto"
                  whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleItems < filteredItems.length && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={handleShowMore}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryBannerSection;
export { allItems };
