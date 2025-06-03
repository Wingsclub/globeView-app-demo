import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';
import {heightScale, widthScale} from '../../utils/Utility';
import {fontFamily} from '../../constants/AppFonts';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: widthScale(10),
    borderBottomWidth: heightScale(0.5),
    alignItems: 'center',
    borderBottomColor: AppColors.lightGrey,
  },
  flag: {
    width: widthScale(55),
    height: heightScale(40),
    marginRight: widthScale(10),
    marginTop: heightScale(-10),
  },

  textContainer: {
    flex: 1,
    flexShrink: 1,
  },

  name: {
    fontSize: 16,
    paddingTop: heightScale(12),
    fontFamily: fontFamily.RobotoSlab_Bold,
  },
  detailsButton: {
    marginTop: heightScale(10),
    alignSelf: 'flex-end',
  },

  detailsButtonText: {
    color: AppColors.black,
    fontSize: 11,
    fontFamily: fontFamily.RobotoSlab_Light,
  },
});

export default styles;
