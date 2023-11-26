import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cart &&
          cart.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  width: "90%",
                  height: "60px",
                  backgroundColor: "gray",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: 3,
                  paddingRight: 3,
                  marginTop: 10,
                }}
              >
                <Image
                  source={{ uri: item?.image }}
                  style={{ width: 50, height: 50, borderRadius: 4 }}
                ></Image>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {item?.title}
                </Text>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {item?.price}
                </Text>
              </View>
            );
          })}
        <View>
          <Text style={{ fontSize: 30, marginTop: 20 }}>
            Tổng tiền :{" "}
            {cart?.reduce((valueAccumulator, curentValueInArr) => {
              return valueAccumulator + curentValueInArr.price;
            }, 0)}
          </Text>
        </View>
        <TouchableOpacity>
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
            <Text style={{ color: "white", fontSize: 18 }}>Đặt hàng</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
