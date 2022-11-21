import { useState } from "react";
import { Logo } from "../../Components";
import { MENU_ITEMS } from "../../Config";
import NavToggleButton from "./NavToggleButton";
import NavItem from "./NavItem";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const stateClasses = navOpen
    ? "2xl:w-1/5 md:w-2/5 w-4/5 bg-neutral-900"
    : "w-16 ";

  return (
    <div
      className={`flex flex-col h-full ${stateClasses} transition-all fixed py-8 z-50 top-0 left-0`}
    >
      <NavToggleButton
        isNavOpen={navOpen}
        onClick={() => setNavOpen(navOpen => !navOpen)}
      />
      <div
        className={`${
          navOpen ? "visible opacity-100" : "hidden opacity-0"
        } transition-all flex flex-col items-center py-10 h-full`}
      >
        {MENU_ITEMS.map(item => (
          <NavItem item={item} onItemClick={() => setNavOpen(false)} />
        ))}
        <div className="mt-auto">
          <Logo width="75px" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
