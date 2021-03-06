import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Animated, {
  interpolateNode,
  Extrapolate,
} from "react-native-reanimated";
export default function AppOnboardSlideDot({ index, currentIndex }) {
  const opacity = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.35, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ scale }] }]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2CB9B0",
    margin: 4,
  },
});
