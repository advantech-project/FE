import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Navigate to="/building/inha" />} />
          <Route path="/building/:buildingName" element={<Dashboard />} />
        </Routes>
      </div>
      <div className="User">
        <UserList />
      </div>
    </div>
  );
}

export default App;
