import React, { useState } from "react";
import { Input, Button, Form, message, Checkbox, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const Login = (props) => {
  const navigate = useNavigate()

  const handleLogin = async (values) => {
    try {
      const user = props.userData.find(
        (u) => u.username === values.username && u.password === values.password 
      );
      if (user) {
        if(user.status){
          const returnRole = props.roleData.find((role) => {
            return (user.role == role.roleName)
          })
          const userData = {
            userId:user.userId,
            permissions:returnRole.permissions
          }
          sessionStorage.setItem("userData", JSON.stringify(userData))
          message.success("Login successful!");
          navigate('/dashboard')
        }else{
          message.error("User is In-Active");
        }
      } else {
        message.error("Invalid credentials");
      }

    } catch (error) {
      message.error(error);
    }
  };

  return (
    <div className="login-form flex justify-center items-center flex-col">
      <div className="bg-gradient p-3 rounded-lg shadow-lg min-h-96 flex justify-between flex-col">
        <div className="text-center mb-5">
          <h2 className=" font-bold text-5xl">RBAC</h2>
          <p className="mt-2 font-semibold text-slate-400 text-lg">Project Portal</p>
        </div>

        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ minWidth: 340 }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}

          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>

  );
};
const mapStateToProps = (state) => {
  return {
    roleData: state.roles,
    userData: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);