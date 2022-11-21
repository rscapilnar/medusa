import { useProductDetail } from "../../Containers/Product/Product";

const ProductInfo = () => {
  const { product, unitPriceDisplay } = useProductDetail();

  return (
    <>
      <h1 className="font-serif text-3xl font-bold">{product.title}</h1>
      <h2 className="mt-4 text-2xl">{unitPriceDisplay}</h2>
      <p className="text-gray-700 mt-14">{product.description}</p>
    </>
  );
};

export default ProductInfo;
