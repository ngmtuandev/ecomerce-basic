import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
const Login = ({ navigation }) => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [allUser, setAllUser] = useState([]);
  const [er, setEr] = useState(false);
  useEffect(() => {
    fetch("https://6562ce5bee04015769a6946f.mockapi.io/account", {
      method: "get",
    })
      .then((rs) => rs.json())
      .then((data) => setAllUser(data));
  }, []);
  const handlSignIn = async () => {
    const check = allUser.find((item) => item.username === data.username);
    if (check) {
      navigation.navigate("home-todo");
    } else {
      setEr(true);
    }
  };
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#CFE2EE" }}>
      <View style={{ width: "100%" }}>
        <View style={{ marginLeft: 40, marginTop: 80, marginBottom: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 40, marginBottom: 20 }}>
            Sign In
          </Text>
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
        {er && (
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              marginLeft: 40,
              marginTop: 20,
            }}
          >
            Sai rồi !!!
          </Text>
        )}
        <View style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={handlSignIn}
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
            <Text style={{ color: "white", fontSize: 20 }}>SignIn</Text>
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
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
