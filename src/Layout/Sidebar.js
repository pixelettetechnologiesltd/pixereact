import React from "react";
import "../assets/css/sidebar.css";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", to: "/" },
    {
      name: "Employess",
      to: "/employees",
      submenu: [
        { name: "All Employees", to: "/allemployees" },
        { name: "Holidays", to: "/holidays" },
        { name: "Leaves (Admin)", to: "/leave" },
        { name: "Attendance", to: "/attendence" },
        { name: "Departments", to: "/departments" },
        { name: "Designations", to: "/designations" },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              submenu={menuItem.submenu}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
