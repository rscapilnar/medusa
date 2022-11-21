import { PropsWithChildren } from "react";

const ProductGrid = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {children}
  </div>
);

export default ProductGrid;
