import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

export default function App() {
  const handleBtn = () => alert('Hello World')

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World</Text>
      <Text style={styles.subHeading}>Welcome to my App</Text>

      <Image source={require('./imgs/logo.png')} style={{width: 350, height:300}} />

      <Button onPress={handleBtn} title="Press Me" />

      <TouchableHighlight onPress={handleBtn}>
        <View>
          <Text>Press Me!</Text>
        </View>
      </TouchableHighlight>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 32,
    color:'red'
  },

  subHeading: {
    marginTop: 10,
    fontSize: 20,
    color: '#00f'
  }
});
