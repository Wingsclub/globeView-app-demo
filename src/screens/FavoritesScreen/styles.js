import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';
import {heightScale, widthScale} from '../../utils/Utility';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  cardWrapper: {
    backgroundColor: AppColors.white,
    borderRadius: widthScale(4),
    marginHorizontal: widthScale(16),
    marginVertical: heightScale(8),
    padding: widthScale(12),
    shadowColor: AppColors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: widthScale(4),
    elevation: 3,
  },
  favoriteButton: {
    backgroundColor: AppColors.lightBackgroundColor,
    paddingVertical: heightScale(8),
    paddingHorizontal: widthScale(16),
    borderRadius: widthScale(20),
    alignSelf: 'flex-start',
    marginTop: heightScale(10),
  },
  removeTxt: {
    color: AppColors.white,
  },
  listContent: {
    paddingBottom: heightScale(20),
  },
});

export default styles;
