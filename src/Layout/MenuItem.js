import React from "react";
import {
  FaClock,
  FaUser,
  FaUsers,
  FaRocket,
  FaUserSecret,
  FaTicketAlt,
  FaAngleRight,
} from "react-icons/fa";
import "../assets/css/sidebar.css";
const MenuItem = (props) => {
  const { name, submenu } = props;
  return (
    <>
      <li class="menu-title">
        <span>{name}</span>
      </li>
      <li class="submenu">
        <a class="noti-dot">
          <i class="la la-user">
            <FaUser />
          </i>{" "}
          <span> {name}</span>{" "}
          <span class="menu-arrow">
            <FaAngleRight />
          </span>
        </a>
        <ul>
          {submenu?.map((menu, index) => (
            <li key={index}>
              <a>{menu.name}</a>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default MenuItem;
