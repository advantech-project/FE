import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import UserList from "./components/UserList";
import PowerTest from "./components/PowerTest";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Navigate to="/test-power/inha" />} />
          <Route path="/test-power/:buildingID" element={<Dashboard />} />
        </Routes>
      </div>
      <div className="User">
        <UserList />
      </div>
    </div>
  );
}

export default App;
