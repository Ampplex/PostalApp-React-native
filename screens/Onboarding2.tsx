import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Onboarding2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{
        top: -100
      }}>
        <LottieView
          source={require("../assets/animations/modes.json")}
          autoPlay
          loop
          style={{
            width: Dimensions.get("window").width,
            height: 400,
          }}
        />
      </View>

      <Text
        style={{
          fontFamily: "sans-serif-medium",
          fontSize: 19,
          padding: 15,
          top: Dimensions.get("window").height * 0.56,
          position: "absolute"
        }}>Streamlined postal services with AI selecting the most efficient and cost-effective transport for fast delivery</Text>
    
    <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("Onboarding3")}>
        <MaterialIcons name="navigate-next" size={40} color="#fff" />
    </TouchableOpacity>

    </View>
  )
}

export default Onboarding2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  nextBtn: {
    backgroundColor: "#1230AE",
    width: 60,
    height: 60,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: Dimensions.get("window").height * 0.8,
    right: 40
  }
})