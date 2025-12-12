import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Flex, Layout, ConfigProvider, theme, Breadcrumb, message } from 'antd';
import './App.css';

const { Content } = Layout;

function AppContent() {
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation();

  let breadcrumbItems = [
    {
      title: <span style={{ fontSize: '24px' }}>Alerts</span>,
      href: '/',
    }
  ];

  return (
    <Flex gap="middle" wrap>
      {contextHolder}
      <Layout style={{ ...layoutStyle }}>
        <Content style={contentStyle}>
          <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <div className="App">
              <Breadcrumb
                separator={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>{'>'}</span>}
                items={breadcrumbItems}
              />
              <div style={{ background: '#141414', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              </div>
            </div>
          </ConfigProvider>
        </Content>
      </Layout>
    </Flex>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

export default App;

