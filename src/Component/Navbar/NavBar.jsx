import React from "react";
import "./NavBar.css";

import { MdDashboardCustomize } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { AiFillAudio } from "react-icons/ai";
import { LuEdit, LuLogOut } from "react-icons/lu";
import { TbMessageReport } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";

const NavBar = () => {
  const Location = useLocation();
  const navigate = useNavigate();

  const data = [
    {
      icon: <MdDashboardCustomize />,
      name: "Dashboard",
      path: "/",
    },
    {
      icon: <FaUser />,
      name: "Agents",
      path: "/agents",
    },
    {
      icon: <TiDocumentText />,
      name: "Contacts",
      path: "/contacts",
    },
    {
      icon: <LuEdit />,
      name: "Number",
      path: "/number",
    },
    {
      icon: <AiFillAudio />,
      name: "Audio",
      path: "/audio",
    },
    {
      icon: <TbMessageReport />,
      name: "Report",
      path: "/report",
      },
      {
        icon: <FiSettings />,
        name: "Settings",
        path: "/settings",
      },
      {
        icon: <LuLogOut />,
        name: "Log Out",
        path: "/log-out",
      },
    ];

  return (
    <div className="navbar-body">
      <div className="logo">
        <h3 className="fw-bold">BRAND</h3>
      </div>
      {data.map((items, idx) => {
        return (
          <ul
            onClick={() => navigate(`${items.path}`)}
            key={idx}
            className={`${
              Location.pathname === items.path ? "active" : ""
            } p-2 mt-3 `}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <li
              className="p-1 m-0 "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: ".6rem",
                width: "100%",
              }}
            >
              <i className="p-0 ps-5 m-0 fs-5">{items.icon}</i>
              <p className="p-0 m-0 ps-2 mt-1 ">{items.name}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default NavBar;
