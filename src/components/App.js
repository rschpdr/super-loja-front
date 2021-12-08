import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Navbar from "./Navbar";

// Produtos
import ProductCreate from "../pages/product/ProductCreate";
import ProductList from "../pages/product/ProductList";
import ProductDetail from "../pages/product/ProductDetail";
import ProductDelete from "../pages/product/ProductDelete";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <div>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/product/create"
              element={<ProtectedRoute component={ProductCreate} />}
            />
            <Route
              path="/product/list"
              element={<ProtectedRoute component={ProductList} />}
            />
            <Route
              path="/product/:id"
              element={<ProtectedRoute component={ProductDetail} />}
            />
            <Route
              path="/product/delete/:id"
              element={<ProtectedRoute component={ProductDelete} />}
            />
          </Routes>
        </div>
      </div>
    </AuthContextComponent>
  );
}

export default App;
