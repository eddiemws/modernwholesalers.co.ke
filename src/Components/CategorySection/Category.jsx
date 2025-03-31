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
  { id: 25, name: "4pc Turkish hotpot", category: "Kitchenware", image:"https://i.postimg.cc/sX5vZGHQ/Turkish-hotpot.jpg", price: 4500.0, description: "🔥🔥💯💯Turkish hot pots Perfect excellent quality 👌👌 Capacity 1.0 litre 1.5 litres  2.5 litres 3.5 litres Brown Price drop⏬:‼️@4,300White Price drop⏬:‼️@4,500 Available at the shop " },   
  { id: 29, name: "4pcs white Florence hotpot", category: "Kitchenware", image:"https://i.postimg.cc/SRWT5dTS/4pcs-Florence-hotpot.jpg", price: 4500.0, description: "🔥🔥💯💯  Today's special offers ➡️ Florence hot pots ➡️Perfect excellent quality 👌 Capacity 1.0 litre 2.5 litres 3.0 litres 3.5litres @4500 ksh " },
  { id: 30, name: "4pcs white dotted Florence hotpot", category: "Kitchenware", image:"https://i.postimg.cc/mZCTBGKD/4pcs-Florence-white-dotted-hotpot.jpg", price: 4500.0, description: "🔥🔥💯💯  Today's special offers ➡️ Florence hot pots ➡️Perfect excellent quality 👌 Capacity 1.0 litre 2.5 litres 3.0 litres 3.5litres @4500 ksh " },
  { id: 31, name: "4pcs black Florence hotpot", category: "Kitchenware", image:"https://i.postimg.cc/rFGyCL9b/4pcs-Florence-black-hotpot.jpg", price: 4500.0, description: "🔥🔥💯💯  Today's special offers ➡️ Florence hot pots ➡️Perfect excellent quality 👌 Capacity 1.0 litre 2.5 litres 3.0 litres 3.5litres @4500 ksh " },
  { id: 28, name: "4pcs Pinnacle hotpot", category: "Kitchenware", image:"https://i.postimg.cc/4xZkJ7V2/4pcs-Pinnacle-hotpot.jpg", price: 3600.0, description: " 4Pcs Pinnacle hotpot @3600" },
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
  { id: 14, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 1000.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @1000 ksh " },
  { id: 15, name: "Cooler Box 25 Litres", category: "Accessories", image:"https://i.postimg.cc/ZRzbHmtk/pacific-cooler-box.jpg", price: 3600.0, description: "☝️🔥  Pacific Cooler box 4.5 ltrs @1,800 ksh☑️ 10 ltrs @2600 ksh ☑️ 25 ltrs @3600 ksh ☑️32 ltrs @4,700 ksh " },
  { id: 16, name: "Wood Chopping Board", category: "Kitchenware", image:"https://i.postimg.cc/RZCdSmsz/wood-chopping-board.jpg", price: 450.0, description: "Finally HEAVY WOODEN CHOPPING BOARD have arrived.  Size: (22 * 32 *14 MM) @500 ksh☑️   Size: (24 * 34 *14 MM) @ 600 ksh ☑️   ‼️Limited stock available ‼️ " },
  { id: 17, name: "Synix 8.0Kg Washing Machine", category: "Electronics", image:"https://i.postimg.cc/FRCH2b6L/Syinix-8-0kg-washing-machine-Model-V8-WT.jpg", price: 41500.0, description: "☝️🔥 Syinix 8.0kg wash &spin new model-V8WT colour  -metal Grey ☑️ Front load washing machine ☑️Wholesale price @ 40,000 ksh " },
  { id: 18, name: "6 ltr Eco Ugali Cooker", category: "Cookware", image:"https://i.postimg.cc/T3Th5Pnh/6-ltr-eco-ugali-cooker.jpg", price: 9000.0, description: "☝️🔥Ugali cooker eco 6ltrs Blender and ugali cooker Wholesale offer price @ 9,000 ksh " },
  { id: 19, name: "2 tier black&gold Dishrack", category: "Accessories", image:"https://i.postimg.cc/FHFssBQL/2-tier-black-gold-dishrack.jpg", price: 1650.0, description: "‼️‼️ 2 tier black/gold dishrack Available@. 1650 ksh Wholesale price " },
  { id: 20, name: "Hisense Microwave white", category: "Electronics", image:"https://i.postimg.cc/sxR3Fnc1/hisense-microwave-white.jpg", price: 8800.0, description: "Hisense microwave price list; Hisense white digital microwave @ 8,800 ksh *Hisense black digital Microwave @1000 ksh**   Hisense 25 litre digital@13,000 ksh Hisense 30 litres digital@17,600 ksh" },
  { id: 21, name: "Hanmac Manual Microwave", category: "Electronics", image:"https://i.postimg.cc/9QBbyzSk/Hanmac-manual-microwave.jpg", price: 7600.0, description: "🔥Hanmac 20L Manual black microwave (3 years warranty) @7,600 ksh " },
  { id: 22, name: "Bottom load hot&cold Dispenser", category: "Electronics", image:"https://i.postimg.cc/T1mq1PgC/bottom-load-hot-cold-dispenser.jpg", price: 9500.0, description: "☝️🔥 Black Nunix A1C Bottom Load Hot And Cold Water Dispenser Wholesale price @ 9500 " },
  { id: 23, name: "4pcs Casserole hotpots", category: "Kitchenware", image:"https://i.postimg.cc/2SjhRGcH/4pcs-Casserole-hotpots.jpg", price: 2100.0, description: "☝️🔥Casserole hotpots set of 4pcs @ Ksh 2100" },
  { id: 24, name: "4pcs Goldstar hotpot", category: "Kitchenware", image:"https://i.postimg.cc/gJh6qTj0/Goldstar-hotpot.jpg", price: 4500.0, description: "☝️☝️Hot pot set of 4Gold star Ksh....4200 " },
  { id: 26, name: "12pc Unique Cookware set", category: "Cookware", image:"https://i.postimg.cc/8PZsWS4H/12pc-Unique-Cookware-set.jpg", price: 7000.0, description: "https://i.postimg.cc/8PZsWS4H/12pc-Unique-Cookware-set.jpg colors available: (RoseGold, Light-Gold, Coffee) " },
  { id: 27, name: "15pcs Edenburg cookware", category: "Cookware", image:"https://i.postimg.cc/vTpq2jLS/15pcs-Edenburg-cookware.jpg", price: 15000.0, description: "15pcs Edenburg coockware @15,000.  code:EB-5612 " },
  { id: 32, name: "Redberry Infinite hotpot", category: "Kitchenware", image:"https://i.postimg.cc/Yq2Khpkq/Redberry-Infinite-hotpot.jpg", price: 4000.0, description: "🔥☝️ REDBERRY hot pots  Quality Hotpots INFINITE designer insulated hot pots Perfect excellent quality 💯👌 Capacity 1.8 litres 2.4 litres 3.0 litres 3.6 litre @ 4,000 ksh " },
  { id: 33, name: "Redberry Infinite dark hotpot", category: "Kitchenware", image:"https://i.postimg.cc/6qygwfDs/redberry-infinite-black-hotpot.jpg", price: 4000.0, description: "🔥☝️ REDBERRY hot pots  Quality Hotpots INFINITE designer insulated hot pots Perfect excellent quality 💯👌 Capacity 1.8 litres 2.4 litres 3.0 litres 3.6 litre @ 4,000 ksh " },
  { id: 34, name: "Pioneer designer brown hotpot", category: "Kitchenware", image:"https://i.postimg.cc/VvhybVjL/Pioneer-designer-brown-hotpot.jpg", price: 4000.0, description: "🔥☝️ Quality Hotpots PIONEER designer insulated hot pots Perfect excellent quality 💯👌 Capacity 1.5litres ☑️ 2.0litres ☑️ 2.5litres ☑️ 3.0 litre ☑️ Wholesale price @ 4,000 ksh " },
  { id: 35, name: "Pioneer designer hotpot", category: "Kitchenware", image:"https://i.postimg.cc/x83JfLHR/Pioneer-designer-hotpot.jpg", price: 4000.0, description: "🔥☝️ Quality Hotpots PIONEER designer insulated hot pots Perfect excellent quality 💯👌 Capacity 1.5litres ☑️ 2.0litres ☑️ 2.5litres ☑️ 3.0 litre ☑️ Wholesale price @ 4,000 ksh " },
  { id: 36, name: "4pc Redberry hotpot", category: "Kitchenware", image:"https://i.postimg.cc/MG5FQLw2/REDBERRY-Fortuner-hotpot.jpg", price: 2500.0, description: "‼️☝️🔥New in🤩‼️ REDBERRY Fortuner hotpot Premium Range of STAINLESS STEEL Insulated Hotpot : MAXIMUS 4pcs Set  SIZE - 1000/1500/2500/3500 Price drop⏬‼️  @kshs. 2500  Available at the shop " },
  { id: 37, name: "3pc MAXIMUS JAMBO Redberry hotpot", category: "Kitchenware", image:"https://i.postimg.cc/RFrLqQ65/3pcs-Set-MAXIMUS-JUMBO-Redberry-hotpot.jpg", price: 8500.0, description: "☝️🔥  *REDBERRY Premium Range of STAINLESS STEEL Insulated* Hotpot : MAXIMUS JUMBO 3pcs Set SIZE  - 10,000 / 15,000 /20,000 Ml Wholesale @ 8500 ksh " },
  { id: 38, name: "6pcs Redberry hotpot", category: "Kitchenware", image:"https://i.postimg.cc/T2JJYbTF/6pcs-Redberry-hotpots.jpg", price: 6000.0, description: "☝️🔥 Redberry hotpots set of 6 Capacity 0.5l,1.0l,3.5l,5.0l,7.5l,10.0l Wholesale offer price @ 6,000 ksh . Available at the shop " },
  { id: 39, name: "2 tier Stainless dishrack", category: "Accessories", image:"https://i.postimg.cc/sgb3QvVC/2-tier-stainless.jpg", price: 1000.0, description: "2 tier stainless steel dishrack  *PRICE: KES 1,000  •Heavy duty •Keep Kitchen Counter Dry •Easy to Assemble and Clean •Rust-Proof and Long Life. " },
  { id: 40, name: "2 tier carbon black", category: "Accessories", image:"https://i.postimg.cc/nVq2N5s4/2-tier-carbon-black.jpg", price: 2300.0, description: "🔥☝️ New in 📌 2 tier advanced carbon dish rack Wholesale price offer @2,300 ksh " },
  { id: 41, name: "3 tier black&gold dishrack", category: "Accessories", image:"https://i.postimg.cc/RhGH4cxB/3-tier-black-gold-dishrack.jpg", price: 2500.0, description: "🔥☝️ New in ‼️‼️‼️ Restocked .❇️ Kitchen 3 tier dishrack ❇️Gold Black *Offer Price‼️Ksh 2,500 Available at the shop" },
  { id: 42, name: "3 tier stainless dishrack", category: "Accessories", image:"https://i.postimg.cc/TYpwK8rm/3-tier-stainless.jpg", price: 2000.0, description: "🔥☝️ Dishracks 3 tier  Wholesale offer price @ 2,000 ksh " },
  { id: 43, name: "3 tier carbon black", category: "Accessories", image:"https://i.postimg.cc/25f89VgF/3-tier-carbon-black.jpg", price: 3000.0, description: "🔥☝️ •3 tier  dish rack •Heavy duty •Keep Kitchen Counter Dry •Easy to Assemble and Clean •Rust-Proof and Long Life. ✅  Offer wholesale PRICE: Ksh 3,000/= " },
  { id: 44, name: "2 tier black&gold Dishrack", category: "Accessories", image:"https://i.postimg.cc/FHFssBQL/2-tier-black-gold-dishrack.jpg", price: 1650.0, description: "‼️‼️ 2 tier black/gold dishrack Available@. 1650 ksh Wholesale price " },
  { id: 45, name: "12 pcs silicone spoons", category: "Kitchenware", image:"https://i.postimg.cc/SKybz8w5/12-pcs-silicone-sets.jpg", price: 1300.0, description: "🔥☝️ 12pcs silicone spoons Wholesale offer price @ 1,300 ksh  ❇️Colours  Available: Black, grey " },
  { id: 46, name: "19 pcs silicone spoons", category: "Kitchenware", image:"https://i.postimg.cc/d0pMNX7M/19-pcs-silicone.png", price: 2400.0, description: "🔥☝️ 19pcs silicone spoons Wholesale offer price @ 1,300 ksh  ❇️Colours  Available: Black, grey  " },
  { id: 47, name: "25 pcs marble silicone spoons", category: "Kitchenware", image:"https://i.postimg.cc/mDpPnTYL/25-pc-silicone.png", price: 2600.0, description: "☝️🔥 25PC Marble Silicone Spoons Wholesale price Ksh. 2,500/= Colours available: Black , Grey " },
  { id: 48, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 49, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 50, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 51, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 52, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 53, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 54, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 55, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 56, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 57, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 58, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 59, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 60, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 61, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 62, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 63, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 64, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 65, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 66, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 67, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 68, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 69, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 70, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 71, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 72, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 73, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 74, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 75, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 76, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 77, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 78, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 79, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },
  { id: 80, name: "RASHNIK DRY IRON", category: "Accessories", image:"https://i.postimg.cc/9Fn5bL9F/RASHNIK-DRY-IRON.jpg", price: 950.0, description: "Rashnik dry iron , 1200W 🔥🔥⏹️ Non-stick coating soleplate ⏹️ Adjustable thermostat control ⏹️ overheat safety protection ⏹️ Indicator light ⏹️Now available @950 ksh " },

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