import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CategoryItem from "./CategoryItem";
import { useRouter } from "expo-router";

// Define the Category interface
interface Category {
  id: number;
  name: string;
  image: any; // Replace with ImageSourcePropType for stricter typing
}

// Define the props for CategoryItem
interface CategoryItemProps {
  imageName: any; // Replace with ImageSourcePropType if needed
  categoryName: string;
  onCategoryPress: (category: Category) => void; // Expect a single Category
}

// Modify the CategoryItem component accordingly
export default function Category() {
  const categories: Category[] = [
    { id: 1, name: "Fashion", image: require("../../assets/images/category1 (1).png") },
    { id: 2, name: "Electronics", image: require("../../assets/images/catgory2.png") },
    { id: 3, name: "Groceries", image: require("../../assets/images/category3.png") },
    { id: 4, name: "Home", image: require("../../assets/images/category4.png") },
    { id: 5, name: "Home", image: require("../../assets/images/category5.png") },
    { id: 6, name: "Home", image: require("../../assets/images/category6.png") },
  ];

  const router = useRouter()
  const handleCategoryPress = (category: Category) => {
    router.push(`/businesslist/${category.name}`);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryItem
            imageName={item.image}
            categoryName={item.name}
            onCategoryPress={() => handleCategoryPress(item)} // Pass the specific category
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
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
    marginRight: 20,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  viewAll: {
    fontFamily: "outfit-medium",
    fontSize: 14,
    color: "#007BFF",
  },
});
