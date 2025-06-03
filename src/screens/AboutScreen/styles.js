import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../utils/Utility";
import { AppColors } from "../../constants/AppColors";
import { fontFamily } from "../../constants/AppFonts";



const styles = StyleSheet.create({
  container: {
    padding: widthScale(20),
    alignItems: 'center',
    backgroundColor: AppColors.white,
    flexGrow: 1,
  },
  logo: {
    width: widthScale(150),
    height: heightScale(150),
    marginBottom: heightScale(20),
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily:fontFamily.RobotoSlab_Bold
  },
  version: {
    fontSize: 14,
    color: AppColors.lightGrey,
    marginBottom: heightScale(10),
    fontFamily:fontFamily.RobotoSlab_Light
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: heightScale(30),
    lineHeight: heightScale(22),
    fontFamily:fontFamily.RobotoSlab_Light
  },
  sectionTitle: {
    marginTop: heightScale(20),
    marginBottom: heightScale(8),
    fontSize: 18,
    fontFamily:fontFamily.Quicksand_Bold,
    fontWeight:'600'
  },
  link: {
    color: AppColors.blue,
    marginBottom: heightScale(8),
    textDecorationLine: 'underline',
  },
});

export default styles;