import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

function AuthenticationLayout() {
  return (
    <Layout className="auth-layout">
      <Content className="content">
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AuthenticationLayout;
