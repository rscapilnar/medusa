import { useProductDetail } from "../../Containers/Product/Product";

const AddToCartButton = () => {
  const { activeVariant, quantity } = useProductDetail();
  return (
    <button className="p-5 font-semibold text-white transition-all bg-gray-900 border-l-8 mt-14 border-l-violet-500 hover:bg-gray-800">
      Add <span className="font-bold">{quantity}</span>
      <span className="text-violet-300">{` ${activeVariant?.title}`}</span> to
      Cart
    </button>
  );
};

export default AddToCartButton;
