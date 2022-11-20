type NavToggleButtonProps = {
  onClick: () => void;
  isNavOpen: boolean;
};

const NavToggleButton = ({ onClick, isNavOpen }: NavToggleButtonProps) => {
  return (
    <button onClick={onClick} className="transition-all hover:opacity-60">
      <i
        className={`far fa-${
          isNavOpen ? "arrow-left text-white" : "bars text-slate"
        } text-2xl`}
      />
    </button>
  );
};

export default NavToggleButton;
