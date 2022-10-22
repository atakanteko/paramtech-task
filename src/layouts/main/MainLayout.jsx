import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import HeaderSection from "../../components/sections/HeaderSection";

const { Content } = Layout;

function MainLayout() {
    return (
        <Layout className="main-layout">
            <HeaderSection />
            <Content className="pt-content">
                <Outlet />
            </Content>
        </Layout>
    );
}

export default MainLayout;
