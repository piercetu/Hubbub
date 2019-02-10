import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBffeXjAkn4TcySFXSnPjqF2tuE78riFOo",
  authDomain: "hubbub-f2dcf.firebaseapp.com",
  databaseURL: "https://hubbub-f2dcf.firebaseio.com",
  projectId: "hubbub-f2dcf",
  storageBucket: "hubbub-f2dcf.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
