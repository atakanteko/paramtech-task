import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

function LoginForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
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
        <label htmlFor="username">Adınız Soyadınız</label>
        <Input
          className="pt-input"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
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
        <label htmlFor="email">Email Adresiniz</label>
        <Input
          className="pt-input"
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="pt-button">
          Devam Et
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
