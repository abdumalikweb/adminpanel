import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ApartmentOutlined,
  AreaChartOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  CodepenCircleOutlined,
  
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const AdminLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider style={{overflow:"auto", height:"100vh",}} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" > <CodepenCircleOutlined /><p>Celan code</p></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <Link to = "/"><AreaChartOutlined  /></Link>,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <Link to = "/order"><SolutionOutlined /></Link>  ,
              label: 'Order',
            },
            {
              key: '3',
              icon: <Link to="/meneger"><ApartmentOutlined  /></Link> ,
              label: 'Manager',
            },
              {
              key: '4',
              icon:  <Link to = "/Addwork"><UsergroupAddOutlined /></Link>,
              label: 'AddWorker',
            },
                          {
              key: '5',
              icon:  <Link to = "work"><CalendarOutlined /></Link>,
              label: 'Work',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;