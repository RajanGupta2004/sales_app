import { Provider } from "react-redux";
import RootNavigation from "./navigation/RootNavigation";
import { store } from "./store/store";
import { Text, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />;
      {/* <View>
        <Text>Hello</Text>
      </View> */}
    </Provider>
  );
}
