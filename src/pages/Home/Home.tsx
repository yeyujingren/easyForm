import React from 'react';
import TopBar from './Components/Top';
import LeftNav from './Components/Left';
import FormCanvas from './Components/FormCanvas';
import RightDetail from './Components/Right';

import './Home.less';

import {Layout} from 'antd';

const {Sider, Header, Content} = Layout;
interface Props {
  [p: string]: string
}

const Home: React.FC<Props> = (prop) => {
  return (
    <div className="wapper">
      <Layout>
        <Header
          className="headerWapper"
        >
          <TopBar />
        </Header>
        <Layout>
          <Sider
            collapsible
            theme="light"
            className="navWapper"
          >
            <LeftNav/>
          </Sider>
          <Content
            className="contentWapper"
          >
            <FormCanvas />
          </Content>
          <Sider
            theme="light"
            collapsible
            reverseArrow
            className="detailWapper"
          >
            <RightDetail />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
