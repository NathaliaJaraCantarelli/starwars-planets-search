import React, { useContext } from 'react';
import './App.css';
import { FetchContext } from './context/FetchProvider';

function App() {
  const { isLoading, gitHeader, gitRepos } = useContext(FetchContext);
  return (
    <>
      <span>Ola</span>
      <table>
        <thead>
          <tr>
            { isLoading && gitHeader.map((header, index) => (
              <th key={ index }>{ header }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { isLoading && gitRepos.map((repos, index) => (
            <tr key={ `position${index}` }>
              {repos.map((repo, i) => (
                <td key={ `value${i}` }>{repo}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>{ isLoading && gitRepos.name}</p>
      <p>{ isLoading && gitHeader[8]}</p>
    </>
  );
}

export default App;
