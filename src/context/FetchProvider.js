import { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FetchContext = createContext();

function FetchProvider({ children }) {
  const [dataPlanets, setDataPlanets] = useState([]);
  const [dataHeader, setDataHeader] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
        const repos = await response.json();
        const tableHeader = repos.results;
        const tableData = [];
        tableHeader.forEach((name) => {
          delete name.residents;
          tableData.push(Object.values(name));
        });
        setDataPlanets(tableData);
        setDataHeader(Object.keys(tableHeader[0]));
      } finally {
        setIsLoading(true);
      }
    };

    fetchRepos();
  }, []);

  const values = useMemo(() => ({
    dataHeader,
    dataPlanets,
    isLoading,
  }), [dataHeader, dataPlanets, isLoading]);

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
