import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Body from '../components/Body.js'

const Wallet = () => {
  return (
    <Body title='My Wallet'>
      <View style={styles.account}>
        <Text style={styles.cronos}>My CRONOS Account</Text>
        <View style={styles.value}>
            <Text style={styles.num}>12.789 CRO</Text>
        </View>
      </View>
      <Text class={styles.seeds}>100 Seeds = 1 CRO</Text>

      <View style={styles.titles}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>My Garden</Text>
        <Image style={styles.onecolumn} source={require('../assets/random-succulent.png')}/>
      </View>
      <View>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Today's Growth</Text>
        </View>
        <View>
          <View style={styles.plants}>
            <View style={[styles.plant, {backgroundColor: '#A58772'}]}>
              <Image source={require('../assets/tree-vector.png')}/>
            </View>
            <View style={styles.plantdesc}>
              <Text style={[styles.plant, {fontWeight: 'bold',}]}>5 Seeds harvested</Text>
              <Text>Oct 09, 11:42</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.plants}>
            <View style={[styles.plant, {backgroundColor: '#A58772'}]}>
              <Image source={require('../assets/tree-vector.png')}/>
            </View>
            <View style={styles.plantdesc}>
              <Text>11 Seeds harvested</Text>
              <Text>Oct 09, 09:14</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text>October 8</Text>
      </View>

      <View>
        <View style={styles.plants}>
          <View style={[styles.plant, {backgroundColor: '#A58772'}]}>
            <Image source={require('../assets/desert-group-icon.png')}/>
          </View>
          <View style={styles.plantdesc}>
            <Text>100 CRO donated</Text>
            <Text>Oct 09, 11:42</Text>
          </View>
        </View>
      </View>

    </Body>
  )
}

export default Wallet

const styles = StyleSheet.create({
  account: {
    backgroundColor: '#061222',
    color: '#EBEBEB',
    fontSize:14,
    borderRadius: 10,
    padding: 20,

  },
  num: {
    fontSize: 24,
    color: 'white'
  },
  seeds: {
    fontSize: 14,
    color: '#535252',
    marginBottom: 10,
  },
  cronos:{
    marginBottom:15,
    color: 'white'
  },
  titles: {
    marginTop:10,
  },
  plant: {
    borderRadius: 20,
    width: 70,
    height: 70,
    display: 'flex',
    alignItems: 'center'
  },
  plantdesc: {
    paddingLeft: 20,
    width: '80%'
  },
  plant: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    display: 'flex',
    flexDirection: 'row',
    color: '#EBEBEB',
  }, 
  plants: {
    display: 'flex',
    flexDirection: 'row'
  }
})