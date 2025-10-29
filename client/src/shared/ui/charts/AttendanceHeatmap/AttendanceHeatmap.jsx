import React from "react";
import styles from "./Heatmap.module.css";

const AttendanceHeatmap = ({ data=[...'OOOOO'.split('')] }) => {
  const monthName = new Date().toLocaleString("ru-RU", { month: "long" });

  const colorMap = {
    V: "#00e6bfff", // ядовито-зелёный
    X: "#9c29d1ff", // розовый
    O: "#bebebeff", // серый
  };

  const legend = [
    { label: "Посетил", color: colorMap.V },
    { label: "Отсутствовал", color: colorMap.X }
  ];


  return (
   
    <div className={styles.container}>
      <h2 className={styles.title}>{monthName}</h2>

      <div className={styles.grid}>
        {data.map((val, i) => (
          <div
            key={i}
            className={styles.square}
            style={{ backgroundColor: colorMap[val] || "#333" }}
          />
          
        ))}
      </div>

      <div className={styles.legend}>
        {legend.map((item) => (
          <div key={item.label} className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: item.color }}
            />
            <span className={styles.legendText}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceHeatmap;
