import { Link } from "react-router-dom";
import { MenuItem } from "../../../Types";

const NavItem = ({
  item,
  onItemClick,
}: {
  item: MenuItem;
  onItemClick: () => void;
}) => {
  return (
    <Link to={item.route} onClick={onItemClick}>
      <div className="m-2 font-serif text-2xl font-semibold text-center text-white border-b-4 w-fit border-b-transparent hover:border-b-violet-500">
        {item.display}
      </div>
    </Link>
  );
};

export default NavItem;
