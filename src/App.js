import React, { useContext, useState } from 'react';
import './App.css';
import { FetchContext } from './context/FetchProvider';

function App() {
  const { isLoading, dataHeader, dataPlanets } = useContext(FetchContext);

  const [searchName, setSearchName] = useState('');

  const searchNameFilter = dataPlanets
    .filter((planet) => planet[0].toLowerCase().includes(searchName));

  return (
    <>
      <span>Ola</span>
      <input
        type="text"
        value={ searchName }
        onChange={ (e) => setSearchName(e.target.value) }
        data-testid="name-filter"
      />
      <table>
        <thead>
          <tr>
            { isLoading && dataHeader.map((header, index) => (
              <th key={ index }>{ header }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { isLoading && searchNameFilter.map((planetName, index) => (
            <tr key={ `position${index}` }>
              {planetName.map((planetData, i) => (
                <td key={ `value${i}` }>{planetData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
