import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
import { FavoritesContext } from '../src/context/FavoritesContext';
import * as api from '../src/services/api';
import { AppStrings } from '../src/constants/AppStrings';


const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };


jest.mock('../src/services/api', () => ({
  getAllCountries: jest.fn(() => Promise.resolve([
    {
      name: { common: 'India' },
      capital: ['New Delhi'],
      flags: { png: 'https://flagcdn.com/w320/in.png' },
      cca3: 'IND',
    },
  ])),

}));


const mockCountries = [
  { cca3: 'IND', name: { common: 'India' } },
  { cca3: 'USA', name: { common: 'United States' } },
];


const mockFavoritesContext = {
  addFavorite: jest.fn(),
  removeFavorite: jest.fn(),
  isFavorite: jest.fn(() => false),
};

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading indicator initially', () => {
    const { getByTestId } = render(
      <FavoritesContext.Provider value={mockFavoritesContext}>
        <HomeScreen navigation={mockNavigation} />
      </FavoritesContext.Provider>
    );
    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });


it('renders countries after fetch', async () => {
  api.getAllCountries.mockResolvedValue(mockCountries);

  const { findByText } = render(
    <FavoritesContext.Provider value={mockFavoritesContext}>
      <HomeScreen navigation={mockNavigation} />
    </FavoritesContext.Provider>
  );

  expect(await findByText('India')).toBeTruthy();
  expect(await findByText('United States')).toBeTruthy();
});

  it('filters countries based on search input', async () => {
    api.getAllCountries.mockResolvedValue(mockCountries);

    const { getByPlaceholderText, queryByText } = render(
      <FavoritesContext.Provider value={mockFavoritesContext}>
        <HomeScreen navigation={mockNavigation} />
      </FavoritesContext.Provider>
    );
    await waitFor(() => {
      fireEvent.changeText(getByPlaceholderText('Search Countries...'), 'India');
      expect(queryByText('India')).toBeTruthy();
      expect(queryByText('United States')).toBeNull();
    });
  });


it('navigates to details screen on country press', async () => {
  api.getAllCountries.mockResolvedValue(mockCountries);

  const { getAllByText } = render(
    <FavoritesContext.Provider value={mockFavoritesContext}>
      <HomeScreen navigation={mockNavigation} />
    </FavoritesContext.Provider>
  );

  await waitFor(() => getAllByText('View Details'));

  fireEvent.press(getAllByText('View Details')[0]);

  expect(mockNavigate).toHaveBeenCalledWith('Details', { country: mockCountries[0] });
});



  it('loads more countries on scroll', async () => {
    const manyCountries = Array.from({ length: 25 }, (_, i) => ({
      cca3: `C${i}`,
      name: { common: `Country ${i}` },
      capital: [`Capital ${i}`],
      region: 'Region',
      flags: { png: 'https://flagcdn.com/w320/in.png' },
    }));

    api.getAllCountries.mockResolvedValue(manyCountries);

    const { getByTestId, findByText } = render(
      <FavoritesContext.Provider value={mockFavoritesContext}>
        <HomeScreen navigation={mockNavigation} />
      </FavoritesContext.Provider>
    );

    expect(await findByText('Country 0')).toBeTruthy();

    fireEvent.scroll(getByTestId('flat-list'), {
      nativeEvent: {
        contentOffset: { y: 1000 },
        contentSize: { height: 2000, width: 100 },
        layoutMeasurement: { height: 1000, width: 100 },
      },
    });

    expect(await findByText('Country 15')).toBeTruthy();
  });

  it('shows empty message when no countries match search', async () => {
    api.getAllCountries.mockResolvedValue(mockCountries);

    const { getByPlaceholderText, findByText, queryByTestId } = render(
      <FavoritesContext.Provider value={mockFavoritesContext}>
        <HomeScreen navigation={mockNavigation} />
      </FavoritesContext.Provider>
    );

    await waitFor(() => {
      expect(queryByTestId('ActivityIndicator')).toBeNull();
    });

    fireEvent.changeText(getByPlaceholderText('Search Countries...'), 'NonExistentCountry');

    expect(await findByText(AppStrings.NO_ITEM_FOUND)).toBeTruthy();
  });

  it('handles API failure gracefully', async () => {
    api.getAllCountries.mockRejectedValueOnce(new Error('API Error'));

    const { findByText } = render(
      <FavoritesContext.Provider value={mockFavoritesContext}>
        <HomeScreen navigation={mockNavigation} />
      </FavoritesContext.Provider>
    );

    expect(await findByText(AppStrings.NO_ITEM_FOUND)).toBeTruthy();
  });

  it('shows empty message when no countries match search', async () => {
    api.getAllCountries.mockResolvedValue(mockCountries);

    const { getByPlaceholderText, findByText, queryByTestId } = render(
      <FavoritesContext.Provider value={mockFavoritesContext}>
        <HomeScreen navigation={mockNavigation} />
      </FavoritesContext.Provider>
    );

    await waitFor(() => {
      expect(queryByTestId('ActivityIndicator')).toBeNull();
    });

    fireEvent.changeText(getByPlaceholderText('Search Countries...'), 'NonExistentCountry');

    expect(await findByText(AppStrings.NO_ITEM_FOUND)).toBeTruthy();
  });




});
