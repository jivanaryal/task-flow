import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = AntLayout;

const Layout = () => {
  return (
    <AntLayout>
      <Header style={{ color: "white" }}>My App Header</Header>
      <Content style={{ padding: "20px" }}>
        <Outlet /> {/* This is where nested routes will render */}
      </Content>
      <Footer>My App Footer</Footer>
    </AntLayout>
  );
};

export default Layout;
