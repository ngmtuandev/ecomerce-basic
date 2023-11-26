import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "../store/todoSlice";
const HomeTodo = ({ navigation }) => {
  const dispatch = useDispatch();
  const { listTodo } = useSelector((state) => state.todo);
  const [newTask, setNewTask] = useState("");
  const [taskEdit, setTaskEdit] = useState();
  const handleAddNewTask = () => {
    dispatch(addTask({ task: newTask, id: Math.random() }));
    setNewTask("");
  };

  const handleDelete = (item) => {
    dispatch(deleteTask(item));
  };

  const handleEdit = (item) => {
    setNewTask(item.task);
    setTaskEdit(item);
  };

  const handleEditTask = () => {
    dispatch(editTask({ task: newTask, id: taskEdit.id }));
  };

  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginLeft: 12,
            marginTop: 20,
          }}
        >
          <TextInput
            value={newTask}
            onChangeText={(value) => setNewTask(value)}
            style={{
              width: "250px",
              height: "40px",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
            placeholder="new todo you"
          ></TextInput>
          <TouchableOpacity
            onPress={handleAddNewTask}
            style={{
              width: "50px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleEditTask}
            style={{
              width: "50px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("home-products")}>
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 10,
              color: "red",
            }}
          >
            You want shopping
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        {listTodo?.map((item) => {
          return (
            <View
              style={{
                width: "90%",
                height: "100px",
                paddingTop: 10,
                paddingLeft: 10,
                backgroundColor: "gray",
                borderRadius: 10,
                marginBottom: 4,
              }}
            >
              <View>
                <Text style={{ color: "white" }}>{item?.task}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
                <TouchableOpacity onPress={() => handleEdit(item)}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item?.id)}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HomeTodo;
