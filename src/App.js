import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import kendoka from './kendoka.svg';
import './App.css';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import products from "./products.json"

function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={kendoka} className="App-logo" alt="kendoka" />
        <Grid data={products}>
          <GridColumn field="Nome"/>
          <GridColumn field="Senioridade"/>
          <GridColumn field="Especialidade"/>
        </Grid>
      </header>
    </div>
  );
}

export default App;