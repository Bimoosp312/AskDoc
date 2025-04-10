import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { MessageText, ProfileCircle, MessageEdit } from "iconsax-react-native";
import { colors, fontType } from "./src/assets/themes"; // Menggunakan index.js untuk import warna & font

const doctors = [
  {
    id: 1,
    name: "Chat Dokter Umum",
    price: "Rp14.900",
    image: "https://randomuser.me/api/portraits/men/32.jpg", 
    status: "Chat Sekarang",
  },
  {
    id: 2,
    name: "dr. Tanti Mariana, SpOG",
    price: "Rp49.000",
    oldPrice: "Rp79.000",
    specialty: "Spesialis Kandungan",
    rating: "97%",
    reviews: "8,2rb",
    image: "https://randomuser.me/api/portraits/women/65.jpg", 
    status: "Online",
  },
  {
    id: 3,
    name: "dr. I Kadek Serisana Wasita, Sp.A",
    price: "Rp49.000",
    oldPrice: "Rp79.000",
    specialty: "Spesialis Anak",
    image: "https://randomuser.me/api/portraits/men/45.jpg", 
    status: "Online",
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>22.16</Text>
        <TouchableOpacity style={styles.askDocButton}>
          <Text style={styles.askDocText}>AskDoc</Text>
        </TouchableOpacity>
        <MessageText size={24} color="white" variant="Outline" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Cari nama dokter atau spesialisasi" />
      </View>

      {/* Categories */}
<View style={styles.categoryContainer}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {["Umum", "Anak", "Kandungan", "Kulit", "Gigi", "Psikolog"].map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryButton}>
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>


      {/* Doctors List */}
      <ScrollView style={styles.doctorList}>
        {doctors.map((doctor) => (
          <View key={doctor.id} style={styles.card}>
            <Image source={{ uri: doctor.image }} style={styles.profileImage} />
            <View style={styles.info}>
              <Text style={styles.name}>{doctor.name}</Text>
              {doctor.specialty && <Text style={styles.specialty}>{doctor.specialty}</Text>}
              <Text style={styles.price}>
                {doctor.price} {doctor.oldPrice && <Text style={styles.oldPrice}>{doctor.oldPrice}</Text>}
              </Text>
              {doctor.rating && (
                <View style={styles.ratingContainer}>
                  <Text style={styles.rating}>👍 {doctor.rating}</Text>
                  <Text style={styles.reviews}>{doctor.reviews} ulasan</Text>
                </View>
              )}
            </View>
            <TouchableOpacity style={styles.chatButton}>
              <Text style={styles.chatText}>Mulai Chat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
        <MessageText size={24} color={colors.primary} variant="Outline" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
        <ProfileCircle size={24} color="gray" variant="Outline" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
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
  categoryContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  
  categoryButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  
  categoryText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontFamily: fontType["Pjs-Regular"],
  },
  
  searchInput: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
  },
  doctorList: {
    padding: 10,
  },
  card: {
    backgroundColor: colors.cardBackground,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.textPrimary,
    fontFamily: fontType["Pjs-Bold"],
  },
  specialty: {
    color: colors.textSecondary,
    fontSize: 14,
    fontFamily: fontType["Pjs-Regular"],
  },
  price: {
    fontSize: 14,
    color: colors.price,
    fontFamily: fontType["Pjs-SemiBold"],
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: colors.oldPrice,
    fontSize: 12,
    fontFamily: fontType["Pjs-Light"],
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    color: colors.primary,
    fontSize: 14,
    marginRight: 5,
    fontFamily: fontType["Pjs-Medium"],
  },
  reviews: {
    color: colors.textSecondary,
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
  },
  chatButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  chatText: {
    color: colors.cardBackground,
    fontWeight: "bold",
    fontFamily: fontType["Pjs-Bold"],
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: colors.cardBackground,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
    color: colors.textPrimary,
    fontFamily: fontType["Pjs-Regular"],
  },
});