import React from "react";
import { View, Image, Text, StyleSheet, ImageSourcePropType, TouchableOpacity } from "react-native";

interface CategoryItemProps {
  imageName: ImageSourcePropType;
  categoryName: string;
  onCategoryPress:()=> void
}

export default function CategoryItem({ imageName, categoryName ,onCategoryPress  }: CategoryItemProps) {
  return (
    <TouchableOpacity onPress={onCategoryPress}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageName} style={styles.image} />
      </View>
      <Text style={styles.text}>{categoryName}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 15,
  },
  imageContainer: {
    backgroundColor: "#d3d3d3", // Gray background
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
