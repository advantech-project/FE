import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [buildings, setBuildings] = useState([
    { label: "5호동관", value: 1 },
    { label: "5호북관", value: 2 },
    { label: "5호남관", value: 3 },
    { label: "60주년기념관", value: 4 },
    { label: "하이테크", value: 5 },
    { label: "본관", value: 6 },
    { label: "2호북관", value: 7 },
    { label: "2호남관/4호관", value: 8 },
    { label: "서호관", value: 9 },
    { label: "인하드림센터 2/3관", value: 10 },
    { label: "9호관", value: 11 },
    { label: "7호관", value: 12 },
    { label: "로스쿨관", value: 13 },
    { label: "김현태인하드림센터", value: 14 },
  ]);
  const [selectedBuilding, setSelectedBuilding] = useState("");

  const handleSelectChange = (event) => {
    const buildingValue = parseInt(event.target.value, 10);
    const building = buildings.find((b) => b.value === buildingValue);
    setSelectedBuilding(buildingValue);
    console.log(building.value);
    navigate(`/${building.value}`);
  };

  return (
    <div className="sidebar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/ecoalala.png" alt="Logo" />
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
            <option key={index} value={building.value}>
              {building.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
