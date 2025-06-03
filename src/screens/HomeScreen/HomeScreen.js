import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import { getAllCountries } from '../../services/api';
import CountryCard from '../../component/CountryCard/CountryCard';
import BackgroundWrapper from '../../component/BackgroundWrapper/BackgroundWrapper';
import SearchBar from '../../component/SearchBar/SearchBar';
import { FavoritesContext } from '../../context/FavoritesContext';
import { AppStrings } from '../../constants/AppStrings';
import { Routes } from '../../constants/RouteConstants';
import { AppColors } from '../../constants/AppColors';

const ITEMS_PER_PAGE = 10;

const HomeScreen = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const data = await getAllCountries();
      setCountries(data);
      setFilteredCountries(data);
      setVisibleCountries(data.slice(0, ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCountries(filtered);
    setPage(1);
    setVisibleCountries(filtered.slice(0, ITEMS_PER_PAGE));
  };

  const loadMore = () => {
    if (loadingMore) return;

    setLoadingMore(true);
    const nextPage = page + 1;
    const start = (nextPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const moreItems = filteredCountries.slice(start, end);

    if (moreItems.length > 0) {
      setVisibleCountries(prev => [...prev, ...moreItems]);
      setPage(nextPage);
    }

    setLoadingMore(false);
  };

  const renderCountryItem = ({ item }) => {
    const favorite = isFavorite(item);

    return (
      <View style={styles.cardWrapper}>
        <CountryCard
          country={item}
          onPressDetails={() => navigation.navigate(Routes.DETAILS, { country: item })}
        />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => favorite ? removeFavorite(item) : addFavorite(item)}
        >
          <Text style={styles.favoriteText}>
            {favorite ? `${AppStrings.REMOVE} ❤️` : AppStrings.ADD_TO_FAVORITES}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderFooter = () =>
    loadingMore ? (
      <ActivityIndicator size="small" color={AppColors.lightGrey} style={styles.footerLoader} />
    ) : null;

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{AppStrings.NO_ITEM_FOUND}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator testID="ActivityIndicator" size="large" color={AppColors.lightGrey} />
      </View>
    );
  }

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <SearchBar
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder={AppStrings.SEARCH_TXT}
        />
        <FlatList
          testID="flat-list"
          data={visibleCountries}
          keyExtractor={item => item.cca3}
          renderItem={renderCountryItem}
          contentContainerStyle={styles.listContent}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={ITEMS_PER_PAGE}
          maxToRenderPerBatch={ITEMS_PER_PAGE}
          windowSize={5}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmptyComponent}
        />
      </View>
    </BackgroundWrapper>
  );
};

export default HomeScreen;
