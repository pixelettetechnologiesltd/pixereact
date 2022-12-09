import { Breadcrumb } from "antd";
import React from "react";
import "../assets/css/home.css";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import Apexchart from "../Charts/Apexchart";
import Chartapex from "../Charts/Chartapex";
import Sidebar from "../Layout/Sidebar";
import CommonCard from "../assets/components/common/CommonCard"
import {
  FaCubes,
  FaDollarSign,
  FaTasks,
  FaUserAlt,
  FaRegDotCircle,
} from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
const Home = () => {
  return (
    <div>
      <Sidebar/>
      <Container style={{marginTop:"80px"}}>
        <Row>
          <Col lg={2}></Col>
          <Col md={10}>
            <p className="welcome-head">Welcome Admin!</p>
            <Breadcrumb className="bradcrum-home">Dashboard</Breadcrumb>
          </Col>
        </Row>
        </Container>

        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={10} className="flex-the-shit">
          <Col md={3}>
            <CommonCard className="main">
              <div className="icon-bg">
                <FaCubes />
              </div>
              <div className="right-side-text">
                <p className="number-card">112</p>
                <p className="head-card">Projects</p>
              </div>
              </CommonCard>
          </Col>
          <Col md={3}>
          <CommonCard className="main">
              <div className="icon-bg">
                <FaDollarSign />
              </div>
              <div className="right-side-text">
                <p className="number-card">44</p>
                <p className="head-card">Clients</p>
              </div>
            </CommonCard>
          </Col>
          <Col md={3}>
          <CommonCard className="main">
              <div className="icon-bg">
                <FaTasks />
              </div>
              <div className="right-side-text">
                <p className="number-card">37</p>
                <p className="head-card">Tasks</p>
              </div>
            </CommonCard>
          </Col>
          <Col md={3}>
          <CommonCard className="main">
              <div className="icon-bg">
                <FaUserAlt />
              </div>
              <div className="right-side-text">
                <p className="number-card">218</p>
                <p className="head-card">Emloyees</p>
              </div>
            </CommonCard>
          </Col>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={10} className="make-flex-merg">
            <div className="merged-boxes">
              <div className="make-fir-mer-row">
                <p className="card-data-mer">New Employees</p>
                <p className="card-mer-percent">+10%</p>
              </div>
              <p className="card-mer-numb">10</p>
              <ProgressBar variant="info" now={60} />
              <p className="card-mer-over">Overall Employees 218</p>
            </div>

            <div className="merged-boxes">
              <div className="make-fir-mer-row">
                <p className="card-data-mer">Earnings</p>
                <p className="card-mer-percent">+12.6%</p>
              </div>
              <p className="card-mer-numb">$1,42,300</p>
              <ProgressBar variant="info" now={60} />
              <p className="card-mer-over">
                Previous Month{" "}
                <span style={{ color: "#8E8E8E" }}>$1,15,852</span>
              </p>
            </div>

            <div className="merged-boxes">
              <div className="make-fir-mer-row">
                <p className="card-data-mer">Expences</p>
                <p className="card-mer-percent">2.8%</p>
              </div>
              <p className="card-mer-numb">10</p>
              <ProgressBar variant="info" now={60} />
              <p className="card-mer-over">
                Previous Month <span style={{ color: "#8E8E8E" }}>$7,500</span>
              </p>
            </div>

            <div className="merged-boxes">
              <div className="make-fir-mer-row">
                <p className="card-data-mer">Profit</p>
                <p className="card-mer-percent">+75%</p>
              </div>
              <p className="card-mer-numb">10</p>
              <ProgressBar variant="info" now={60} />
              <p className="card-mer-over">
                Previous Month{" "}
                <span style={{ color: "#8E8E8E" }}>$1,42,000</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="marg-top-30">
        <Row>
        <Col md={2}></Col>
          <Col md={5}>
            <div className="stat-column">
              <p className="stat-card-title">Statistics</p>
              <div className="prog-block">
                <div className="make-text-row">
                  <div className="stat-block-head">Today Leave</div>
                  <div className="stat-block-number">4/65</div>
                </div>
                <div>
                  <ProgressBar now={60} />
                </div>
              </div>
              <div className="prog-block">
                <div className="make-text-row">
                  <div className="stat-block-head">Pending Invoice</div>
                  <div className="stat-block-number">15/92</div>
                </div>
                <div>
                  <ProgressBar variant="danger" now={30} />
                </div>
              </div>
              <div className="prog-block">
                <div className="make-text-row">
                  <div className="stat-block-head">Completed Projects</div>
                  <div className="stat-block-number">85/112</div>
                </div>
                <div>
                  <ProgressBar variant="success" now={80} />
                </div>
              </div>
              <div className="prog-block">
                <div className="make-text-row">
                  <div className="stat-block-head">Open Tickets</div>
                  <div className="stat-block-number">190/212</div>
                </div>
                <div>
                  <ProgressBar variant="warning" now={50} />
                </div>
              </div>
              <div className="prog-block">
                <div className="make-text-row">
                  <div className="stat-block-head">Closed Tickets</div>
                  <div className="stat-block-number">22/212</div>
                </div>
                <div>
                  <ProgressBar now={30} />
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={5}>
            <div className="stat-column">
              <p className="stat-card-title">Task Statistics</p>
              <div className="make-text-row">
                <div className="two-of-one mt-2">
                  <p className="small-box-title">Total Tasks</p>
                  <p className="small-box-number">385</p>
                </div>
                <div className="two-of-one mt-2">
                  <p className="small-box-title">Overdue Tasks</p>
                  <p className="small-box-number">19</p>
                </div>
              </div>
              <div>
                <ProgressBar className="progbar-height mt-4">
                  <ProgressBar striped variant="success" now={30} key={1} />
                  <ProgressBar variant="warning" now={22} key={2} />
                  <ProgressBar striped variant="danger" now={24} key={3} />
                  <ProgressBar variant="info" now={21} key={4} />
                  <ProgressBar striped variant="danger" now={10} key={5} />
                </ProgressBar>
              </div>
              <div className="make-text-row mt-4 mb-2">
                <div className="make-text-row">
                  <div className="make-text-row-just">
                    <FaRegDotCircle className="dot-color-purp" />
                  </div>
                  <div className="dot-text">Completed Tasks</div>
                </div>
                <div className="dot-text">166</div>
              </div>
              <div className="make-text-row mb-2">
                <div className="make-text-row">
                  <div className="make-text-row-just">
                    <FaRegDotCircle className="dot-color-orng" />
                  </div>
                  <div className="dot-text">Inprogress Tasks</div>
                </div>
                <div className="dot-text">115</div>
              </div>
              <div className="make-text-row mb-2">
                <div className="make-text-row">
                  <div className="make-text-row-just">
                    <FaRegDotCircle className="dot-color-green" />
                  </div>
                  <div className="dot-text">On Hold Tasks</div>
                </div>
                <div className="dot-text">31</div>
              </div>
              <div className="make-text-row mb-2">
                <div className="make-text-row">
                  <div className="make-text-row-just">
                    <FaRegDotCircle className="dot-color-red" />
                  </div>
                  <div className="dot-text">Pending Tasks</div>
                </div>
                <div className="dot-text">47</div>
              </div>
              <div className="make-text-row mb-4">
                <div className="make-text-row">
                  <div className="make-text-row-just">
                    <FaRegDotCircle className="dot-color-blue" />
                  </div>
                  <div className="dot-text">Review Tasks</div>
                </div>
                <div className="dot-text">5</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={5}>
            <Card style={{ marginTop: "50px" }}>
              <CardBody>
                <CardTitle>Total Revenue</CardTitle>
                <Apexchart />
              </CardBody>
            </Card>
          </Col>
          <Col lg={5}>
            <Card style={{ marginTop: "50px" }}>
            <CardBody>
            <CardTitle>Total Sales</CardTitle>
              <Chartapex />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
