import { ActionButton } from "@/src/components/ActionButton/ActionButton";
import BottomSheet from "@/src/components/BottomSheet";
import { Movie } from "@/src/types/movies";
import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  poster: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  synopsis: {
    fontSize: 16,
    lineHeight: 22,
    color: "#444",
    marginBottom: 24,
  },
});
