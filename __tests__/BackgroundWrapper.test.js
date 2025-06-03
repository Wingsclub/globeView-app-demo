import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import BackgroundWrapper from '../src/component/BackgroundWrapper/BackgroundWrapper';
import { weatherLogo } from '../assets/images/Images';
import FastImage from 'react-native-fast-image';

jest.mock('react-native-fast-image', () => 'FastImage');

describe('BackgroundWrapper', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(
      <BackgroundWrapper>
        <Text>Test Child</Text>
      </BackgroundWrapper>
    );

    expect(getByText('Test Child')).toBeTruthy();
  });

  it('renders FastImage with correct source', () => {
    const { UNSAFE_getByType } = render(<BackgroundWrapper />);
    const image = UNSAFE_getByType(FastImage);

    expect(image.props.source).toEqual(weatherLogo);
  });

 it('renders overlay and content views', () => {
  const { getByTestId } = render(
    <BackgroundWrapper>
      <Text>Child</Text>
    </BackgroundWrapper>
  );

  expect(getByTestId('overlay')).toBeTruthy();
  expect(getByTestId('content')).toBeTruthy();
});

});
