import { StyleSheet } from "react-native";
import {mvs} from '../../config/metrices';
import { colors } from '../../config/colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: mvs(20),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.white,
      marginBottom: mvs(10),
    },
    logo: {
      width: mvs(70),
      height: mvs(70),
    },
    profileIcon: {
      width: mvs(30),
      height: mvs(30),
      borderRadius: mvs(12),
    },
    
  });
  export default styles;