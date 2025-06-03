import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';
import {heightScale, widthScale} from '../../utils/Utility';
import {fontFamily} from '../../constants/AppFonts';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: widthScale(8),
    borderWidth: widthScale(1),
    borderColor: AppColors.borderColor,
    paddingHorizontal: widthScale(16),
    marginHorizontal: widthScale(16),
    marginBottom: heightScale(10),
  },
  searchIcon: {
    marginRight: widthScale(8),
  },
  searchTxt: {
    flex: 1,
    height: heightScale(40),
    fontSize: 16,
    color: AppColors.shadowColor,
    fontFamily: fontFamily.RobotoSlab_Regular,
  },
});

export default styles;
