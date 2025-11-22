import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Payment from "./pages/payment";
import ConfirmCharger from "./pages/ConfirmCharger";
import Charging from "./pages/Charging";
import ChargeEnd from "./pages/ChargeEnd";
import Reciept from "./pages/Reciept";

const App = () => {
  return (
    <div className=" mx-auto">
      <Router>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/confirm" element={<ConfirmCharger />} />
            <Route exact path="/charging" element={<Charging />} />
            <Route exact path="/charge-end" element={<ChargeEnd />} />
            <Route exact path="/reciept" element={<Reciept />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

const SidebarLayout = () => (
  <>
      <Outlet />
  </>
);

export default App;
