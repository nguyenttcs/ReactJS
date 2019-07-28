import React from 'react';
import './App.css';
import Header from './components/Header'
import SelectSubTenant from './components/SelectSubTenant'
import Brand from './components/Brand'

function App() {

  return (
    <div className="container">
      {/* HEADER: START */}
      <Header />
      {/* HEADER: END */}
      <h3>CONTENTS</h3>

      {/* SUBTENANT: START */}
      <SelectSubTenant />
      {/* SUBTENANT: END */}

      {/* BRAND: START */}
      <Brand />
      {/* BRAND: END */}
    </div>

  );
}

export default App;
