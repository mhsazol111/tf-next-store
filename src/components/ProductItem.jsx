import Link from 'next/link';

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <Link href={`/products/${product.slug}`}>
      <a className="product_gird__item">
        <h4>{product.title}</h4>
      </a>
    </Link>
  );
};

export default ProductItem;
