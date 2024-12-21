import { Colors } from "@/constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerRow}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>{user?.fullName}</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: Colors.PRIMARY,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap:10
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  welcomeText: {
    color: "#fff",
  },
  userName: {
    fontSize: 19,
    fontFamily: "outfit-medium",
    color: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1, // Ensures the input takes up the remaining space
    fontSize: 16,
    color: "#000",
  },
});
