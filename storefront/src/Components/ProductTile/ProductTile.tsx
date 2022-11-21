import { Product } from "@medusajs/medusa";
import { formatVariantPrice } from "medusa-react";
import { Link } from "react-router-dom";
import { useConfig } from "../../Containers/WithConfig/WithConfig";

const ProductTile = ({ product }: { product: Product }) => {
  const { activeRegion } = useConfig();
  const price = activeRegion
    ? formatVariantPrice({ variant: product.variants[0], region: activeRegion })
    : null;
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.thumbnail ?? ""}
          alt={product.description ?? ""}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </Link>
  );
};

export default ProductTile;
