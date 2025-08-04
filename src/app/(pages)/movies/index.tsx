import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import api from "../../../services/api";
import { Movie } from "../../../types/movies";
import BottomSheetMovies from "./components/BottomSheetMovies";
import CardItem from "./components/CardItem.tsx";

export default function MoviesPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  useEffect(() => {
    api.get("/r-api/?api=filmes").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <View>
      {__DEV__ && <Link href="/storybook">Storybook</Link>}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <CardItem
            item={item}
            onPress={() => {
              setSelectedMovie(item);
              setModalVisible(!modalVisible);
            }}
          />
        )}
      />
      <BottomSheetMovies
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        movie={selectedMovie}
      />
    </View>
  );
}
