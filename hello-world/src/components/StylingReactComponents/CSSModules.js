import React from "react";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function CSSModules() {
  return (
    <div>
      <h1>CSS Modules Styling</h1>
      <h3 className="error">Error</h3>
      <h3 className={styles.success}>Success</h3>
    </div>
  );
}

export default CSSModules;
