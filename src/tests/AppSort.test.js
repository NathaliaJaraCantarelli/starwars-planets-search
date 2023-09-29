import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FetchContext } from '../context/FetchProvider';
import { dataHeader, dataPlanets } from './helpers/mockAPI';

describe('Testa o App', () => {
  test('Se o botão de remover todos os filtros funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const firtNameAfterSort = dataPlanets[0][0];
    const comparisonFilter = screen.getByTestId('column-sort-input-asc');
    comparisonFilter.checked = true;
    const btnFilter = screen.getByTestId('column-sort-button');
    userEvent.click(btnFilter);
    const firtNameBeforeSort = dataPlanets[0][0];
    expect(firtNameAfterSort).not.toBe(firtNameBeforeSort);
  });
  test('Se o botão de remover todos os filtros funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const firtNameAfterSort = dataPlanets[0][0];
    const comparisonFilter = screen.getByTestId('column-sort-input-desc');
    comparisonFilter.checked = true;
    const btnFilter = screen.getByTestId('column-sort-button');
    userEvent.click(btnFilter);
    const firtNameBeforeSort = dataPlanets[0][0];
    expect(firtNameAfterSort).not.toBe(firtNameBeforeSort);
  });
});
