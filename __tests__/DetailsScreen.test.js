import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsScreen from '../src/screens/DetailsScreen/DetailsScreen';
import { AppStrings } from '../src/constants/AppStrings';

jest.mock('../src/component/BackgroundWrapper/BackgroundWrapper', () => {
  return ({ children }) => children;
});

const mockCountry = {
  name: { common: 'India' },
  capital: ['New Delhi'],
  region: 'Asia',
  subregion: 'Southern Asia',
  population: 1393409038,
  area: 3287263,
  flags: { png: 'https://flagcdn.com/w320/in.png' },
  languages: { hin: 'Hindi', eng: 'English' },
};

describe('DetailsScreen', () => {
  it('renders country name and capital', () => {
    const { getByText } = render(<DetailsScreen route={{ params: { country: mockCountry } }} />);
    expect(getByText('India')).toBeTruthy();
    expect(getByText(`${AppStrings.CAPITAL}`)).toBeTruthy();
    expect(getByText('New Delhi')).toBeTruthy();
  });

  it('renders region and subregion', () => {
    const { getByText } = render(<DetailsScreen route={{ params: { country: mockCountry } }} />);
    expect(getByText(AppStrings.REGION)).toBeTruthy();
    expect(getByText('Asia')).toBeTruthy();
    expect(getByText(AppStrings.SUB_REGION)).toBeTruthy();
    expect(getByText('Southern Asia')).toBeTruthy();
  });

  it('renders population and area', () => {
    const { getByText } = render(<DetailsScreen route={{ params: { country: mockCountry } }} />);
    expect(getByText(AppStrings.POPULATION)).toBeTruthy();
    expect(getByText('1,393,409,038')).toBeTruthy();
    expect(getByText(AppStrings.AREA)).toBeTruthy();
    expect(getByText('3,287,263 km²')).toBeTruthy();
  });

  it('renders languages', () => {
    const { getByText } = render(<DetailsScreen route={{ params: { country: mockCountry } }} />);
    expect(getByText(AppStrings.LANGUAGES)).toBeTruthy();
    expect(getByText('• Hindi')).toBeTruthy();
    expect(getByText('• English')).toBeTruthy();
  });

 it('handles missing optional fields gracefully', () => {
  const incompleteCountry = {
    name: { common: 'Unknownland' },
    population: 0,
    area: 0,
    flags: {},
  };

  const { getByText, getAllByText } = render(
    <DetailsScreen route={{ params: { country: incompleteCountry } }} />
  );

  expect(getByText('Unknownland')).toBeTruthy();
  const naElements = getAllByText(AppStrings.NA);
  expect(naElements.length).toBeGreaterThan(0);
});

});
