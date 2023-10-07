import React from "react";
import styles from "./BottomBarStyle.module.css";
import LinerPageIndex from "../LinearPageIndex/LinerPageIndex";

function BottomBar({ currentPageIndex, pageCount, currentButton }) {
  return (
    <div className={styles.BottomBarContainer}>
      <div style={{ height: "100%", width: "100%", marginInline: "25px", display: 'flex', flexDirection: 'row' }}>
        <LinerPageIndex
          currentPageIndex={currentPageIndex}
          pageCount={pageCount}
        />

        <div style={{marginLeft:'25px', height: '100%', display: 'flex', alignItems:'center'}}>
          {currentButton}
        </div>
        
      </div>
    </div>
  );
}

export default BottomBar;
