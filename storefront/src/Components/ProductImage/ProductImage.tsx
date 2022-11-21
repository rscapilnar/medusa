import { Image, Product } from "@medusajs/medusa";
import { useState } from "react";
import { useProductDetail } from "../../Containers/Product/Product";

const ProductImage = () => {
  const { product } = useProductDetail();
  const [selectedImage, setSelectedImage] = useState<Image>(product.images[0]);
  return (
    <div className={`flex w-full flex-col max-h-min items-center`}>
      <img
        src={selectedImage.url}
        className="object-cover object-center w-full h-full max-w-3xl aspect-square"
        alt={product.description ?? ""}
      />
      <div className="grid grid-cols-4 gap-5 mt-10">
        {product.images.map(productImage => (
          <div
            className="overflow-hidden rounded-sm cursor-pointer hover:opacity-70 image-tile"
            onClick={() => setSelectedImage(productImage)}
          >
            <img
              src={productImage.url}
              className="object-cover object-center w-full h-full transition-all hover:scale-125 aspect-square"
              alt={productImage.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
