import React from "react";
import { Image, View } from "react-native";
import { ActionButton } from "../../../../../components/ActionButton";
import Text from "../../../../../components/Text";
import { Movie } from "../../../../../types/movies";
import styles from "./styles";

export default function CardItem({
  item,
  onPress,
}: {
  item: Movie;
  onPress: () => void;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title} variant="title">
        {item.nome}
      </Text>
      <Image source={{ uri: item.foto }} style={styles.image} />
      <ActionButton
        onPress={onPress}
        style={styles.button}
        label="Ver mais"
        variant="primary"
      />
    </View>
  );
}
