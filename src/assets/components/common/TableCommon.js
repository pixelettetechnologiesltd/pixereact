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
const TableCommon = () => {
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
    <Sidebar/>
    <Container className="attendence">
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <Breadcrumb>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            <Breadcrumb.Item active>Holidays</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col lg={2}>
          <button
            className="add-btn"
            onClick={() => {
              handleAction("addHoliday");
              setShow(true);
            }}
          >
            Add Holiday
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
            <th>Title</th>
            <th>Holiday Date</th>
            <th>Day</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>New Year</td>
            <td>1 Jan 2019	</td>
            <td>Sunday</td>
           
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

export default TableCommon;