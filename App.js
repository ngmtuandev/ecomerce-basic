import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import HomeTodo from "./src/screen/HomeTodo";
import { Provider } from "react-redux";
import store from "./src/store/store";
import HomeProducts from "./src/screen/HomeProducts";
import DetailProduct from "./src/screen/DetailProduct";
import Cart from "./src/screen/Cart";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="register">
          <Stack.Screen
            options={{ headerShown: false }}
            name="register"
            component={Register}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="home-todo"
            component={HomeTodo}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="home-products"
            component={HomeProducts}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="detail-products"
            component={DetailProduct}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="cart"
            component={Cart}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
