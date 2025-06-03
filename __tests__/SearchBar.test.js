import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '../src/component/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('renders with default placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchBar value="" onChangeText={() => {}} />
    );

    expect(getByPlaceholderText('Search...')).toBeTruthy();
  });

  it('renders with custom placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchBar value="" onChangeText={() => {}} placeholder="Find country" />
    );

    expect(getByPlaceholderText('Find country')).toBeTruthy();
  });

  it('displays the correct value', () => {
    const { getByDisplayValue } = render(
      <SearchBar value="India" onChangeText={() => {}} />
    );

    expect(getByDisplayValue('India')).toBeTruthy();
  });

  it('calls onChangeText when text changes', () => {
    const mockChange = jest.fn();
    const { getByTestId } = render(
      <SearchBar value="" onChangeText={mockChange} />
    );

    fireEvent.changeText(getByTestId('search-input'), 'Nepal');
    expect(mockChange).toHaveBeenCalledWith('Nepal');
  });
});
