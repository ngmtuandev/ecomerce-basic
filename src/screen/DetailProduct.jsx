import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice";
const DetailProduct = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { product } = route.params;
  const handleAddCart = () => {
    dispatch(addCart(product));
  };
  return (
    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 23 }}>
          {product?.title}
        </Text>
        <Text style={{ fontWeight: "bold" }}>{product?.category}</Text>
        <Text>{product?.rating?.count} đánh giá</Text>
      </View>
      <View>
        <Image
          source={{ uri: product?.image }}
          style={{ width: 350, height: 250 }}
        ></Image>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "red",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          Price : {product?.price} $
        </Text>
        <Text>{product?.description}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity onPress={handleAddCart}>
          <View
            style={{
              width: 150,
              height: 50,
              borderRadius: 3,
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Add Cart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("cart")}>
          <View
            style={{
              width: 150,
              height: 50,
              borderRadius: 3,
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>My cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailProduct;
