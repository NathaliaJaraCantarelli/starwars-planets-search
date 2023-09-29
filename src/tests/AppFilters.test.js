import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FetchContext } from '../context/FetchProvider';
import { dataHeader, dataPlanets } from './helpers/mockAPI';

const valueFilterConst = 'value-filter';
const comparisonFilterConst = 'comparison-filter';
const buttonFilterConst = 'button-filter';
const columnFilterConst = 'column-filter';

describe('Testa o App', () => {
  test('Se o botão de remover todos os filtros funciona', () => {
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
    const valueFilter = screen.getByTestId(valueFilterConst);
    userEvent.type(valueFilter, '200000');
    const comparisonFilter = screen.getByTestId(comparisonFilterConst);
    comparisonFilter.value = 'igual a';
    const btnFilter = screen.getByTestId(buttonFilterConst);
    userEvent.click(btnFilter);
    expect(tatooine).toBeInTheDocument();
    expect(hoth).not.toBeInTheDocument();
    const btnRemoveFilter = screen.getByTestId('button-remove-filters');
    userEvent.click(btnRemoveFilter);
    expect(screen.getByText(/Hoth/i)).toBeInTheDocument();
  });
  test('Se o botão de remover o filtro population funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const tatooine = screen.getByText(/Tatooine/i);
    expect(tatooine).toBeInTheDocument();
    const hoth = screen.getByText(/Hoth/i);
    expect(hoth).toBeInTheDocument();
    const valueFilter = screen.getByTestId(valueFilterConst);
    userEvent.type(valueFilter, '200000');
    const comparisonFilter = screen.getByTestId(comparisonFilterConst);
    comparisonFilter.value = 'igual a';
    const btnFilter = screen.getByTestId(buttonFilterConst);
    userEvent.click(btnFilter);
    expect(hoth).not.toBeInTheDocument();
    expect(tatooine).toBeInTheDocument();
    const btnRemoveFilter = screen.getByText('X');
    userEvent.click(btnRemoveFilter);
    expect(screen.getByText(/Hoth/i)).toBeInTheDocument();
  });
  test('Se o botão de remover o filtro orbital_period funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const tatooine = screen.getByText(/Tatooine/i);
    expect(tatooine).toBeInTheDocument();
    const hoth = screen.getByText(/Hoth/i);
    expect(hoth).toBeInTheDocument();
    const typeFilter = screen.getByTestId(columnFilterConst);
    typeFilter.value = 'orbital_period';
    const valueFilter = screen.getByTestId(valueFilterConst);
    userEvent.type(valueFilter, '304');
    const comparisonFilter = screen.getByTestId(comparisonFilterConst);
    comparisonFilter.value = 'igual a';
    const btnFilter = screen.getByTestId(buttonFilterConst);
    userEvent.click(btnFilter);
    expect(hoth).not.toBeInTheDocument();
    expect(tatooine).toBeInTheDocument();
    const btnRemoveFilter = screen.getByText('X');
    userEvent.click(btnRemoveFilter);
    expect(screen.getByText(/Hoth/i)).toBeInTheDocument();
  });
  test('Se o botão de remover o filtro diameter funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const tatooine = screen.getByText(/Tatooine/i);
    expect(tatooine).toBeInTheDocument();
    const hoth = screen.getByText(/Hoth/i);
    expect(hoth).toBeInTheDocument();
    const typeFilter = screen.getByTestId(columnFilterConst);
    typeFilter.value = 'diameter';
    const valueFilter = screen.getByTestId(valueFilterConst);
    userEvent.type(valueFilter, '10465');
    const comparisonFilter = screen.getByTestId(comparisonFilterConst);
    comparisonFilter.value = 'igual a';
    const btnFilter = screen.getByTestId(buttonFilterConst);
    userEvent.click(btnFilter);
    expect(hoth).not.toBeInTheDocument();
    expect(tatooine).toBeInTheDocument();
    const btnRemoveFilter = screen.getByText('X');
    userEvent.click(btnRemoveFilter);
    expect(screen.getByText(/Hoth/i)).toBeInTheDocument();
  });
  test('Se o botão de remover o filtro rotation_period funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const tatooine = screen.getByText(/Tatooine/i);
    expect(tatooine).toBeInTheDocument();
    const hoth = screen.getByText(/Hoth/i);
    expect(hoth).toBeInTheDocument();
    const typeFilter = screen.getByTestId(columnFilterConst);
    typeFilter.value = 'rotation_period';
    const valueFilter = screen.getByTestId(valueFilterConst);
    userEvent.type(valueFilter, '23');
    const comparisonFilter = screen.getByTestId(comparisonFilterConst);
    comparisonFilter.value = 'igual a';
    const btnFilter = screen.getByTestId(buttonFilterConst);
    userEvent.click(btnFilter);
    expect(hoth).not.toBeInTheDocument();
    expect(tatooine).toBeInTheDocument();
    const btnRemoveFilter = screen.getByText('X');
    userEvent.click(btnRemoveFilter);
    expect(screen.getByText(/Hoth/i)).toBeInTheDocument();
  });
  test('Se o botão de remover o filtro surface_water funciona', () => {
    render(
      <FetchContext.Provider
        value={ { dataPlanets, dataHeader, isLoading: true } }
      >
        <App />
      </FetchContext.Provider>,
    );
    const tatooine = screen.getByText(/Tatooine/i);
    expect(tatooine).toBeInTheDocument();
    const hoth = screen.getByText(/Hoth/i);
    expect(hoth).toBeInTheDocument();
    const typeFilter = screen.getByTestId(columnFilterConst);
    typeFilter.value = 'surface_water';
    const valueFilter = screen.getByTestId(valueFilterConst);
    userEvent.type(valueFilter, '1');
    const comparisonFilter = screen.getByTestId(comparisonFilterConst);
    comparisonFilter.value = 'igual a';
    const btnFilter = screen.getByTestId(buttonFilterConst);
    userEvent.click(btnFilter);
    expect(hoth).not.toBeInTheDocument();
    expect(tatooine).toBeInTheDocument();
    const btnRemoveFilter = screen.getByText('X');
    userEvent.click(btnRemoveFilter);
    expect(screen.getByText(/Hoth/i)).toBeInTheDocument();
  });
});
