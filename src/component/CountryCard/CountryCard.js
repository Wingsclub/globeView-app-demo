import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../constants/AppStrings';
import FastImage from 'react-native-fast-image';

const CountryCard = ({country, onPressDetails}) => {
  return (
    <View style={styles.cardContainer}>
      <FastImage
        testID="flag-image"
        source={{uri: country.flags?.png}}
        style={styles.flag}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {country.name.common}
        </Text>
        <TouchableOpacity
          testID={`view-details-${country.cca3}`}
          onPress={onPressDetails}
          style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>{AppStrings.DETAILS_TXT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountryCard;
