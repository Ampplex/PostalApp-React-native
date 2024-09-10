import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Onboarding3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Onboarding3</Text>
    </View>
  )
}

export default Onboarding3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      }
})