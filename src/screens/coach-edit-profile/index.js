import {View, Text, Image,ScrollView} from 'react-native';
import React from 'react';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Touchable from '../../components/atoms/button';
import {mvs} from '../../config/metrices';
import Textinput from '../../components/atoms/textinput';
import {Formik} from 'formik';
import {validationSchemaEditProfile2} from '../../validations/validation';
import {useSelector, useDispatch} from 'react-redux';
import {addDirecProfileData} from '../../redux/actions';
import { colors } from '../../config/colors';

const CoachEditProfile = ({navigation}) => {
  const Data = useSelector(state => state.direc_data_reducer);
  const dispatch = useDispatch();
  console.log(Data);
  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} contentContainerStyle={styles.container} >
    {/* <View style={styles.container}> */}
      <View style={styles.header}>
        <Touchable
          leftImage={IMG.back}
          buttonstyle={styles.buttonstyle2}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Edit Profile</Text>
        </View>
      </View>
      <Text style={styles.text2}>Personal Information</Text>
      <View style={{alignItems: 'center', marginTop: mvs(10),height:mvs(90)}}>
        {/* <View> */}
          <Image
            source={IMG.coachprofile}
            style={styles.image}
            resizeMode="contain"
          />
          {/* <View style={styles.editimagecon}>
            <Image
              source={IMG.edit}
              resizeMode="contain"
              style={styles.editimage}
            />
        </View> */}
      </View>
      <Formik
        initialValues={{
          location: Data.location,
          email: Data.email,
          birthday: Data.birthday,
          gmail: Data.gmail,
        }}
        onSubmit={(values, {resetForm}) => {
          dispatch(addDirecProfileData(values));

          navigation.goBack();
          resetForm();
        }}
        validationSchema={validationSchemaEditProfile2}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{marginTop: mvs(20)}}>
            <Textinput
              placeholder="Location"
              keyboardType="ascii-capable"
              containerStyle={styles.containerStyle1}
              onChangeText={handleChange('location')}
              value={values.location}
              onBlur={handleBlur('location')}
              error={touched.location && errors.location}
              multilines={true}
              textStyle={styles.input}
            />
            <Textinput
              placeholder="Postal Code"
              containerStyle={styles.containerStyle1}
              onChangeText={handleChange('email')}
              value={values.email}
              keyboardType="ascii-capable"
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
              multilines={true}

            />
            <Textinput
              placeholder="Date of Birth"
              onChangeText={handleChange('birthday')}
              value={values.birthday}
              keyboardType="ascii-capable"
              onBlur={handleBlur('birthday')}
              error={touched.birthday && errors.birthday}
              containerStyle={styles.containerStyle1}
              multilines={true}

            />
            <Textinput
              placeholder="Gmail"
              onChangeText={handleChange('gmail')}
              value={values.gmail}
              keyboardType="ascii-capable"
              onBlur={handleBlur('gmail')}
              error={touched.gmail && errors.gmail}
              containerStyle={styles.containerStyle1}
              multilines={true}

            />
            <Touchable
              onPress={handleSubmit}
              title={'Save Changes'}
              buttonstyle={styles.buttonstyle}
            />
          </View>
        )}
      </Formik>
    {/* </View> */}
    </ScrollView>
  );
};
export default CoachEditProfile;

// import {View, Text, Image} from 'react-native';
// import React from 'react';
// import * as IMG from '../../assets/images/images';
// import styles from './style';
// import Touchable from '../../components/atoms/button';
// import { mvs } from '../../config/metrices';

// const CoachEditProfile = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//       <Touchable leftImage={IMG.back} buttonstyle={styles.buttonstyle2} onPress={()=>navigation.goBack()}/>
//         <View style={styles.textcontainer}>
//           <Text style={styles.text}>Edit Profile</Text>
//         </View>
//       </View>
//       <Text style={styles.text2}>Personal Information</Text>
//       <View style={{alignItems:'center',marginTop:mvs(10)}}>
//       <Image
//           source={IMG.coachprofile}
//           style={styles.image}
//           resizeMode="contain"
//         />
//         </View>
//       </View>
//   )}
//   export default CoachEditProfile;
