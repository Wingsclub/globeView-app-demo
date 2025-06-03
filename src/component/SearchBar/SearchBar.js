import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../../constants/AppColors';

const SearchBar = ({value, onChangeText, placeholder = 'Search...'}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon
        name="search"
        size={20}
        color={AppColors.black}
        style={styles.searchIcon}
      />
      <TextInput
        testID="search-input"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.searchTxt}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default SearchBar;
