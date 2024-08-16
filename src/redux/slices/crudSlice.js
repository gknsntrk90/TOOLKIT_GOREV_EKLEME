import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      title: "Navbar yapılacak",
      author: "Ali",
      assigned_to: "Veli",
      end_date: "2024-07-06",
      id: "1",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //* Oluşturduğumuz taska id ekle
      action.payload.id = v4();
      //* Gelen veriyi task disizisine ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      //* 1.yöntem:filter
      //   const filtred = state.tasks.filter((i) => i.id !== action.payload);
      //   state.tasks = filtred;
      //* 2.yöntem:
      //* Silinecek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);
      //* elemanı sil
      state.tasks.splice(index, 2);
    },

    editTask: (state, action) => {
      //* 1.yöntem:map
      // const updated = state.tasks.map((i) =>
      //   i.id === action.payload.id ? action.payload : i
      // );
      // state.tasks = updated;
      //* 2.yöntem:
      //* Düzenlenecek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);
      //* Elemanı günceller

      state.tasks.splice(index, 1, action.payload);
    },
  },
});
//* store a tanıtmak için reducer ı export et
export default crudSlice.reducer;

export const { addTask, deleteTask, editTask } = crudSlice.actions;