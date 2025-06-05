import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors, fontType } from "../../assets/themes";

const DoctorCard = ({ doctor }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: doctor.image }} style={styles.profileImage} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        {doctor.specialty && <Text style={styles.specialty}>{doctor.specialty}</Text>}
        <Text style={styles.price}>
          {doctor.price}{" "}
          {doctor.oldPrice && <Text style={styles.oldPrice}>{doctor.oldPrice}</Text>}
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
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
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
    fontSize: 16,
    fontFamily: fontType["Pjs-Bold"],
    color: colors.textPrimary,
  },
  specialty: {
    fontSize: 14,
    color: colors.textSecondary,
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
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: fontType["Pjs-Medium"],
    marginRight: 5,
  },
  reviews: {
    fontSize: 12,
    color: colors.textSecondary,
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
    fontFamily: fontType["Pjs-Bold"],
  },
});
