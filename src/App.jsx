import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import UserList from "./components/UserList";
import PowerTest from "./pages/PowerTest";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Navigate to="/building/inha" />} />
          <Route path="/building/:buildingName" element={<Dashboard />} />
          <Route path="/test-power" element={<PowerTest />} />
        </Routes>
      </div>
      <div className="User">
        <UserList />
      </div>
    </div>
  );
}

export default App;
