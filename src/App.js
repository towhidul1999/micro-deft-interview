import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowAllProduct from "./ShowAllProduct";
import LimitResult from "./LimitResult";
import AddProduct from "./AddProduct";
import SearchResult from "./SearchResult";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/allProduct" element={<ShowAllProduct />} />
          <Route path="/limitProduct" element={<LimitResult />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/searchProduct" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
