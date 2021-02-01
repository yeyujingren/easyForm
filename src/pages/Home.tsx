import React from 'react';
import TopBar from './Top';
import LeftNav from './Left';
import FormCanvas from './FormCanvas';
import RightDetail from './Right';

import {Layout} from 'antd';

const {Sider, Header, Content} = Layout;
interface Props {
  [p: string]: string
}

const Home: React.FC<Props> = (prop) => {
  return (
    <div>
      <Layout>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>
            <TopBar />
          </Header>
          <Content>
            <FormCanvas />
          </Content>
        </Layout>
        <Sider>
          <RightDetail />
        </Sider>
      </Layout>
    </div>
  );
}

export default Home;
