import React, { useEffect, useState } from "react";
import styles from "./LPIStyle.module.css";

function LinerPageIndex({ currentPageIndex, pageCount }) {
  const [pagesIndecies, setPageIndecies] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < pageCount; i++) {
      temp.push(i + 1);
    }
    console.log(temp);
    setPageIndecies(temp);
  }, [pageCount, currentPageIndex]);

  return (
    <div
      className={styles.LPIContainer}
      style={{ width: `${pageCount * 60}px` }}
    >
      <div className={styles.LPINodes}>
        {pagesIndecies.map((value) => {
          return (
            <div
              className={styles.nodeContainer + (currentPageIndex === value ? "\n" + styles.selected : "")}            >
              {value}
            </div>
          );
        })}
      </div>
      <div className={styles.LPILine}></div>
    </div>
  );
}

export default LinerPageIndex;
