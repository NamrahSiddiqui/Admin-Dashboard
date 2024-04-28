import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Loader from "./components/loader";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Customer = lazy(() => import("./pages/customer"));
const Transaction = lazy(() => import("./pages/transaction"));



const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/customer" element={<Customer/>}></Route>
        <Route path="/admin/products" element={<Products/>}></Route>
        <Route path="/admin/transaction" element={<Transaction />}></Route>

        {/* Charts */}
        <Route path="/admin/chart/bar" element={<Dashboard />}></Route>
        <Route path="/admin/chart/pie" element={<Customer/>}></Route>
        <Route path="/admin/chart/line" element={<Products/>}></Route>
       

        {/* Apps */}
        <Route path="/admin/app/stopwatch" element={<Dashboard />}></Route>
        <Route path="/admin/app/coupon" element={<Customer/>}></Route>
        <Route path="/admin/app/toss" element={<Products/>}></Route>
      </Routes>
      </Suspense>
     
    </Router>
  );
};

export default App;
