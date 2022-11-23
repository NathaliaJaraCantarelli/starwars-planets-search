import { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

export const FetchContext = createContext();

function FetchProvider({ children }) {
  const [gitRepos, setGitRepos] = useState([]);
  const [gitHeader, setGitHeader] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
        const repos = await response.json();
        const tableHeader = repos.results;
        const tableData = [];
        tableHeader.forEach((data) => {
          delete data.residents;
          tableData.push(Object.values(data));
        });
        setGitRepos(tableData);
        setGitHeader(Object.keys(tableHeader[0]));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    };

    fetchRepos();
  }, []);

  const values = useMemo(() => ({
    gitHeader,
    gitRepos,
    isLoading,
  }), [gitHeader, gitRepos, isLoading]);

  return (
    <FetchContext.Provider value={ values }>
      { children }
    </FetchContext.Provider>
  );
}

FetchProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default FetchProvider;
