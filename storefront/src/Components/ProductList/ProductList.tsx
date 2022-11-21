import { useStorefront } from "../../Containers/Storefront/Storefront";

const ProductList = () => {
  const { products } = useStorefront();

  return (
    <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products?.map(product => (
          <a href="#" className="group">
            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={product.thumbnail ?? ""}
                alt={product.description ?? ""}
                className="object-cover object-center w-full h-full group-hover:opacity-75"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">£50</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
