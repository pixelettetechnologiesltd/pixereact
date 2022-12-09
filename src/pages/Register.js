import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import {useDispatch} from "react-redux";

import "antd/dist/antd.min.css";
import { images } from "../API/images";
import { registeruser } from "../register/action";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const Register = () => {
  const [form] = Form.useForm();
  const [Formdata, setForm] = useState({
    fname: "",
    lname: "",
    number: "",
    password: "",
    cpassword: "",
  });
  const dispatch=useDispatch();
  const register = (e) => {
    e.preventDefault();
    dispatch(registeruser({
      type:"REGISTER_USER",
      payload:{
        Formdata
      }
    }))
  };
  const handleChange = (e) => {
    setForm({ ...Formdata, [e.target.name]: e.target.value });
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="main-outer-div">
      <div className="container">
        <div className="logo">
          <img src={images.logo} />
        </div>
        <div className="login-form">
          <div>
            <p className="heading">Login</p>
            <p className="title">Access to our dashboard</p>
          </div>
          <Form form={form} layout="vertical" name="nest-messages" method="POST">
            <Form.Item
              className="input-space"
              label="First Name"
              rules={[
                {
                  type: "text",
                },
                {
                  required: true,
                },
              ]}
            >
              <Input
                className="input-field"
                autoComplete="false"
                value={Formdata.fname}
                onChange={handleChange}
                name="fname"
              />
            </Form.Item>
            <Form.Item
              className="input-space"
              label="Last Name"
              rules={[
                {
                  type: "text",
                },
                {
                  required: true,
                },
              ]}
            >
              <Input
                className="input-field"
                autoComplete="false"
                value={Formdata.lname}
                onChange={handleChange}
                name="lname"
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
                name="number"
                value={Formdata.number}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              
              rules={[
                {
                  required: true,
                  message:
                    "Password is required, must be uppercase,lowercase, numbers, special charactors",
                },
              ]}
            >
              <Input.Password
                className="input-field"
                autoComplete="false"
                name="password"
                value={Formdata.password}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Repeat Password"
             
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                className="input-field"
                name="cpassword"
                value={Formdata.cpswrd}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="submit"
                htmlType="submit"
                className="btn"
                onClick={register}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>

          <div className="">
            <p className="register m-0 mr-auto">
              Already have account ? <a href="#">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export  default Register;
