import React from 'react';
import './App.css';
import Wrapper from './components/wrapper/wrapper';
import Header from './components/header/header';
import EmployeeData from './components/employeeData';

function App() {
  return (
    
    <div className="App">
      <Wrapper />
      <Header />
      <EmployeeData />
    </div>
  );
}

export default App;
