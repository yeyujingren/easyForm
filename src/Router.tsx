import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {customHistory} from '@/utils';
import Home from '@/pages/Home/Home';

interface RouterProps {
  path: string;
  component: React.FC<any>;
  exact: boolean;
  auth?: boolean;
}

const ROUTER_CONFIG: RouterProps[] = [
  {
    path: '/',
    component: Home,
    exact: true
  }
];

const RoutesConf = () => {
  const loadedRoutes = ROUTER_CONFIG.map(item => {
    return <Route path={item.path} key={item.path} exact={item.exact} component={item.component} />;
  });

  return (
    <Router history={customHistory}>
      <Switch>
        {loadedRoutes}
      </Switch>
    </Router>
  );
};

export default RoutesConf;
