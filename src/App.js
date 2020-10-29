/*
 * @Author: your name
 * @Date: 2020-10-28 16:54:39
 * @LastEditTime: 2020-10-28 18:07:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \temperature-control\src\App.js
 */
import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColor, setTemperatureColor] = useState("hot");
  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
  };
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);

    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
