import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="p-5 font-semibold text-white transition-all bg-gray-900 border-l-8 mt-14 border-l-violet-500 hover:bg-gray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
