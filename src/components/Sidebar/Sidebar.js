import { useState, memo } from "react";
import { NavLink } from "react-router-dom";
import { BsXLg, BsListNested } from "react-icons/bs";
import LogoFill from "../Logo/LogoFill.js";
import { navLinks } from "./SidebarData.js";
import "./sidebar.scss";

const Sidebar = memo(() => {
  const [activeItem, setActiveItem] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <BsListNested onClick={openSidebar} className="menu-icon switch__color" />
      <aside className={`aside ${isSidebarOpen ? "open-sidebar" : ""}`}>
        <div className="aside-wrapper">
          <BsXLg onClick={closeSidebar} className="close-btn switch__color" />

          <NavLink
            className={`logo-section ${activeItem === 0 ? "active" : ""}`}
            to="/"
            onClick={() => {
              handleItemClick(0);
            }}
          >
            <LogoFill height="110" />
            <span className="inscription switch__color">TechnoTiger</span>
          </NavLink>
          <div className="navigation ">
            <ul>
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`list ${activeItem === item.id ? "active" : ""}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <NavLink to={item.url}>
                    <span className="icon switch__color">{item.icon}</span>
                    <span className="tekst">{item.text}</span>
                  </NavLink>
                </li>
              ))}
              <div className="indicator"></div>
            </ul>
            {/* <div className="social-icon">
              {socialLinks.map((icons, index) => {
                const { icon, url } = icons;
                return (
                  <a href={url} key={index}>
                    {icon}
                  </a>
                );
              })}
            </div> */}
          </div>
        </div>
      </aside>
    </>
  );
});

export default Sidebar;
