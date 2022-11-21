import { useEffect, useState } from "react";

type QuantitySelectorProps = {
  min?: number;
  max: number;
  onQuantityChange: (quantity: number) => void;
};

const QuantitySelector = ({
  min = 1,
  max,
  onQuantityChange,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  return (
    <div className="w-full mt-10">
      <h3 className="mb-2 text-sm font-medium text-gray-900">Quantity</h3>
      <div className="flex items-center justify-between w-full p-4 bg-white rounded">
        <button
          disabled={quantity === min}
          className={`${
            quantity === min ? "opacity-20" : "opacity-100"
          } transition-all`}
          onClick={() => setQuantity(quantity => quantity - 1)}
        >
          <i className="fas fa-minus" />
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          disabled={quantity === max}
          className={`${
            quantity === max ? "opacity-20" : "opacity-100"
          } transition-all`}
          onClick={() => setQuantity(quantity => quantity + 1)}
        >
          <i className="fas fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
