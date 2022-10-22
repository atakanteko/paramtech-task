import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

function MainLayout() {
    return (
        <Layout className="">
            <Content className="">
                <Outlet />
            </Content>
        </Layout>
    );
}

export default MainLayout;
