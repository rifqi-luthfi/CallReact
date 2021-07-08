import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './component/Button';
import GettingCall from './component/GettingCall';
import Video from './component/Video';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button iconName="video" backgroundColor="grey" /> */}
      <GettingCall />
      {/* <Video /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
