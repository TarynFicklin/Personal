//dependencies
import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {updateUserData} from './ducks/auth0';
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css'

//components
import Landing   from './components/Common/Landing';
import Missing   from './components/Common/Missing';
import Dashboard from './components/Dashboard';
import NewTrip   from './components/NewTrip';
import Insighter from './components/Insighter';

class App extends Component {

  componentDidMount () {
    axios.get('/api/user-data').then(res => {this.props.updateUserData(res.data);})
  }

  render() {
    let {user, background} = this.props;
    console.log(this.props)
    return (
      <frosted-glass-container>
        <div className="app" style={{background: `url(${background}) center fixed`, backgroundSize: `cover`, minHeight: `100vh`, transition: `1s`}}>
          {
            user.user_name ? (
              <HashRouter>
                <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/new" component={NewTrip}/>
                  <Route path="/trip/:id" component={Insighter}/>
                  <Route path="/404" component={Missing} />
                </Switch>
              </HashRouter>
            ) : <Landing />
          }
        </div>
      </frosted-glass-container>
    );
  }
}

function mapStateToProps (state) {return {user: state.auth0.user, background: state.auth0.background}}
export default connect(mapStateToProps, {updateUserData})(App);
