import React from "react";
import "./Chart.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Chart() {
  const [iframeSrc, setIframeSrc] = useState("");
  const location = useLocation(); // 현재 위치 정보 가져오기
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const pathname = window.location.pathname.toLowerCase(); // 대소문자 구분을 없애기 위해 모두 소문자로 변환
    const baseUrls = {
      "/5": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842754932&to=1718447554932&panelId=28",
      "/4": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842818428&to=1718447618429&panelId=30",
      "/2": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842877228&to=1718447677228&panelId=14",
      "/1": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842902859&to=1718447702859&panelId=26",
      "/7": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842931422&to=1718447731422&panelId=24",
      "/13":
        "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842953341&to=1718447753341&panelId=2",
      "/11":
        "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842972922&to=1718447772922&panelId=22",
      "/9": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717842999615&to=1718447799615&panelId=6",
      "/8": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717843041951&to=1718447841951&panelId=20",
      "/10":
        "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717843076184&to=1718447876184&panelId=4",
      "/12":
        "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717843092992&to=1718447892992&panelId=18",
      "/14":
        "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717843118481&to=1718447918481&panelId=16",
      "/3": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717843135390&to=1718447935390&panelId=12",
      "/6": "http://13.214.25.187:3000/d-solo/kNsSBayIk/geonmulbyeol-sayongryangjohoe?orgId=1&from=1717843166229&to=1718447966229&panelId=10",
    };
    setIframeSrc(baseUrls[pathname] || "");
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  const srcWithTimestamp = (url) => `${url}&timestamp=${timestamp}`;
  return (
    <div className="iframe-container">
      <div id="left-column" className="column">
        <iframe
          src={srcWithTimestamp(iframeSrc)}
          id="building_power_usage"
        ></iframe>
        <iframe
          src={srcWithTimestamp(
            "http://13.214.25.187:3000/d-solo/fezWPasIk/oneulja-geonmulbyeol-jeonryeog-yogeum-raengking?orgId=1&from=1718494701450&to=1718516301450&panelId=2"
          )}
          id="rank_building_cash"
        ></iframe>
        <iframe
          src={srcWithTimestamp(
            "http://13.214.25.187:3000/d-solo/tQksOF8Iz/building-ranking?orgId=1&from=1717911658222&to=1718516458222&panelId=8"
          )}
          id="rank_today_building_usage"
        ></iframe>
        <iframe
          src="https://saas-composer-kwonjangwoo-ews.education.wise-paas.com/scene.html?org_id=10&tag=scenes/inha/campus.json&allCacheTime=1715943593356"
          id="digital_tween"
        ></iframe>
      </div>
      <div id="right-column" className="column">
        <iframe
          src={srcWithTimestamp(
            "http://13.214.25.187:3000/d-solo/0UcqL-yIz/geonmulbyeol-nujeog-sayongryang-raengking?orgId=1&from=1715924257173&to=1718516257173&panelId=2"
          )}
          id="rank_accumulate_building_power"
        ></iframe>
        <iframe
          src={srcWithTimestamp(
            "http://13.214.25.187:3000/d-solo/SFNMa-yIk/cong-sayongryang-vs-yeceugryang?orgId=1&from=1717911526780&to=1718516326780&panelId=2"
          )}
          id="total_usage_predict_usage"
        ></iframe>
        <iframe
          src={srcWithTimestamp(
            "http://13.214.25.187:3000/d-solo/tQksOF8Iz/building-ranking?orgId=1&from=1717911676012&to=1718516476012&panelId=6"
          )}
          id="circle"
        ></iframe>
        <iframe
          src="https://saas-composer-kwonjangwoo-ews.education.wise-paas.com/scene.html?org_id=10&tag=scenes/inha/campus.json&allCacheTime=1715943593356"
          id="cctv"
        ></iframe>
      </div>
    </div>
  );
}

export default Chart;
