import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { Dropdown, Button } from 'office-ui-fabric-react';
import EmployeePortal from '../components/component_employeePortal'

import {connect} from 'react-redux';

class Main extends Component {
  render() {
    return (
      <EmployeePortal {...this.props}/>
    );
  }
}
function mapStateToProps(state){
    return {
        empData: state.empData
    }
}
export default connect(mapStateToProps)(Main);
