import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/"  element={<Products/>}/>
            <Route path="/:id" element={<SingleProduct/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export default AllRoutes