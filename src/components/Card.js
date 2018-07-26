import React from "react";
import { Text, View } from "react-native";

const Card = props => {
  const { height, bgColor, title, width, flex, flexShrink, flexBasis } = props;
  const styles = {
    mainContainer: {
      height,
      width,
      flex,
      flexShrink,
      flexBasis,
      backgroundColor: bgColor,
      margin: 10
    }
  };

  return (
    <View style={styles.mainContainer}>
      {title}
      {props.children}
    </View>
  );
};

export default Card;
