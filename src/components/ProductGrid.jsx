import dummyProducts from '../services/dummyAPI';
import ProductItem from './ProductItem';

const ProductGrid = () => (
  <div className="product_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {dummyProducts &&
      dummyProducts.map((product, item) => (
        <ProductItem key={product.id} product={product} item={item} />
      ))}
  </div>
);

export default ProductGrid;
