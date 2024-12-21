import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PopularBuisnessCardProps {
  buisnessImage: any;
  buisnessName: string;
  buisnessDescription: string;
}

export default function PopularBuisnessCard({
  buisnessImage,
  buisnessName,
  buisnessDescription,
}: PopularBuisnessCardProps) {
  return (
    <View style={styles.card}>
      <Image source={buisnessImage} style={styles.image} />
      <Text style={styles.title}>{buisnessName}</Text>
      <Text style={styles.description}>{buisnessDescription}</Text>
      <View style={styles.footer}>
        <View style={styles.ratingContainer}>
          <Image
            source={require("../../assets/images/star.png")}
            style={styles.starIcon}
          />
          <Text style={styles.ratingText}>4.7</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{buisnessName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 300,
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    padding: 10,
  },
  image: {
    width: 280,
    height: 140,
    borderRadius: 10,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 16,
    marginTop: 10,
    color: "#333",
  },
  description: {
    fontFamily: "outfit-regular",
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  ratingText: {
    fontFamily: "outfit-medium",
    fontSize: 14,
    color: "#333",
  },
  badge: {
    backgroundColor: "violet",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeText: {
    fontFamily: "outfit-bold",
    fontSize: 12,
    color: "#fff",
  },
});
