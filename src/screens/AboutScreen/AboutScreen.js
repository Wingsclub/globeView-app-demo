import React from 'react';
import {Text, ScrollView, Linking} from 'react-native';
import styles from './styles';
import {appLogo} from '../../../assets/images/Images';
import BackgroundWrapper from '../../component/BackgroundWrapper/BackgroundWrapper';
import {AppStrings} from '../../constants/AppStrings';
import FastImage from 'react-native-fast-image';

const AboutScreen = () => {
  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <FastImage source={appLogo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>{AppStrings.GLOBEVIEW}</Text>
        <Text style={styles.version}>{AppStrings.VERSION}</Text>
        <Text style={styles.description}>{AppStrings.DESCRIPTION}</Text>
        <Text style={styles.sectionTitle}>{AppStrings.DEVELOPER}</Text>
        <Text>{AppStrings.DEVELOPMENT_TEAM}</Text>
        <Text style={styles.sectionTitle}>{AppStrings.CONTACT}</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('mailto:support@optum.com')}>
          {AppStrings.SUPPORT_MAIL}
        </Text>
        <Text style={styles.sectionTitle}>{AppStrings.TERMS_PRIVACY}</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.optum.com/privacy')}>
          {AppStrings.PRIVACY_POLICY}
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.optum.com/terms')}>
          {AppStrings.TERMS_SERVICE}
        </Text>
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default AboutScreen;
