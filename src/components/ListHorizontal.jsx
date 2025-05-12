import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, fontType } from "../assets/themes";

const ListHorizontal = ({ data, selected, onPress }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selected === item && { backgroundColor: colors.primary }
          ]}
          onPress={() => onPress(item)}
        >
          <Text
            style={[
              styles.text,
              selected === item && { color: "white" }
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    color: colors.textPrimary,
    fontFamily: fontType["Pjs-Regular"],
    fontSize: 14,
  },
});

export default ListHorizontal;