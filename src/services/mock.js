// src/services/mock.js
const powerData = {
  5: {
    currentPowerUsage: "350 kWh",
    expectedPowerUsage: "500 kWh",
  },
  hightech: {
    currentPowerUsage: "420 kWh",
    expectedPowerUsage: "550 kWh",
  },
  60: {
    currentPowerUsage: "380 kWh",
    expectedPowerUsage: "530 kWh",
  },
  inha: {
    currentPowerUsage: "400 kWh",
    expectedPowerUsage: "600 kWh",
  },
  2: {
    currentPowerUsage: "300 kWh",
    expectedPowerUsage: "450 kWh",
  },
  4: {
    currentPowerUsage: "410 kWh",
    expectedPowerUsage: "560 kWh",
  },
  6: {
    currentPowerUsage: "330 kWh",
    expectedPowerUsage: "480 kWh",
  },
  student: {
    currentPowerUsage: "350 kWh",
    expectedPowerUsage: "520 kWh",
  },
  9: {
    currentPowerUsage: "365 kWh",
    expectedPowerUsage: "515 kWh",
  },
  west: {
    currentPowerUsage: "375 kWh",
    expectedPowerUsage: "530 kWh",
  },
  nabil: {
    currentPowerUsage: "345 kWh",
    expectedPowerUsage: "505 kWh",
  },
  library: {
    currentPowerUsage: "425 kWh",
    expectedPowerUsage: "575 kWh",
  },
  law: {
    currentPowerUsage: "310 kWh",
    expectedPowerUsage: "460 kWh",
  },
  kim: {
    currentPowerUsage: "320 kWh",
    expectedPowerUsage: "470 kWh",
  },
};

export const mockFetchPower = async (buildingID) => {
  // 모의 지연 시간 추가
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Promise((resolve, reject) => {
    const data = powerData[buildingID];
    if (data) {
      resolve(data);
    } else {
      reject(new Error("해당 건물 ID에 대한 데이터가 없습니다."));
    }
  });
};

export default mockFetchPower;
