import { BrowserRouter, Route} from 'react-router-dom';

import Layout from './pages/layout/index';
import Flag from './pages/Flag/index';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Layout}/>
      <Route path="/flag"  component={Flag}/>
    </BrowserRouter>
  );
}

export default Routes;