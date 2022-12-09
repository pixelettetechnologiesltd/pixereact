import React, { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import "../assets/css/navbar.css";
import Sidebar from "../Layout/Navbar"
const NavBar = () => {
  const [showDrop, setShowDrop] = useState(true);
  const handleDrop = (e) => {
    e.preventDefault();
    setShowDrop(!showDrop);
  };
  const preventDefualtOnClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          <NavLink to="/" className="logo">
            <img src="" width="40" height="40" alt="" />
          </NavLink>
        </div>

        {/* 	<!-- /Logo --> */}
        <a id="toggle_btn" href="javascript:void(0);">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        {/* ----------- /Logo ---------*/}

        {/*	<!-- Header Title -->*/}
        <div class="page-title-box">
          <h3>Dreamguy's Technologies</h3>
        </div>
        {/*---------- /Header Title ------*/}
        <NavLink id="mobile_btn" className="mobile_btn" to="/">
          <FaBars />
        </NavLink>

        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Search */}
          <li class="nav-item">
            <div className="top-nav-search">
              <a href="javascript:void(0);" class="responsive-search">
                <FaSearch />
              </a>
              <form actionName="search.html">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search here"
                />
                <button className="btn" type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>
          </li>
          {/* 
					Search 
					*/}
          {/* Flag */}
          <li
            className={
              showDrop
                ? `nav-item dropdown  flag-nav`
                : `nav-item dropdown  flag-nav show`
            }
            onClick={handleDrop}
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="flagdrop"
              href="#"
              role="button"
              aria-expanded="false"
            >
              <img src="" alt="" height="20" /> <span>English</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="flagdrop"
            >
              <NavLink
                to="/;"
                class="dropdown-item"
                onClick={preventDefualtOnClick}
              >
                <img src="" alt="" height="16" onClick={preventDefualtOnClick} />{" "}
                English
              </NavLink>
              <NavLink to="/;" class="dropdown-item">
                <img src="" alt="" height="16" onClick={preventDefualtOnClick} />{" "}
                French
              </NavLink>
              <NavLink to="/;" class="dropdown-item">
                <img src="" alt="" height="16" onClick={preventDefualtOnClick} />{" "}
                Spanish
              </NavLink>
              <NavLink to="/;" class="dropdown-item">
                <img src="" alt="" height="16" onClick={preventDefualtOnClick} />{" "}
                German
              </NavLink>
            </div>
          </li>
          {/******* /Flag **************** */}
          {/* ---------Notifications-------- */}
          <li class="nav-item dropdown flag-nav">
            <a href="#" class=" nav-link" data-toggle="dropdown">
              <IoMdNotificationsOutline className="nav-icons" />{" "}
              <span class="badge badge-pill">3</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Notifications</span>
                <a href="javascript:void(0)" class="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">John Doe</span> added new
                            task{" "}
                            <span class="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Tarah Shropshire</span>{" "}
                            changed the task name{" "}
                            <span class="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Misty Tison</span> added{" "}
                            <span class="noti-title">Domenic Houston</span> and{" "}
                            <span class="noti-title">Claire Mapes</span> to
                            project{" "}
                            <span class="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Rolland Webber</span>{" "}
                            completed task{" "}
                            <span class="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="activities.html">
                      <div class="media">
                        <span class="avatar">
                          <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Bernardo Galaviz</span> added
                            new task{" "}
                            <span class="noti-title">Private chat module</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">2 days ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>
          {/* ----------------Notifications ---------- */}

          {/*  Message Notifications */}
          <li class="nav-item dropdown flag-nav">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <BsChat />
              <span class="badge badge-pill">8</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Messages</span>
                <a href="javascript:void(0)" class="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">John Doe</span>
                          <span class="message-time">6 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Tarah Shropshire </span>
                          <span class="message-time">5 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Mike Litorus</span>
                          <span class="message-time">3 Mar</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">
                            <img alt="" src="assets/img/profiles/avatar-08.jpg" />
                          </span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Catherine Manseau </span>
                          <span class="message-time">27 Feb</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="chat.html">View all Messages</a>
              </div>
            </div>
          </li>

          {/*-- /Message Notifications -- */}

          <li class="nav-item dropdown has-arrow main-drop">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <span class="user-img">
                <img src="assets/img/profiles/avatar-21.jpg" alt="" />
                <span class="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a class="dropdown-item" href="settings.html">
                Settings
              </a>
              <a class="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
        </ul>
        {/* ------ /Header Menu -----*/}

      </div>
      <Outlet />

    </>
  );
};

export default NavBar;
