import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Body from "../components/Body.js";

const Store = () => {
  return (
    <ScrollView>
      <Body title="Marketplace">
          <View style={styles.parent}>
            <Image
              style={{ width: "100%", borderRadius: 30 }}
              source={require("../assets/plant-calathea.png")}
            />
            <View style={styles.calatheatext}>
              <Text style={[styles.white, { fontSize: 15 }]}>New in</Text>
              <Text
                style={[
                  styles.white,
                  { fontSize: 20, fontWeight: "bold", width: "80%" },
                ]}
              >
                Calathea Beauty Star Large 1m Plant
              </Text>
              <Text style={[styles.white, { fontSize: 18 }]}>8888 CRO</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title2}>Just Dropped</Text>
            <ScrollView horizontal={true}>
              <View style={styles.card}>
                <Image source={require("../assets/grass.png")} />
                <Text style={styles.plantname}>Grass</Text>
                <Text>Lorem Ipsum</Text>
                <View style={styles.inline}>
                  <Text>1000</Text>
                  <Image style={styles.coin} ource={require("../assets/coin.png")} />
                </View>
              </View>
              <View style={styles.card}>
                <Image source={require("../assets/red-cactus.png")} />
                <Text style={styles.plantname}>Red Cactus</Text>
                <Text>Lorem Ipsum</Text>
                <View style={styles.inline}>
                  <Text>2500</Text>
                  <Image style={styles.coin} source={require("../assets/coin.png")} />
                </View>
              </View>
              <View style={styles.card}>
                <Image source={require("../assets/grass.png")} />
                <Text style={styles.plantname}>Grass</Text>
                <Text>Lorem Ipsum</Text>
                <View style={styles.inline}>
                  <Text>1000</Text>
                  <Image style={styles.coin} source={require("../assets/coin.png")} />
                </View>
              </View>
            </ScrollView>
          </View>
      </Body>
    </ScrollView>
  );
};

export default Store;

const styles = StyleSheet.create({
  parent: {
    position: "relative",
  },
  calatheatext: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  white: {
    color: "white",
    marginTop: 10,
  },
  title2: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: "600",
  },
  card: {
    marginRight: 20,
  },
  plantname: {
    paddingTop: 5,
    fontWeight: "bold",
  },
  inline: {
    display: 'flex',
    flexDirection: 'row'
  },
  coin: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginLeft: 4
  }
});
