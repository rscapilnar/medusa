type PlaceholderProps = {
  width?: string;
  height?: string;
};

const Placeholder = (
  { width, height }: PlaceholderProps = { width: "w-32", height: "h-2.5" }
) => {
  return (
    <div
      className={`${width} ${height} bg-gray-200 rounded-lg m-2 animate-pulse inline-block`}
    />
  );
};

export default Placeholder;
