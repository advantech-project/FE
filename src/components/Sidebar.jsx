import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [buildings, setBuildings] = useState([
    "5",
    "hightech",
    "60",
    "inha",
    "2",
    "4",
    "6",
    "student",
    "9",
    "west",
    "nabil",
    "library",
    "law",
    "kim",
  ]);
  const [selectedBuilding, setSelectedBuilding] = useState("");

  const handleAddBuilding = () => {
    const newBuilding = prompt("새 건물 이름:");
    if (newBuilding && !buildings.includes(newBuilding)) {
      setBuildings([...buildings, newBuilding]);
    }
  };

  const handleSelectChange = (event) => {
    const building = event.target.value;
    setSelectedBuilding(building);
    navigate(`/test-power/${building}`);
  };

  return (
    <div className="sidebar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/Ecoala.png" alt="Logo" />
      </div>
      <div className="buttons">
        <select
          value={selectedBuilding}
          onChange={handleSelectChange}
          className="sidebar-select"
        >
          <option value="" disabled>
            빌딩 선택
          </option>
          {buildings.map((building, index) => (
            <option key={index} value={building}>
              {building}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
