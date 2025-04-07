import React, {useState, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const PopUp = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    }, 2000);
  }, []);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Logout</Text>
            <Text style={styles.modalText2}>
              Are you sure to logout your account from Evo Love?
            </Text>
            <View style={styles.pressableContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose2]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{...styles.textStyle,color:colors.red}}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {setModalVisible(!modalVisible)
                  navigation.navigate('Login2')}}>
                <Text style={styles.textStyle}>Log out</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    alignSelf:'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '40%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: colors.red,
  },
  buttonClose2: {
    backgroundColor: colors.light,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: mvs(18),
    color: colors.black,
    fontFamily:'Nunito-Bold'

  },
  modalText2: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: mvs(14),
    color: colors.black,
    fontFamily:'Nunito-Bold'

  },
  pressableContainer: {
    flexDirection: 'row',
    gap: mvs(10),
  },
});

export default PopUp;
