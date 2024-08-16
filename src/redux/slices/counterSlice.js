/*
    !createSlice:
        * Hem reducer'ı hem reducer'ın aksiyonları createSlice metodu ile tek seferde tanımlayacağız

    todo slice oluşturma: 
        * 1.Adım: import { createSlice } from "@reduxjs/toolkit"; import edilir
        * 2.Adım:
        * - name: slice ismi >> string olacak.
        * - initialState: başlangıç state'dir
*/
 
import { createSlice } from "@reduxjs/toolkit";

//*! ARTTIRMA İŞLEMİ
const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, isDarkTheme: true },
    reducers: {
        increase: (state) => {
            state.count++;
        },
        //*! AZALTMA İŞLEMİ
        decrease: (state) =>{
            state.count--;
        },
        //*! SIFIRLAMA İŞLEMİ
        setCount:(state,action) =>{
            
            state.count = action.payload
        },
        toggleTheme:(state)=>{
            // alert("Çalıştı")
            state.isDarkTheme = !state.isDarkTheme;
        }
    },
});
//* Slice'ın oluşturduğu reducer fonksiyonunu store'a tanıtmak için export ettik
export default counterSlice.reducer;

export const { increase, decrease, setCount, toggleTheme } = counterSlice.actions;