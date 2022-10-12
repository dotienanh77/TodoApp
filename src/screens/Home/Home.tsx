import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Welcome to wild rift</Text>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {flex: 1},
});
