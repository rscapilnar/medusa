import { useStorefront } from "../../Containers/Storefront/Storefront";
import ProductGrid from "../ProductGrid";
import ProductTile from "../ProductTile";

const ProductList = () => {
  const { products } = useStorefront();

  return (
    <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <ProductGrid>
        {products?.map(product => (
          <ProductTile product={product} />
        ))}
      </ProductGrid>
    </div>
  );
};

export default ProductList;
