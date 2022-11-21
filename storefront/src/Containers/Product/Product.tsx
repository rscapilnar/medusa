import { Product as IProduct, ProductVariant } from "@medusajs/medusa";
import { formatVariantPrice, getVariantPrice, useProduct } from "medusa-react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import {
  AddToCartButton,
  ProductImage,
  ProductInfo,
  ProductVariantSelector,
  QuantitySelector,
} from "../../Components";
import { useConfig } from "../WithConfig/WithConfig";

type IProductDetailContext = {
  product: IProduct;
  loading: boolean;
  unitPriceDisplay: string | null;
  unitPriceValue: number | null;
  activeVariant: ProductVariant | undefined;
  setActiveVariant: Dispatch<SetStateAction<ProductVariant | undefined>>;
  quantity: number;
};

const ProductDetailContext = createContext<IProductDetailContext>(
  {} as IProductDetailContext
);
export const useProductDetail = () => useContext(ProductDetailContext);

const Product = () => {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId || "");
  const { activeRegion } = useConfig();
  const [activeVariant, setActiveVariant] = useState<
    ProductVariant | undefined
  >(product?.variants[0] || undefined);

  const getUnitPriceValue = useCallback(
    () =>
      activeRegion && activeVariant
        ? getVariantPrice(activeVariant, activeRegion)
        : null,
    [activeRegion, activeVariant]
  );

  const getUnitPriceDisplay = useCallback(
    () =>
      activeRegion && activeVariant
        ? formatVariantPrice({ variant: activeVariant, region: activeRegion })
        : null,
    [activeRegion, activeVariant]
  );

  const [unitPriceValue, setUnitPriceValue] = useState<number | null>(() =>
    getUnitPriceValue()
  );
  const [unitPriceDisplay, setUnitPriceDisplay] = useState<string | null>(() =>
    getUnitPriceDisplay()
  );

  useEffect(() => {
    setUnitPriceDisplay(getUnitPriceDisplay());
    setUnitPriceValue(getUnitPriceValue());
  }, [activeRegion, activeVariant, getUnitPriceDisplay, getUnitPriceValue]);

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (product && !activeVariant) setActiveVariant(product.variants[0]);
  }, [product, activeVariant]);

  const onQuantityChange = useCallback((quantity: number) => {
    setQuantity(quantity);
  }, []);

  if (isLoading) return <div>loading overlay</div>;
  if (!product) return <div>Error overlay here</div>;

  return (
    <div className="grid grid-cols-1 gap-16 p-8 lg:grid-cols-2 lg:p-16">
      <ProductDetailContext.Provider
        value={{
          product,
          loading: isLoading,
          unitPriceValue,
          unitPriceDisplay,
          setActiveVariant,
          activeVariant,
          quantity,
        }}
      >
        <ProductImage />
        <div className="flex flex-col w-full">
          <ProductInfo />
          <ProductVariantSelector />
          <QuantitySelector
            max={activeVariant?.inventory_quantity ?? 5}
            onQuantityChange={onQuantityChange}
          />
          <AddToCartButton />
        </div>
      </ProductDetailContext.Provider>
    </div>
  );
};

export default Product;
