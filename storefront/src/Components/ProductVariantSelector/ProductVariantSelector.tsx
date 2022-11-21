import { ProductOption, ProductOptionValue } from "@medusajs/medusa";
import { useMemo, useState } from "react";
import { useProductDetail } from "../../Containers/Product/Product";

type IProductOption = Pick<ProductOption, "id" | "title" | "values"> & {
  availableValues: ProductOptionValue[];
};

const ProductVariantSelector = () => {
  const { product, setActiveVariant } = useProductDetail();
  const { variants } = product;

  const options: IProductOption[] = useMemo(
    () =>
      product.options.map(({ id, title, values }) => ({
        id,
        title,
        values,
        availableValues: values.reduce((values, value) => {
          if (!values.some(val => val.value === value.value))
            return [...values, value];
          return values;
        }, [] as ProductOptionValue[]),
      })),
    [product]
  );

  const [selectedOptions, setSelectedOptions] = useState(
    options.map(option => ({
      title: option.title,
      value: option.availableValues[0].value,
      id: option.id,
    }))
  );

  const updateVariant = (options = selectedOptions) => {
    // find a variant whose options satisfy all our selected options
    const variant = variants.find(variant => {
      return options.every(selectedOption =>
        variant.options.some(
          variantOption =>
            variantOption.option_id === selectedOption.id &&
            variantOption.value === selectedOption.value
        )
      );
    });
    setActiveVariant(variant);
  };

  const updateSelectedOption = (option: IProductOption, value: string) => {
    const updatedOptions = selectedOptions.map(selectedOption => {
      if (selectedOption.id === option.id) selectedOption.value = value;
      return selectedOption;
    });
    setSelectedOptions(updatedOptions);
    updateVariant(updatedOptions);
  };

  return (
    <>
      {options.map(option => (
        <div className="mt-10">
          <h3 className="mb-2 text-sm font-medium text-gray-900">
            {option.title}
          </h3>
          <select
            className="w-full p-4 border-r-8 rounded cursor-pointer border-r-transparent focus:outline-none focus:ring-2 focus:ring-violet-600"
            onChange={e => updateSelectedOption(option, e.target.value)}
          >
            {option.availableValues.map(value => (
              <option value={value.value}>{value.value}</option>
            ))}
          </select>
        </div>
      ))}
    </>
  );
};

export default ProductVariantSelector;
