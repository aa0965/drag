import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Surveys from './surveys';


class App extends Component  {
  componentDidMount() {     //ajax request perfect location
    this.props.fetchUser();         //calling action creator
  }

render() {
  return (<div className = 'container'>
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
    <Route exact={true} path = '/' component={Landing} />
    <Route exact path = '/surveys' component={Surveys} />
    </Switch>
     </div>
  </BrowserRouter>
    </div>
  )
}
}

export default connect(null, actions)(App);
