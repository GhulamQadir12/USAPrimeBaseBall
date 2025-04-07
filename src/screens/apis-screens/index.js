import {View, Text, FlatList, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import axios from 'axios';
import getDataFromApi, { PostLoginData } from '../../services/api/api-compo';
import styles from './style';
import { URLS } from '../../services/api/api-urls';
import { rand_IP } from '../../services/api/api-urls';
import { LoginAuth } from '../../services/api/auth';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text>hlo</Text>
    <Text style={styles.title}>{title.Year}</Text>
    <Text style={styles.title}>{title.Population}</Text>
    <Text style={styles.title}>{title.Nation}</Text>
  </View>
);

const ApiDataScreen = () => {

const [login_data,setLoginData]=React.useState({
  client_id:'7',
  client_secret:'9jfIyHZJzV9usVZXtvzd8702IGvwh4fcllyCWXx1',
  grant_type:'password',
  username:'agenta',
  password:'12345678'
});

  const [mode,setMode]=React.useState('');
  console.log('Mode :',mode)
  const [img, setImg] = React.useState();
//   const url = 'https://api.ipify.org?format=json'
  const ip = '191.165.150.100'
  const name = 'Qadir'
  const gender = 'Qadir'
//   const url = `https://ipinfo.io/${ip}/geo`
//   const url = `https://api.genderize.io?name=${gender}`
//   const url = `https://api.nationalize.io/?name=${name}`
  const [data1, setData1] = React.useState();
// console.log('uri',`${URLS.rand_url}${ip}.${auth.ran_IP}`)
// console.log('uri', `${URLS.gender_url}${name}`)
console.log('post url :',`${URLS.login_url}`,login_data);
  React.useEffect(() => {
    const Func = async () => {
    //   const unidata = await getDataFromApi(URLS.coindesk_IP);
    //   const unidata = await getDataFromApi(URLS.image_url);
      // const unidata = await getDataFromApi(`${URLS.rand_url}${ip}${URLS.auth.ran_IP}`);
    //   const unidata = await getDataFromApi(URLS.pop_data_base_url);
    //   const unidata = await getDataFromApi(`${URLS.gender_url}${gender}`);
      // const unidata = await getDataFromApi(`${URLS.nationalize_url}${name}`);
    //   console.log('uni data', unidata);
      setImg(unidata);

      //   console.log('fetch from api :',unidata[0])
      //   console.log('web_pages :',unidata[0].web_pages[0])

      //   console.log('bpi :',unidata.bpi)
      //   console.log('EUR :',unidata.bpi.EUR)
      //   console.log('bpi :',unidata.time)

      //   console.log('fetch from api :',data1.data[0])
      //   console.log('fetch from api :',data1.data[0].Year)

    };
    Func();
  }, []);
  console.log('img', img);
  console.log('-----------------')
//   console.log('data1.readme',img.readme)

  return (
    <View style={{backgroundColor: mode == 'dark' ? 'black' : '#fff',flex:1}}>
      {/* <Text>index hlo</Text> */}
      {/* <FlatList 
        data={data1}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={(item)=>item.Year}
      /> */}
      {/* <Image
        style={styles.logo}
        source={{
          uri: img,
        }}
        resizeMode='stretch'
      /> */}
      {/* <TouchableOpacity onPress={()=>{
         Linking.openURL(img.readme);
      }}>
        <Text>move to the web</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>{setMode('dark')}}><Text style={{color: mode == 'dark' ? '#fff' : 'black'}}>Dark Mode</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{setMode('light')}}><Text style={{color: mode == 'dark' ? '#fff' : 'black'}}>Light Mode</Text></TouchableOpacity>
      <TouchableOpacity onPress={async ()=>{
        try{
        await LoginAuth(`${URLS.login_url}`,login_data)
        }catch(error){
          console.log('Error in APi Screen :',error)
        }
      }}><Text>Send Data</Text></TouchableOpacity>
    </View>
  );
};

export default ApiDataScreen;
