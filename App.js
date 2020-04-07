import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import WebView from 'react-native-webview'
const App = () => {
  return (
    <WebView
        source={{uri: 'https://pembekulis.com/'}}
        // style={{marginTop: 20}}
      />
  );
};


export default App;
