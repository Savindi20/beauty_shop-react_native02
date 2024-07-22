import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const OnBoardingScreen = () => (
  <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2}>
      <View style={[styles.child]}>
        <Text style={styles.text}>1</Text>
        <Image source={require('../assets/screen1.png')}></Image>
      </View>
      <View style={[styles.child]}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.child]}>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.child]}>
        <Text style={styles.text}>4</Text>
      </View>
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1},
  child: { width, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.1)' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default OnBoardingScreen;