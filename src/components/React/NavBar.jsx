import { useState } from "react";

function NavBar({ options }) {
  const [openMenu, setOpenMenu] = useState(true);
  let activeMobileClass =
    "flex flex-col absolute top-20 right-3 gap-5 bg-secondary py-4 px-10 rounded-xl";
  let hiddenMobileClass = "hidden";
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <ul
        className={`lg:flex lg:flex-row lg:static lg:gap-2 lg:bg-transparent ${
          openMenu ? activeMobileClass : hiddenMobileClass
        }`}
      >
        {options.map((item, index) => (
          <li
            className="flex justify-center items-center"
            key={`menu-${index}`}
          >
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
        <li className="flex justify-center items-center">
          <a
            href="https://api.whatsapp.com/message/LCQYEQNKYQYMA1?autoload=1&app_absent=0"
            target="_blanck"
          >
            <i className="ico-whatsapp text-2xl"></i>
          </a>
        </li>
      </ul>
      <button
        className="flex justify-center aspect-square w-8 p-1 items-center lg:hidden"
        onClick={handleMenu}
      >
        {openMenu && <i className="ico-close text-3xl"></i>}
        {!openMenu && <i className="ico-menu text-3xl"></i>}
      </button>
    </div>
  );
}

export default NavBar;
