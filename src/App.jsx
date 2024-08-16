import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from './pages/Counter';
import Header from "./components/Header";
import Crud from "./pages/Crud";
import { useSelector } from "react-redux";

function App() {
  //* useSelector ile abone yapıyoruz storeları;
  const {isDarkTheme} = useSelector(store => store.counterReducer);

  return (
    <>
      <BrowserRouter>
      <div
      style={{height: "100vh"}}
      className={isDarkTheme ? "bg-dark text-white" : "bg-white text-dark"}>
        <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
