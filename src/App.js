import React, { useContext, useState } from 'react';
import './App.css';
import { FetchContext } from './context/FetchProvider';

function App() {
  const { isLoading, dataHeader, dataPlanets } = useContext(FetchContext);

  const [searchName, setSearchName] = useState('');
  const [numberFilter, setNumberFilter] = useState(0);
  const [planetsNumberFilter, setPlanetsNumberFilter] = useState([]);

  const searchNameFilter = dataPlanets
    .filter((planet) => planet[0].toLowerCase().includes(searchName))
    .filter((number) => !planetsNumberFilter.includes(number[0]));

  const clickButton = () => {
    const select = isLoading && document.getElementsByTagName('select');
    const indexFilter = dataHeader.indexOf(select[0].value);
    const unknown = dataPlanets
      .filter((dataUnknown) => dataUnknown[indexFilter] === 'unknown')
      .map((nameUnknown) => nameUnknown[0]);
    let dataNumbers = [];

    if (select[1].value === 'maior que') {
      dataNumbers = dataPlanets
        .filter((planet) => parseInt(planet[indexFilter], 10) <= numberFilter);
    }
    if (select[1].value === 'menor que') {
      dataNumbers = dataPlanets
        .filter((planet) => parseInt(planet[indexFilter], 10) >= numberFilter);
    }
    if (select[1].value === 'igual a') {
      dataNumbers = dataPlanets
        .filter((planet) => (
          parseInt(planet[indexFilter], 10) !== parseInt(numberFilter, 10)));
    }
    const dataNumbersNames = dataNumbers.map((namePlanet) => namePlanet[0]);
    setPlanetsNumberFilter([...dataNumbersNames, ...unknown]);
  };

  return (
    <>
      {!isLoading && <span>Loading...</span>}
      {isLoading && (
        <>
          <input
            type="text"
            value={ searchName }
            onChange={ (e) => setSearchName(e.target.value) }
            data-testid="name-filter"
          />
          <select data-testid="column-filter">
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select data-testid="comparison-filter">
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input
            type="number"
            value={ numberFilter }
            onChange={ (e) => setNumberFilter(e.target.value) }
            data-testid="value-filter"
          />
          <button type="button" onClick={ clickButton } data-testid="button-filter">
            Filter
          </button>
          <table>
            <thead>
              <tr>
                { dataHeader.map((header, index) => (
                  <th key={ index }>{ header }</th>
                )) }
              </tr>
            </thead>
            <tbody>
              {searchNameFilter.map((planetName, index) => (
                <tr key={ `position${index}` }>
                  {planetName.map((planetData, i) => (
                    <td key={ `value${i}` }>{planetData}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default App;
