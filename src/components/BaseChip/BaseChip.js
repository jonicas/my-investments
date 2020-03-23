import React from "react";

import styles from "./BaseChip.module.css";

const BaseChip = ({ children, onClick, active, rounded }) => (
  <button
    className={`${styles.BaseChip} ${active ? styles.active : ""} ${rounded &&
      styles.rounded}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BaseChip;
