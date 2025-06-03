jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

import React from 'react';
import { render, act, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoritesProvider, FavoritesContext } from '../src/context/FavoritesContext';


const mockCountry = { cca3: 'IND', name: { common: 'India' } };
describe('FavoritesContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads favorites from AsyncStorage on mount', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([mockCountry]));
    const { getByTestId } = render(
      <FavoritesProvider>
        <FavoritesContext.Consumer>
          {(value) => {
            favorites = value.favorites;
            return null;
          }}
        </FavoritesContext.Consumer>
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(AsyncStorage.getItem).toHaveBeenCalledWith('@favorites');
      expect(favorites).toEqual([mockCountry]);
    });

  });

  it('adds a favorite and saves to AsyncStorage', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(null);

    let contextValue;
   
      render(
        <FavoritesProvider>
          <FavoritesContext.Consumer>
            {(value) => {
              contextValue = value;
              return null;
            }}
          </FavoritesContext.Consumer>
        </FavoritesProvider>
      );


    await act(async () => {
      contextValue.addFavorite(mockCountry);
    });

    expect(contextValue.favorites).toContainEqual(mockCountry);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      '@favorites',
      JSON.stringify([mockCountry])
    );
  });

  it('removes a favorite and updates AsyncStorage', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([mockCountry]));

    let contextValue;
    render(
      <FavoritesProvider>
        <FavoritesContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </FavoritesContext.Consumer>
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(contextValue).toBeDefined();
    });

       await waitFor(() => {
      contextValue.removeFavorite(mockCountry);
    });

    expect(contextValue.favorites).toEqual([]);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('@favorites', JSON.stringify([]));
  });



  it('correctly identifies a favorite', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([mockCountry]));

    let contextValue;
    render(
      <FavoritesProvider>
        <FavoritesContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </FavoritesContext.Consumer>
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(contextValue).toBeDefined();
      expect(contextValue.isFavorite(mockCountry)).toBe(true);
      expect(contextValue.isFavorite({ cca3: 'USA' })).toBe(false);
    });
  });

});
