import React from 'react';
import {View } from 'react-native';
import styles from './styles';
import { weatherLogo } from '../../../assets/images/Images';
import FastImage from 'react-native-fast-image';


const BackgroundWrapper = ({ children }) => {
    return (
        <FastImage source={weatherLogo} style={styles.background}>
            <View testID="overlay"  style={styles.overlay} />
            <View testID="content" style={styles.content}>{children}</View>
        </FastImage>

    );
};



export default BackgroundWrapper;