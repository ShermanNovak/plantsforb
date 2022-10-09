import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Body from '../components/Body.js'

const Wallet = () => {
  return (
    <Body title='My Wallet'>
      <View style={styles.account}>
        <Text>My CRONOS Account</Text>
        <Text class={styles.num}>12.789</Text>
        <Text>CRO</Text>
      </View>
      <Text class={styles.seeds}>100 Seeds = 1 CRO</Text>

      <View style={styles.titles}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>My Garden</Text>
        <Image style={styles.onecolumn} source={require('../assets/random-succulent.png')}/>
      </View>

      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Today's Growth</Text>
      </View>

    </Body>
  )
}

export default Wallet

const styles = StyleSheet.create({
  account: {
    backgroundColor: '#061222',
    color: '#fff',
    fontSize:14,
  },
  num: {
    fontSize: 24,
  },
  seeds: {
    fontSize: 14,
    color: '#535252',
  },
})