import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@favorites');
        if (jsonValue != null) {
          setFavorites(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Failed to load favorites', e);
      }
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
      } catch (e) {
        console.error('Failed to save favorites', e);
      }
    };
    saveFavorites();
  }, [favorites]);

  const addFavorite = country => {
    setFavorites(prev => [...prev, country]);
  };

  const removeFavorite = country => {
    setFavorites(prev => prev.filter(c => c.cca3 !== country.cca3));
  };

  const isFavorite = country => {
    return favorites.some(c => c.cca3 === country.cca3);
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, addFavorite, removeFavorite, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};
