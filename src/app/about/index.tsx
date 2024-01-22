import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View>
      <Text>About</Text>
      <Link href="/">Home</Link>
    </View>
  );
};

export default About;
