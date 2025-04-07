import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item = ({item}) => {
  return (
    <View style={styles.container}>
        <Text>
            {item.text}
        </Text>
    </View>

  )
}

export default Item

const styles = StyleSheet.create({
    container:{
      
    }
})