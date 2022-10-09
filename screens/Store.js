import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Body from '../components/Body.js'

const Store = () => {
  return (
    <Body title='Market Place'>
        <View>
          <Image style={styles.calathea} source={require('../assets/calathea.png')} />
          <Text>New in</Text>
          <Text>Calathea Beauty Star Large 1m Plant</Text>
        </View>
        <View>
          <Text>Just Dropped</Text>
        </View>
    </Body>
  )
}

export default Store

const styles = StyleSheet.create({
  calathea: {
  }
})