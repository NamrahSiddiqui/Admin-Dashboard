import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Loader from "./components/loader";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Customer = lazy(() => import("./pages/customer"));
const Transaction = lazy(() => import("./pages/transaction"));

const LineCharts = lazy(() => import("./pages/charts/lineCharts"));
const PieCharts = lazy(() => import("./pages/charts/pieCharts"));
const BarCharts = lazy(() => import("./pages/charts/barCharts"));

const NewProduct = lazy(() => import("./pages/Management/newProduct"));
const ProductManagement = lazy(() => import("./pages/Management/productManagement"));
const TransactionManagement = lazy(() => import("./pages/Management/transactionManagement"));


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
        <Route path="/admin/chart/bar" element={<BarCharts/>}></Route>
        <Route path="/admin/chart/pie" element={<PieCharts/>}></Route>
        <Route path="/admin/chart/line" element={<LineCharts/>}></Route>
       

        {/* Apps */}
        <Route path="/admin/app/stopwatch" element={<Dashboard />}></Route>
        <Route path="/admin/app/coupon" element={<Customer/>}></Route>
        <Route path="/admin/app/toss" element={<Products/>}></Route>

        {/*Management */}
        <Route path="/admin/product/new" element={<NewProduct/>}/>
        <Route path="/admin/product/:id" element={<ProductManagement/>}/>
        <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
      </Routes>
      </Suspense>
     
    </Router>
  );
};

export default App;
