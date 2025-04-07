import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";

 
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor:colors.white
  },
  image:{
    width: mvs(188),
    height: mvs(188),
  }
});
export default styles;