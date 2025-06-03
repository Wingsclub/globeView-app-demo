import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';
import {heightScale, widthScale} from '../../utils/Utility';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchTxt: {
    borderBottomWidth: heightScale(1),
    marginBottom: heightScale(10),
  },
  removeTxt: {
    color: AppColors.red,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: heightScale(50),
  },
  emptyText: {
    fontSize: 18,
    color: AppColors.lightGrey,
    fontStyle: 'italic',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: heightScale(20),
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
    backgroundColor: AppColors.lightRed,
    paddingVertical: heightScale(8),
    paddingHorizontal: widthScale(16),
    borderRadius: widthScale(20),
    alignSelf: 'flex-start',
    marginTop: heightScale(10),
  },
  favoriteText: {
    color: AppColors.white,
    fontSize: 11,
  },
  footerLoader: {
    marginVertical: 10,
  },
});

export default styles;
