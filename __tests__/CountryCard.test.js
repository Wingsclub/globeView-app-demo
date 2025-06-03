import React from 'react';
import { render } from '@testing-library/react-native';
import CountryCard from '../src/component/CountryCard/CountryCard';
import { AppStrings } from '../src/constants/AppStrings';

const mockCountry = {
  name: { common: 'India' },
  flags: { png: 'https://flagcdn.com/w320/in.png' },
};

describe('CountryCard', () => {
  it('renders country name, capital, and region', () => {
    const { getByText } = render(<CountryCard country={mockCountry} />);

    expect(getByText('India')).toBeTruthy();
  });

  it('renders flag image with correct URI', () => {
  const { getByTestId } = render(<CountryCard country={mockCountry} />);
  const image = getByTestId('flag-image');

  expect(image.props.source.uri).toBe(mockCountry.flags.png);
});

});
