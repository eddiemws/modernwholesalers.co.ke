import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import '../../src/Components/CategorySection/Category.jsx'


// Import the same dataset used in CategoryBannerSection.jsx
import { allItems } from '../Components/Assets/all_items.jsx'; // Adjust path as necessary

const Product = () => {
  const { productId } = useParams();

  // Ensure productId is a number and find the corresponding product
  const product = allItems.find((item) => item.id === Number(productId));

  return product ? (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  ) : (
    <p>Product not found</p>
  );
};

export default Product;
