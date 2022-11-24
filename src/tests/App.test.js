import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FetchContext } from '../context/FetchProvider';
import { dataHeader, dataPlanets } from './helpers/mockAPI';

describe('Testa o App', () => {
  test('Se o inicia com Loanding...', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: false } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const loading = screen.getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();
  });
  test('Se o filtro por nome funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const tatooine = screen.getByText(/Tatooine/i);
    const endor = screen.getByText(/Endor/i);
    const input = screen.getByTestId('name-filter');
    userEvent.type(input, 'oo');
    const naboo = screen.getByText(/Naboo/i);
    expect(tatooine).toBeInTheDocument();
    expect(naboo).toBeInTheDocument();
    expect(endor).not.toBeInTheDocument();
  });
  test('Se o filtro de maior que funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const hoth = screen.getByText(/Hoth/i);
    expect(hoth).toBeInTheDocument();
    const btnFilter = screen.getByRole('button');
    userEvent.click(btnFilter);
    expect(hoth.textContent).not.toBe(/Hoth/i);
  });
  test('Se o filtro de menor que funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const hoth = screen.getByText(/Hoth/i);
    expect(hoth).toBeInTheDocument();
    const comparisonFilter = screen.getByTestId('comparison-filter');
    comparisonFilter.value = 'menor que';
    const btnFilter = screen.getByRole('button');
    userEvent.click(btnFilter);
    expect(hoth).not.toBeInTheDocument();
  });
  test('Se o filtro de igual a funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const hoth = screen.getByText(/Hoth/i);
    const tatooine = screen.getByText(/Tatooine/i);
    expect(tatooine).toBeInTheDocument();
    expect(hoth).toBeInTheDocument();
    const comparisonFilter = screen.getByTestId('comparison-filter');
    comparisonFilter.value = 'igual a';
    const valueFilter = screen.getByTestId('value-filter');
    userEvent.type(valueFilter, '200000');
    const btnFilter = screen.getByRole('button');
    userEvent.click(btnFilter);
    expect(tatooine).toBeInTheDocument();
    expect(hoth).not.toBeInTheDocument();
  });
});
