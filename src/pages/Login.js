import { Button, Form, Input, InputNumber } from "antd";
import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/log-in.css";
import Protectedroute from "../Components/utils.js/ProtectedRoute";
import "antd/dist/antd.css";
import { images } from "../API/images";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Lognin = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();
  const auth =(e)=>{
   e.preventDefault();
   if(email==='ali@gmail.com' && password==='num12345'){
    localStorage.setItem('token',true);
      navigate('/home');
   }
   else{
    localStorage.setItem('token',false);
   }
  }
  const [form] = Form.useForm();
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
          <Form
            form={form}
            layout="vertical"
            name="nest-messages"
            validateMessages={validateMessages}
          >
            <Form.Item
              onChange={(e)=>{setEmail(e.target.value)}}
              className="input-space"
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input className="input-field" />
            </Form.Item>
            <Form.Item
              onChange={(e)=>{setPassword(e.target.value)}}
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            
            >
              <Input.Password className="input-field" />
            </Form.Item>
            <Form.Item>
              <Button type="submit" htmlType="submit" className="btn" onClick={auth}>
                Submit
              </Button>
            </Form.Item>
          </Form>

          <div className="">
            <p className="register m-0 mr-auto">
              Don't have an account yet? <a href="#"> Register</a>
            </p>
            <p className=" m-0">
              <a href="#"> Forgot Password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lognin;
