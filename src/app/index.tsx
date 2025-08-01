import Loading from "@/src/components/Loading";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Loading variant="spinner" />
    </View>
  );
}
