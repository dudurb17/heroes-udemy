import { ActionButton } from "@/src/components/ActionButton/ActionButton";
import { Movie } from "@/src/types/movies";
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function CardItem({
  item,
  onPress,
}: {
  item: Movie;
  onPress: () => void;
}) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{item.nome}</Text>
        <Image source={{ uri: item.foto }} style={styles.image} />
        <ActionButton
          onPress={onPress}
          style={styles.button}
          label="Ver mais"
          variant="primary"
        />
      </View>
    </View>
  );
}
