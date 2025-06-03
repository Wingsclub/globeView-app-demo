import { StyleSheet } from "react-native";
import { widthScale } from "../../utils/Utility";
import { AppColors } from "../../constants/AppColors";

const styles = StyleSheet.create({
    background: {
       flex:1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor:AppColors.backgroundColor
    },
    content: {
        flex:1,
        padding:widthScale(16)
    }
});

export default styles;