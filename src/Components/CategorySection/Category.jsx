import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
import banner_kitchen from '../Assets/banner_kitchen.PNG';
import banner_beddings from '../Assets/banner_beddings.PNG';
import banner_furniture from '../Assets/banner_furniture.PNG';
import banner_electronics from '../Assets/banner_electronics.PNG';

const allItems = [
  { id: 7, name: "Weaverbird Velvet duvet yellow", category: "Beddings", image:"https://i.postimg.cc/CxrGzf92/Weaverbird-Velvet-duvet.jpg", price: 3300.0, description: "Brand: weaverbird Size: 6 by 7/6 by 6 Offer Wholesale price @ 3200 ksh‼ Bale of 8 PCs @ 24800 ksh ‼ " },
  { id: 2, name: "Weaverbird Velvet duvet NavyB.", category: "Beddings", image: "https://i.postimg.cc/BtWyWVBx/Weaverbird-Velvet-duvet.jpg", price: 3300.0, description: " Brand:  weaverbird Size: 6 by 7/6 by 6 Offer Wholesale price @ 3200 ksh‼ Bale of 8 PCs @ 24800 ksh ‼ " },
  { id: 3, name: "Weaverbird Velvet duvet maroon", category: "Beddings", image: "https://i.postimg.cc/kgNrCqZD/Weaverbird-Velvet-duvet.jpg", price: 3300.0, description: "A professional-quality knife set designed for precision cutting and durability." },
  { id: 4, name: "Weaverbird Velvet duvet grey", category: "Beddings", image: "https://i.postimg.cc/fysX670V/Weaverbird-Velvet-duvet.jpg", price: 3300.0, description: "Brand: weaverbird Size: 6 by 7/6 by 6 Offer Wholesale price @ 3200 ksh‼ Bale of 8 PCs @ 24800 Ksh !!" },
  { id: 5, name: "Weaverbird Velvet duvet white", category: "Beddings", image: "https://i.postimg.cc/JhmLHGJb/Weaverbird-Velvet-duvet.jpg", price: 3300.0, description: "Brand: weaverbird Size: 6 by 7/6 by 6 Offer Wholesale price @ 3200 ksh‼ Bale of 8 PCs @ 24800 Ksh !" },
  { id: 11, name: "6 fts tv stand", category: "Furniture", image:"https://i.postimg.cc/W30BSjvM/6-fts-tv-stand.jpg", price: 18500.0, description: " Has a fireplace  Quality on point Wholesale price @ 18,500 ksh" },
  { id: 1, name: "Stone/Granite Frying Pans", category: "Cookware", image: "https://i.postimg.cc/dV9qB2JW/Stone-Granite-Frying-Pans.jpg", price: 1000.0, description: "A durable non-stick pan perfect for frying and cooking meals with less oil." },
  { id: 8, name: "Adjustable kids study table desk", category: "Furniture", image:"https://i.postimg.cc/76DGY3q0/155e3a24-2c94-410d-bd1f-46eaf1f2322c.jpg", price: 4500.0, description: "🔥☝️ Adjustable kids study table desk Wholesale price @ 4,500 ksh " },
  { id: 9, name: "4pc Cotton   Bedsheets", category: "Beddings", image:"https://i.postimg.cc/8C7DRqcH/4pc-Cotton-Bedsheets.jpg", price: 1000.0, description: "Set contains: ▪️2 bedsheets▪️ 2 pillow cases▪️ Size 6by7 ◼️Price: ksh. 1000 ksh." },
  { id: 10, name: "Adjustable kids study table desk", category: "Furniture", image:"https://i.postimg.cc/W3ww8p9L/6cfc2f33-2670-467c-bd8d-f9442a8c0b5c.jpg", price: 4500.0, description: "🔥☝️ Adjustable kids study table desk Wholesale price @ 4,500 ksh " },
  { id: 6, name: "Weaverbird Velvet duvet green", category: "Beddings", image: "https://i.postimg.cc/T2k38qbB/Weaverbird-Velvet-duvet-mustard.jpg", price: 3300.0, description: "Brand: weaverbird Size: 6 by 7/6 by 6 Offer Wholesale price @ 3200 ksh‼ Bale of 8 PCs @ 24800 ksh ‼ " },
  { id: 12, name: "Kitchen Towels", category: "Kitchenware", image:"https://i.postimg.cc/NMJrLhyw/Kitchen-towels.jpg", price: 50.0, description: "Kitchen towels available in Dozens @540 ksh per dozen@50 Ksh 1 pcs " },
  { id: 13, name: "Rashnik stainless steel 3 burner", category: "cookware", image:"https://i.postimg.cc/MHskhDr5/Rashnik-stainless-steel-3-burner-now-available.jpg", price: 2600.0, description: "Rashnik stainless steel 3 burner 🔥🔥  " },
  { id: 14, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 15, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 16, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 17, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 18, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 19, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 20, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 21, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 22, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 23, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
];

const categories = [
  "Cookware", "Beddings", "Kitchenware", "Electronics", "Furniture",
  "Clothing", "Shoes", "Accessories", "Beauty Products"
];

const bannerImages = [banner_furniture, banner_kitchen, banner_beddings, banner_electronics, "https://i.postimg.cc/28x3Fy10/furniture-banner.png"];

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