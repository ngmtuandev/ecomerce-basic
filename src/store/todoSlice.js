import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    listTodo: [],
  },
  reducers: {
    addTask(state, action) {
      state.listTodo.push(action.payload);
    },
    deleteTask(state, action) {
      return {
        ...state,
        listTodo: state.listTodo.filter((item) => item?.id !== action.payload),
      };
    },
    editTask(state, action) {
      return {
        ...state,
        listTodo: state.listTodo.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTask, deleteTask, editTask } = actions;
export default reducer;
