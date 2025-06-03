import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoritesScreen from '../src/screens/FavoritesScreen/FavoritesScreen';
import { FavoritesContext } from '../src/context/FavoritesContext';
import { AppStrings } from '../src/constants/AppStrings';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));
const mockFavorite = {
  cca3: 'USA',
  name: { common: 'United States' },
};

describe('FavoritesScreen', () => {
  it('renders no favorites message when favorites list is empty', () => {
    const { getByText } = render(
      <FavoritesContext.Provider value={{ favorites: [], removeFavorite: jest.fn() }}>
        <FavoritesScreen />
      </FavoritesContext.Provider>
    );

    expect(getByText(AppStrings.NO_FAVORITES)).toBeTruthy();
  });

  it('renders favorite countries when favorites are present', () => {
    const { getByText } = render(
      <FavoritesContext.Provider value={{ favorites: [mockFavorite], removeFavorite: jest.fn() }}>
        <FavoritesScreen />
      </FavoritesContext.Provider>
    );

    expect(getByText(AppStrings.REMOVE + ' ❤️')).toBeTruthy();
  });

  it('calls removeFavorite when remove button is pressed', () => {
    const mockRemoveFavorite = jest.fn();

    const { getByText } = render(
      <FavoritesContext.Provider value={{ favorites: [mockFavorite], removeFavorite: mockRemoveFavorite }}>
        <FavoritesScreen />
      </FavoritesContext.Provider>
    );

    fireEvent.press(getByText(AppStrings.REMOVE + ' ❤️'));
    expect(mockRemoveFavorite).toHaveBeenCalledWith(mockFavorite);
  });


});
