import CategoryBuisnessCard from "@/components/Home/CategoryBuisnessCard";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

interface CategoryBuisnessCard {
  id: number;
  image: any;
  title: string;
  description: string;
}

export default function BusinessCatgoryList() {
  const navigation = useNavigation();
  const { categoryname } = useLocalSearchParams();
 
    useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: categoryname,
    });
  }, []);

  const CategoryBuisness: CategoryBuisnessCard[] = [
    { id: 1, title: "Fashion", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
    { id: 2, title: "Electronics", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
    { id: 3, title: "Groceries", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
    { id: 4, title: "Home", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
    { id: 5, title: "Home", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
    { id: 6, title: "Home", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={CategoryBuisness}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryBuisnessCard
            buisnessImage={item.image}
            buisnessName={item.title}
            buisnessDescription={item.description}
            buisnessId={item.id}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
