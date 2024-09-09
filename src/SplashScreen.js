import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CustomSplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      onFinish();
    }, 5000); 

    return () => clearTimeout(time);
  }, []);

  return (
    <LinearGradient
      colors={['#585E97', '#656B9E', '#757AA7']}
      style={styles.container}
    >
      <Text style={styles.text}>Student ERP</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 3,
    borderColor: '#7579A7',
    padding: 10,
  },
});

export default CustomSplashScreen;
