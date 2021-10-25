import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import CityPage from './components/CityPage.jsx';

import { connect } from "react-redux"

function App(props) {
  return (
    <div className="App">
      <Header />
      { props.cityCheck ? <CityPage nameCity={props.city} /> : <Main /> }
    </div>
  );
}

function mapStateToProps(state){
  return {
    city: state.getCity.city,
    cityCheck: state.getCity.cityCheck
  }
}

export default connect(mapStateToProps)(App);
