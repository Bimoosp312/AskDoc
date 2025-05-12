import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fontType } from "../assets/themes";

const ItemSmall = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        {item.specialty && <Text style={styles.specialty}>{item.specialty}</Text>}
        <Text style={styles.price}>
          {item.price}
          {item.oldPrice && <Text style={styles.oldPrice}> {item.oldPrice}</Text>}
        </Text>
        {item.rating && (
          <Text style={styles.rating}>👍 {item.rating} - {item.reviews} ulasan</Text>
        )}
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Mulai Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: fontType["Pjs-Bold"],
    color: colors.textPrimary,
    fontSize: 16,
  },
  specialty: {
    fontFamily: fontType["Pjs-Regular"],
    color: colors.textSecondary,
    fontSize: 14,
  },
  price: {
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.price,
    fontSize: 14,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: colors.oldPrice,
    fontSize: 12,
  },
  rating: {
    fontFamily: fontType["Pjs-Regular"],
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  chatButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  chatText: {
    color: "white",
    fontFamily: fontType["Pjs-SemiBold"],
  },
});

export default ItemSmall;