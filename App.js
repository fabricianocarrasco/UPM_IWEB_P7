
import React, { Component } from 'react';
import ReduxProvider from './src/redux/ReduxProvider';


export default class App extends Component {
 render(){
  return(
    <ReduxProvider/>
    );
 }
}
