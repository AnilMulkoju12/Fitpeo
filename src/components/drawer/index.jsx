import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { TbSquareKey } from "react-icons/tb";
import { LuBox } from "react-icons/lu";
import { LuContact } from "react-icons/lu";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
const SideDrawer = () => {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      path: "/",
      icon: <TbSquareKey />,
      chevron: <IoChevronForward />,
    },
    {
      id: 2,
      name: "Product",
      path: "/product",
      icon: <LuBox />,
      chevron: <IoChevronForward />,
    },
    {
      id: 3,
      name: "Customers",
      path: "/customers",
      icon: <LuContact />,
      chevron: <IoChevronForward />,
    },
    {
      id: 4,
      name: "Income",
      path: "/income",
      icon: <RiExchangeDollarLine />,
      chevron: <IoChevronForward />,
    },
    {
      id: 5,
      name: "Promote",
      path: "/promote",
      icon: <LuContact />,
      chevron: <IoChevronForward />,
    },
    {
      id: 6,
      name: "Help",
      path: "/help",
      icon: <MdOutlineLiveHelp />,
      chevron: <IoChevronForward />,
    },
  ];
  return (
    <div className="side-bar-container">
      <div className="side-bar-container__top">
        <div className="side-bar-container__logo">
          <img src={logo} />
          <p>Dashboard</p>
        </div>
        <div className="side-bar-container__links">
          {links.map((link, i) => {
            return (
              <Link to={link.path} className="side-bar-container__link">
                <div className="side-bar-container__icon-container">
                  <div className="name">
                    <span>{link.icon}</span>
                    <p>{link.name}</p>
                  </div>
                  <div className="chevron">
                    <span>{link.chevron}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="side-bar-container__bottom">
        <div className="main-content">
          <div className="sub-content-1">
            <FaRegUserCircle className="user-icon"/>
            <div className="sub-content-2">
              <h6>Evano</h6>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
        <div className="sub-content-chevron">
            <IoChevronDownOutline className="icon" />
          </div>
      </div>
    </div>
  );
};

export default SideDrawer;
