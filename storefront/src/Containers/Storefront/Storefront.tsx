import { Product, ProductCollection } from "@medusajs/medusa";
import { useProducts } from "medusa-react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CollectionList, ProductList } from "../../Components";

type IStorefrontContext = {
  products?: Product[];
  productsLoading: boolean;
  selectedCollectionId: ProductCollection["id"] | null;
  setSelectedCollectionId: Dispatch<
    SetStateAction<ProductCollection["id"] | null>
  >;
};

const StorefrontContext = createContext<IStorefrontContext>({
  products: [],
  productsLoading: true,
  selectedCollectionId: null,
  setSelectedCollectionId: () => {},
});

export const useStorefront = () => useContext(StorefrontContext);

const Storefront = () => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    ProductCollection["id"] | null
  >(null);

  const { products, isLoading: productsLoading } = useProducts({
    ...(selectedCollectionId ? { collection_id: [selectedCollectionId] } : {}),
  });

  return (
    <div className="flex flex-col justify-center p-16">
      <StorefrontContext.Provider
        value={{
          products,
          productsLoading,
          selectedCollectionId,
          setSelectedCollectionId,
        }}
      >
        <CollectionList />
        <ProductList />
      </StorefrontContext.Provider>
    </div>
  );
};

export default Storefront;
