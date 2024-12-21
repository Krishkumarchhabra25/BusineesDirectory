import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PopularBuisnessCard from "./PopularBuinessCard";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

interface BuisnessCard{
    id:number,
    image:any,
    title:string,
    description:string
}

export default function BusinessList(){
    const Buisness: BuisnessCard[] = [
      { id: 1, title: "Fashion", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
      { id: 2, title: "Electronics", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
      { id: 3, title: "Groceries", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
      { id: 4, title: "Home", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
      { id: 5, title: "Home", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
      { id: 6, title: "Home", image: require("../../assets/images/banner.jpg"), description: "this is for the description that i want to show " },
      ];

  
    return (
          <View style={styles.container}>
                 <View style={styles.header}>
                  <Text style={styles.title}>Popular Buisness</Text>
                  <TouchableOpacity>
                    <Text style={styles.viewAll}>View All</Text>
                  </TouchableOpacity>
                  </View>
                  <FlatList
                            data={Buisness}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <PopularBuisnessCard
                                buisnessImage={item.image}
                                buisnessName={item.title}
                                buisnessDescription={item.description}
                        
                              />
                              
                            )}
                            showsHorizontalScrollIndicator={false}
                          />
                </View>
    )
}

 const styles = StyleSheet.create({
    container: {
      paddingLeft: 20,
      marginTop: 20,

    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginRight: 20, // Add spacing for "View All" alignment
    },
    title: {
      fontFamily: "outfit-bold",
      fontSize: 20,
    },
    viewAll: {
      fontFamily: "outfit-medium",
      fontSize: 14,
      color: "#007BFF", // Blue color for "View All"
    },
  });