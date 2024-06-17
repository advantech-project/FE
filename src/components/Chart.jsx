import React from "react";
import "./Chart.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Chart() {
  const [iframeSrc, setIframeSrc] = useState("");
  const [iframeSrcStat1, setIframeSrcStat1] = useState("");
  const [iframeSrcStat2, setIframeSrcStat2] = useState("");
  const [iframeSrcStat3, setIframeSrcStat3] = useState("");
  const [iframeSrcStat4, setIframeSrcStat4] = useState("");
  const [iframeSrcStat5, setIframeSrcStat5] = useState("");

  const location = useLocation(); // 현재 위치 정보 가져오기
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const pathname = window.location.pathname.toLowerCase(); // 대소문자 구분을 없애기 위해 모두 소문자로 변환
    const baseUrls = {
      "/5": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/Zo7Kaa8Sz/haitekeu?orgId=5",
      "/4": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/EhhawaUIz/60junyeonginyeomgwan?orgId=5",
      "/2": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/mFOkXa8Iz/5hobuggwan?orgId=5",
      "/1": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/Yi3hXa8Iz/5hodonggwan?orgId=5",
      "/7": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/4yDmra8Iz/2hobuggwan?orgId=5",
      "/13":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/zbZNraUIk/roseukulgwan?orgId=5",
      "/11":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/nXJc9-USk/9hogwan-pyeongsaenggyoyuggwan?orgId=5",
      "/9": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/PQJAr-8Ik/seohogwan?orgId=5",
      "/8": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/uX6B9aUSz/2honamgwan-4hogwan?orgId=5",
      "/10":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/eomXraUIz/inhadeurimsenteo-2-3gwan?orgId=5",
      "/12":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/3v0cC-8Sk/7hogwan-hagsaenghoegwan?orgId=5",
      "/14":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/MynBCa8Sz/gimhyeontaeinhadeurimsenteo?orgId=5",
      "/3": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/PKo_Ca8Iz/5honamgwan?orgId=5",
      "/6": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d/wSFej-UIz/1hogwan-bongwan?orgId=5",
    };
    const baseUrl1 = {
      "/5": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935919814&to=1718540719814&panelId=4",
      "/4": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935699628&to=1718540499628&panelId=6",
      "/2": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935829365&to=1718540629366&panelId=8",
      "/1": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935772937&to=1718540572937&panelId=11",
      "/7": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935973173&to=1718540773173&panelId=16",
      "/13":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936037956&to=1718540837956&panelId=17",
      "/11":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936202271&to=1718541002271&panelId=63",
      "/9": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936121391&to=1718540921391&panelId=18",
      "/8": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936317394&to=1718541117394&panelId=12",
      "/10":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936383824&to=1718541183824&panelId=13",
      "/12":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936498090&to=1718541298090&panelId=14",
      "/14":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936686182&to=1718541486182&panelId=19",
      "/3": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936627003&to=1718541427003&panelId=15",
      "/6": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936556279&to=1718541356280&panelId=20",
    };
    const baseUrl2 = {
      "/5": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935934997&to=1718540734997&panelId=24",
      "/4": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935724837&to=1718540524837&panelId=21",
      "/2": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935842930&to=1718540642930&panelId=23",
      "/1": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935788433&to=1718540588433&panelId=22",
      "/7": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935989500&to=1718540789500&panelId=27",
      "/13":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936054584&to=1718540854584&panelId=26",
      "/11":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936218441&to=1718541018441&panelId=25",
      "/9": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936140764&to=1718540940764&panelId=33",
      "/8": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936341470&to=1718541141470&panelId=29",
      "/10":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936400039&to=1718541200039&panelId=30",
      "/12":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936513629&to=1718541313629&panelId=31",
      "/14":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936702110&to=1718541502110&panelId=34",
      "/3": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936646574&to=1718541446574&panelId=28",
      "/6": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936586255&to=1718541386255&panelId=32",
    };
    const baseUrl3 = {
      "/5": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935947858&to=1718540747858&panelId=38",
      "/4": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935739686&to=1718540539686&panelId=35",
      "/2": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935860583&to=1718540660583&panelId=37",
      "/1": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935801652&to=1718540601652&panelId=36",
      "/7": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936005326&to=1718540805326&panelId=39",
      "/13":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936070565&to=1718540870565&panelId=40",
      "/11":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936235967&to=1718541035967&panelId=41",
      "/9": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936153853&to=1718540953853&panelId=42",
      "/8": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936354154&to=1718541154154&panelId=43",
      "/10":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936411769&to=1718541211769&panelId=44",
      "/12":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936530566&to=1718541330566&panelId=45",
      "/14":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936713543&to=1718541513543&panelId=48",
      "/3": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936661986&to=1718541461986&panelId=47",
      "/6": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936602866&to=1718541402866&panelId=46",
    };
    const baseUrl4 = {
      "/5": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935958789&to=1718540758789&panelId=52",
      "/4": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935757539&to=1718540557539&panelId=49",
      "/2": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935890641&to=1718540690641&panelId=51",
      "/1": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717935817261&to=1718540617261&panelId=50",
      "/7": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936023790&to=1718540823791&panelId=53",
      "/13":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936084735&to=1718540884736&panelId=54",
      "/11":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936248333&to=1718541048334&panelId=55",
      "/9": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936175118&to=1718540975119&panelId=56",
      "/8": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936368994&to=1718541168994&panelId=57",
      "/10":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936432642&to=1718541232642&panelId=58",
      "/12":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936544731&to=1718541344731&panelId=59",
      "/14":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936724495&to=1718541524495&panelId=62",
      "/3": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936674072&to=1718541474073&panelId=61",
      "/6": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936614771&to=1718541414771&panelId=60",
    };
    const baseUrl5 = {
      "/5": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937120309&to=1718541920309&panelId=67",
      "/4": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937043224&to=1718541843224&panelId=66",
      "/2": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937106593&to=1718541906593&panelId=78",
      "/1": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937089407&to=1718541889407&panelId=65",
      "/7": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937140796&to=1718541940796&panelId=68",
      "/13":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937156420&to=1718541956420&panelId=69",
      "/11":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717936248333&to=1718541048334&panelId=55",
      "/9": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937190790&to=1718541990790&panelId=71",
      "/8": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937206114&to=1718542006114&panelId=72",
      "/10":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937226369&to=1718542026369&panelId=73",
      "/12":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937241142&to=1718542041142&panelId=74",
      "/14":
        "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937288802&to=1718542088802&panelId=77",
      "/3": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937272012&to=1718542072012&panelId=76",
      "/6": "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/MD_BWaUIk/test?orgId=5&from=1717937254528&to=1718542054528&panelId=75",
    };
    setIframeSrc(baseUrls[pathname] || "");
    setIframeSrcStat1(baseUrl1[pathname] || "");
    setIframeSrcStat2(baseUrl2[pathname] || "");
    setIframeSrcStat3(baseUrl3[pathname] || "");
    setIframeSrcStat4(baseUrl4[pathname] || "");
    setIframeSrcStat5(baseUrl5[pathname] || "");
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 60000000);
    return () => clearInterval(interval);
  }, []);
  const srcWithTimestamp = (url) => `${url}&timestamp=${timestamp}`;
  return (
    <div className="iframe-container">
      <iframe
        src={srcWithTimestamp(iframeSrc)}
        width="100%"
        height="600"
        id="wise-pass"
      ></iframe>
      <iframe
        src="https://saas-composer-kwonjangwoo-ews.education.wise-paas.com/scene.html?org_id=10&tag=scenes/inha/campus.json&allCacheTime=1715943593356"
        id="digital_tween"
      ></iframe>
      {/* <div className="power">
        <div className="power_usage">
          <iframe
            src={srcWithTimestamp(iframeSrc)}
            id="building_power_usage"
          ></iframe>
        </div>
        <div className="power_usage_stat">
          <div className="stat1">
            <div className="header">60주년 실시간 전력 사용량</div>
            <div className="content">1</div>
          </div>
          <div className="stat2">
            <div className="header">60주년 실시간 전력 사용량</div>
            <div className="content">1</div>
          </div>
          <div className="stat3">
            <div className="header">60주년 실시간 전력 사용량</div>
            <div className="content">3</div>
          </div>
          <div className="stat4">
            <div className="header">60주년 실시간 전력 사용량</div>
            <div className="content">4</div>
          </div>
        </div>
      </div>
      <div className="Temperature">
        <div className="Temperature-chart">
          <iframe
            src={srcWithTimestamp(
              "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/CZHKeT8Iz/graphs?orgId=5&from=1717937711105&to=1718542511106&panelId=18"
            )}
            id="rank_building_cash"
          ></iframe>
        </div>
        <div className="Temperature-stat">
          <iframe
            src={srcWithTimestamp(
              "https://dashboard-kwonjangwoo-ews.education.wise-paas.com/d-solo/CZHKeT8Iz/graphs?orgId=5&from=1717944196888&to=1718548996889&panelId=4"
            )}
            id="temperature_predict"
          ></iframe>
        </div>
        <div className="circle_percent">
          <div className="stat5">
            <iframe
              src={srcWithTimestamp(iframeSrcStat5)}
              id="building_power_usage_stat5"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <iframe
          src={srcWithTimestamp(
            "http://13.214.25.187:3000/d-solo/fezWPasIk/oneulja-geonmulbyeol-jeonryeog-yogeum-raengking?orgId=1&from=1718527446112&to=1718549046112&panelId=2"
          )}
          id="rank_today_building_usage"
        ></iframe>
        
      </div> */}
    </div>
  );
}

export default Chart;
