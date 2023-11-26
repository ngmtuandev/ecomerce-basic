import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const HomeProducts = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      await fetch("https://fakestoreapi.com/products", {
        method: "get",
      })
        .then((rs) => rs.json())
        .then((data) => setProducts(data));
    })();
  }, []);
  return (
    <View style={{ width: screen, height: "full", backgroundColor: "white" }}>
      <ScrollView
        style={{
          marginHorizontal: 20,
          flexWrap: "wrap", // Cho phép tự động xuống dòng khi không đủ chỗ
        }}
      >
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          SẢN PHẨM
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 30,
            marginLeft: 20,
          }}
        >
          {products &&
            products.map((item, index) => {
              return (
                <View
                  style={{
                    width: "40%",
                    height: "170px",
                  }}
                  key={index}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("detail-products", {
                        product: item,
                      })
                    }
                  >
                    <Image
                      style={{ width: "100%", height: "100px" }}
                      source={{ uri: item?.image }}
                    ></Image>
                    <Text>{item?.title}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item?.price}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeProducts;
