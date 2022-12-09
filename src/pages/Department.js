import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Layout/Sidebar";
import {
  Container,
  Row,
  Col,
  Table,
  Breadcrumb,
  BreadcrumbItem,
  Form,
} from "react-bootstrap";
import "../assets/css/attendence.css";

import Popup from "../assets/components/common/Popup";
const Department = () => {
  const [tooltip, setTooltip] = useState(false);
  const [userAction, setUserAction] = useState("");
  const [show, setShow] = useState(false);
  const handleAction = (value) => {
    setTooltip(false);
    if (value == "edit") {
      setUserAction(value);
    } else {
      setUserAction(value);
    }
  };
  return (
    <>
      <Sidebar />
      <Container className="attendence">
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Breadcrumb>
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
              <Breadcrumb.Item active>Department</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col lg={2}>
            <button
              className="add-btn"
              onClick={() => {
                handleAction("addDepartment");
                setShow(true);
              }}
            >
              Add Department
            </button>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={10}>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Department Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jacob</td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => setTooltip(!tooltip)}
                      icon={faEllipsisVertical}
                      className="vertical-icon"
                    ></FontAwesomeIcon>
                    <div
                      className={`dropdown-menu dropdown-menu-right ${tooltip}`}
                      x-placement="bottom-end"
                    >
                      <button
                        class="dropdown-item"
                        onClick={() => {
                          handleAction("edit");
                          setShow(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        class="dropdown-item"
                        onClick={() => {
                          handleAction("delete");
                          setShow(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <Popup
                      action={userAction}
                      show={show}
                      onHide={() => setShow(false)}
                    ></Popup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Department;
