import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import BackgroundWrapper from '../../component/BackgroundWrapper/BackgroundWrapper';
import {AppStrings} from '../../constants/AppStrings';

const DetailsScreen = ({route}) => {
  const country = route?.params?.country;

  const renderInfoBlock = (label, value) => (
    <View style={styles.infoBlock}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || AppStrings.NA}</Text>
    </View>
  );

  const renderLanguages = () => (
    <View style={styles.infoBlock}>
      <Text style={styles.label}>{AppStrings.LANGUAGES}</Text>
      {country?.languages ? (
        Object.values(country.languages).map(lang => (
          <Text key={lang} style={styles.value}>
            • {lang}
          </Text>
        ))
      ) : (
        <Text style={styles.value}>{AppStrings.NA}</Text>
      )}
    </View>
  );

  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: country?.flags?.png}} style={styles.flag} />
        <Text style={styles.countryTxt}>
          {country?.name?.common || AppStrings.NA}
        </Text>
        {renderInfoBlock(AppStrings.CAPITAL, country?.capital?.[0])}
        {renderInfoBlock(AppStrings.REGION, country?.region)}
        {renderInfoBlock(AppStrings.SUB_REGION, country?.subregion)}
        {renderInfoBlock(
          AppStrings.POPULATION,
          country?.population?.toLocaleString(),
        )}
        {renderInfoBlock(
          AppStrings.AREA,
          country?.area ? `${country.area.toLocaleString()} km²` : null,
        )}
        {renderLanguages()}
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default DetailsScreen;
