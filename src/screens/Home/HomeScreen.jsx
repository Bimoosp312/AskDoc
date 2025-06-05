import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { MessageText } from "iconsax-react-native";
import { colors, fontType } from "../../assets/themes";
import { doctors, categories } from "../../data";
import CategoryList from "./CategoryList";
import DoctorCard from "./DoctorCard";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(text.toLowerCase()) ||
      doc.specialty?.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDoctors(filtered);
    setSelectedCategory("Semua");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "Semua") {
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors(doctors.filter((doc) => doc.specialty === category));
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>22.16</Text>
        <TouchableOpacity style={styles.askDocButton}>
          <Text style={styles.askDocText}>AskDoc</Text>
        </TouchableOpacity>
        <MessageText size={24} color="white" variant="Outline" />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama dokter atau spesialisasi"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Category List */}
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* Doctor List */}
      <ScrollView style={styles.doctorList}>
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 15,
  },
  time: {
    color: "white",
    fontSize: 16,
    fontFamily: fontType["Pjs-Medium"],
  },
  askDocButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
  },
  askDocText: {
    color: colors.primary,
    fontWeight: "bold",
    fontFamily: fontType["Pjs-SemiBold"],
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "white",
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
  },
  doctorList: {
    padding: 10,
  },
});
