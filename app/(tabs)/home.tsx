import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Home/Header';
import Slider from '@/components/Home/Slider';
import Category from '@/components/Home/Category';
import BusinessList from '@/components/Home/BusinessList';

export default function HomeScreen() {
  return (
     <ScrollView>
        <Header />
        <Slider />
        <Category />
        <BusinessList />
        <View style={{height:20}}>

        </View>
     </ScrollView>
  );
}
