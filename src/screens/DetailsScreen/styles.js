import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/AppColors";
import { heightScale, widthScale } from "../../utils/Utility";
import { fontFamily } from "../../constants/AppFonts";

const styles = StyleSheet.create({
  container: {
    padding: widthScale(20),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    borderBottomWidth: widthScale(1),
    borderRadius: widthScale(6)
  },
  flag: {
    width: widthScale(200),
    height: heightScale(120),
    marginBottom: heightScale(15),
    borderRadius: widthScale(10),
    shadowColor: AppColors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: widthScale(4),
  },
  title: {
    fontSize: 26,
    fontWeight: '400',
    marginBottom: heightScale(20),
    fontFamily:fontFamily.Quicksand_Bold
  },
  countryTxt: {
    fontWeight: '500',
    fontSize: 24,
    marginTop: heightScale(10),
    color: AppColors.primaryText,
    fontFamily:fontFamily.Quicksand_Bold
  },
  capitalTxt: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: heightScale(10),
    fontFamily:fontFamily.Quicksand_Bold
  },
  label: {
    fontFamily:fontFamily.RobotoSlab_Light,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: heightScale(10),
  },
  value: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  infoBlock: {
  width: '100%',
  marginTop: heightScale(12),
  paddingVertical: heightScale(6),
  borderBottomWidth: 0.5,
  borderBottomColor: AppColors.lightGrey,
},
value: {
  fontSize: 14,
  color: AppColors.secondaryText,
  fontFamily: fontFamily.RobotoSlab_Light,
  marginTop: heightScale(4),
},



});

export default styles;