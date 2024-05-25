import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedBuilding, setSelectedBuilding] = useState("");

  const handleSelectChange = (event) => {
    const building = event.target.value;
    setSelectedBuilding(building);
    if (building) {
      navigate(`/building/${building}`);
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
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
          <option value="5">5호관</option>
          <option value="hightech">하이테크</option>
          <option value="60">60주년기념관</option>
          <option value="inha">본관</option>
          <option value="2">2호관</option>
          <option value="4">4호관</option>
          <option value="6">6호관</option>
          <option value="bio">비룡플라자</option>
          <option value="9">9호관</option>
          <option value="seoul">서호관</option>
          <option value="nari">나빌레관</option>
          <option value="library">정석학술정보관</option>
          <option value="roth">로스쿨관</option>
          <option value="kim">김현태인하드림센터</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
