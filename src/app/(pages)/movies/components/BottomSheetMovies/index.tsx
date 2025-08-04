import React from "react";
import { Image, ScrollView } from "react-native";
import { ActionButton } from "../../../../../components/ActionButton";
import BottomSheet from "../../../../../components/BottomSheet";
import Text from "../../../../../components/Text";
import { Movie } from "../../../../../types/movies";
import styles from "./styles";

export default function BottomSheetMovies({
  modalVisible,
  setModalVisible,
  movie,
}: {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  movie?: Movie;
}) {
  if (!movie) return null;

  return (
    <BottomSheet visible={modalVisible} onClose={() => setModalVisible(false)}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: movie.foto }}
          style={styles.poster}
          resizeMode="cover"
        />
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.synopsis}>{movie.sinopse}</Text>

        <ActionButton
          label="Fechar"
          variant="secondary"
          onPress={() => setModalVisible(false)}
        />
      </ScrollView>
    </BottomSheet>
  );
}
