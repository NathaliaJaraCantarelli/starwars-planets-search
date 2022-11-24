import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FetchContext } from '../context/FetchProvider';
import { api, dataHeader, dataPlanets } from './helpers/mockAPI';

describe('Testa o App', () => {
  test('Se o inicia com Loanding...', async() => {
    // global.fetch = jest.fn()
    //   .mockResolvedValue(Promise
    //     .resolve({ json: () => Promise
    //       .resolve(api), ok: true }));
    // render(
    //   <FetchContext.Provider
    //     value={ { dataPlanets: [], dataHeader: [], isLoading: true } }
    //   >
    //     <App />
    //   </FetchContext.Provider>,
    // );
    // jest.spyOn(fetchRepos, 'fetchRepos');
    // await fetchRepos('https://swapi.dev/api/planets')
    // expect(fetch).toHaveBeenCalledWith();
    // expect(dataPlanets.length).toBe(10);
    // expect(dataHeader.length).toBe(13);
    // const loading = screen.getByText(/Loading.../i);
    // expect(loading).toBeInTheDocument();
  });
});