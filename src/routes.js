import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './pages/layout/index';
import Flag from './pages/Flag/index';

function Routes() {
  return (
    <BrowserRouter>
    <Switch>

      <Route path="/" exact component={Layout}/>
      <Route path="/flag/:code"  component={Flag} />
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;