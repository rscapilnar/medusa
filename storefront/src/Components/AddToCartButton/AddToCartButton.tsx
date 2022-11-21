import { useProductDetail } from "../../Containers/Product/Product";
import Button from "../Button";

const AddToCartButton = () => {
  const { activeVariant, quantity } = useProductDetail();
  return (
    <Button>
      Add <span className="font-bold">{quantity}</span>
      <span className="text-violet-300">{` ${activeVariant?.title}`}</span> to
      Cart
    </Button>
  );
};

export default AddToCartButton;
