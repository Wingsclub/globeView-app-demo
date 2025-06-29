/**
 * @format
 */

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
