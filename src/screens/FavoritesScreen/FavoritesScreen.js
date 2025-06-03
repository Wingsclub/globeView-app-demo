import React, {useContext} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {FavoritesContext} from '../../context/FavoritesContext';
import CountryCard from '../../component/CountryCard/CountryCard';
import BackgroundWrapper from '../../component/BackgroundWrapper/BackgroundWrapper';
import {AppStrings} from '../../constants/AppStrings';
import {Routes} from '../../constants/RouteConstants';

const FavoritesScreen = ({navigation}) => {
  const {favorites, removeFavorite} = useContext(FavoritesContext);

  const renderCountryItem = ({item}) => {
    return (
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.DETAILS, {country: item})}>
          <CountryCard
            country={item}
            onPressDetails={() =>
              navigation.navigate(Routes.DETAILS, {country: item})
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => removeFavorite(item)}>
          <Text style={styles.removeTxt}>{AppStrings.REMOVE} ❤️</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (favorites.length === 0) {
    return (
      <BackgroundWrapper>
        <View style={styles.container}>
          <Text>{AppStrings.NO_FAVORITES}</Text>
        </View>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper>
      <View style={styles.mainContainer}>
        <FlatList
          data={favorites}
          keyExtractor={item => item.cca3}
          contentContainerStyle={styles.listContent}
          renderItem={renderCountryItem}
        />
      </View>
    </BackgroundWrapper>
  );
};

export default FavoritesScreen;
