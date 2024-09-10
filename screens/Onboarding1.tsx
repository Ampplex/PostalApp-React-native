import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const Onboarding1 = ({ navigation }) => {
  const { height } = useMemo(() => Dimensions.get('window'), []);
  const [isNavigating, setIsNavigating] = useState(false); // State to prevent multiple presses

  const navigateToOnboarding2 = useCallback(() => {
    if (!isNavigating) {
      setIsNavigating(true); // Disable further button presses
      navigation.replace('Onboarding2'); // Navigate immediately
    }
  }, [navigation, isNavigating]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/delivery_boy.json')}
        autoPlay
        loop
        style={styles.animation}
      />

      <View style={[styles.textContainer, { top: height * 0.62 }]}>
        <Text style={styles.mainText}>Begin your postal adventure</Text>
        <Text style={styles.subText}>with us</Text>
      </View>

      <TouchableOpacity style={styles.getStarted} onPress={navigateToOnboarding2} disabled={isNavigating}>
        <Text style={styles.getStartedText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animation: {
    width: 300,
    height: 300,
    marginTop: -150,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  mainText: {
    fontFamily: 'sans-serif-medium',
    fontSize: 22,
  },
  subText: {
    fontFamily: 'sans-serif-medium',
    fontSize: 22,
    paddingTop: 10,
  },
  getStarted: {
    backgroundColor: '#1230AE',
    width: 170,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
  },
  getStartedText: {
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    fontSize: 18,
    fontWeight: 'bold',
  },
});