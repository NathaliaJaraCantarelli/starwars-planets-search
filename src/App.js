import React, { useContext, useState } from 'react';
import './App.css';
import { FetchContext } from './context/FetchProvider';

function App() {
  const { isLoading, dataHeader, dataPlanets } = useContext(FetchContext);

  const [searchName, setSearchName] = useState('');
  const [numberFilter, setNumberFilter] = useState(0);
  const [populationFilter, setPopulationFilter] = useState([]);
  const [orbitalFilter, setOrbitalFilter] = useState([]);
  const [diameterFilter, setDiameterFilter] = useState([]);
  const [rotationFilter, setRotationFilter] = useState([]);
  const [surfaceFilter, setSurfaceFilter] = useState([]);

  const searchNameFilter = dataPlanets
    .filter((planet) => planet[0].toLowerCase().includes(searchName))
    .filter((number) => !populationFilter.includes(number[0]))
    .filter((number) => !orbitalFilter.includes(number[0]))
    .filter((number) => !diameterFilter.includes(number[0]))
    .filter((number) => !rotationFilter.includes(number[0]))
    .filter((number) => !surfaceFilter.includes(number[0]));

  const dataNumberFunction = (select, indexFilter) => {
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
    return dataNumbers;
  };

  const clickButton = () => {
    const select = isLoading && document.getElementsByTagName('select');
    const indexFilter = dataHeader.indexOf(select[0].value);
    const unknown = dataPlanets
      .filter((dataUnknown) => dataUnknown[indexFilter] === 'unknown')
      .map((nameUnknown) => nameUnknown[0]);
    const dataNumbersArray = dataNumberFunction(select, indexFilter);
    const numbers = dataNumbersArray.map((namePlanet) => namePlanet[0]);
    const typeFilter = select[0].value;
    if (typeFilter === 'population') { setPopulationFilter([...numbers, ...unknown]); }
    if (typeFilter === 'orbital_period') { setOrbitalFilter([...numbers, ...unknown]); }
    if (typeFilter === 'diameter') { setDiameterFilter([...numbers, ...unknown]); }
    if (typeFilter === 'rotation_period') { setRotationFilter([...numbers, ...unknown]); }
    if (typeFilter === 'surface_water') { setSurfaceFilter([...numbers, ...unknown]); }
  };

  const remove = () => {
    setPopulationFilter([]);
    setOrbitalFilter([]);
    setDiameterFilter([]);
    setRotationFilter([]);
    setSurfaceFilter([]);
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
            { !populationFilter.length && <option>population</option> }
            { !orbitalFilter.length && <option>orbital_period</option> }
            { !diameterFilter.length && <option>diameter</option> }
            { !rotationFilter.length && <option>rotation_period</option> }
            { !surfaceFilter.length && <option>surface_water</option> }
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
          <button type="button" onClick={ remove } data-testid="button-remove-filters">
            Remove all filters
          </button>
          { diameterFilter.length > 0 && (
            <span data-testid="filter">
              diameter
              <button type="button" onClick={ () => setDiameterFilter([]) }>X</button>
            </span>
          )}
          { populationFilter.length > 0 > 0 && (
            <span data-testid="filter">
              population
              <button type="button" onClick={ () => setPopulationFilter([]) }>X</button>
            </span>
          )}
          { orbitalFilter.length > 0 && (
            <span data-testid="filter">
              orbital_period
              <button type="button" onClick={ () => setOrbitalFilter([]) }>X</button>
            </span>
          )}
          { rotationFilter.length > 0 && (
            <span data-testid="filter">
              rotation_period
              <button type="button" onClick={ () => setRotationFilter([]) }>X</button>
            </span>
          )}
          { surfaceFilter.length > 0 && (
            <span data-testid="filter">
              surface_water
              <button type="button" onClick={ () => setSurfaceFilter([]) }>X</button>
            </span>
          )}
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
