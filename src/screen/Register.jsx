import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Register = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const handlSignUp = async () => {
    const rs = await fetch(
      "https://6562ce5bee04015769a6946f.mockapi.io/account",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#CFE2EE" }}>
      <View style={{ width: "100%" }}>
        <View style={{ marginLeft: 40, marginTop: 80, marginBottom: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 40, marginBottom: 20 }}>
            Sign Up
          </Text>
          <Text>Sign Up a new account for experience !</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <TextInput
              value={data.name}
              onChangeText={(value) => setData({ ...data, name: value })}
              style={{
                width: "300px",
                height: 50,
                marginTop: 30,
                borderWidth: 1,
                borderRadius: 4,
                paddingLeft: 8,
              }}
              placeholder="name"
            ></TextInput>
          </View>
          <View>
            <TextInput
              value={data.username}
              onChangeText={(value) => setData({ ...data, username: value })}
              style={{
                width: "300px",
                height: 50,
                marginTop: 30,
                borderWidth: 1,
                borderRadius: 4,
                paddingLeft: 8,
              }}
              placeholder="user name"
            ></TextInput>
          </View>
          <View>
            <TextInput
              value={data.password}
              onChangeText={(value) => setData({ ...data, password: value })}
              style={{
                width: "300px",
                height: 50,
                marginTop: 30,
                borderWidth: 1,
                borderRadius: 4,
                paddingLeft: 8,
              }}
              placeholder="password"
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "60px",
            borderWidth: 2,
            marginLeft: 16,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../../assets/google.png")}
            style={{ width: 40, height: 40 }}
          ></Image>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
            Register wit account google
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={handlSignUp}
            style={{
              height: 50,
              backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              marginLeft: 120,
              borderRadius: 10,
              width: "40%",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text
              style={{
                color: "blue",
                marginLeft: 170,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
