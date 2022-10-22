import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin } from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../features/user/userSlice";

function LoginForm() {
  const { isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const user ={
      "fullName": values.username,
      "email": values.email
    }
    dispatch(loginUser(user))
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <label >Adınız Soyadınız</label>
      <Form.Item
        className="login-form-item"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          className="pt-input"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <label >Email Adresiniz</label>
      <Form.Item
        className="login-form-item"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >

        <Input
          className="pt-input"
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={`pt-button ${isLoading && 'disable-btn'}`}>
          {
            isLoading ? <Spin /> : 'Devam Et'
          }
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
