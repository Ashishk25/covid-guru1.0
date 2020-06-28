import React from 'react';

import { Sidebar , Tracker , Nearme , News } from './components/exporter';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{
   

    render(){
  

      return (
          <React.Fragment>
            <Router>
            <Sidebar />
              <Switch>
                <Route exact path="/" component={Tracker} />
                <Route path="/nearme" component={Nearme} />
                <Route path="/news" component={News} />
              </Switch>
            </Router>
          </React.Fragment>
      );
    }
}
export default App;