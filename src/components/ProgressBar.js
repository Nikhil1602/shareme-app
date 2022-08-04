import React from "react";
import tailwind from "../assets/tailwind";

const ProgressBar = ({ show, showProgress }) => {
  const { progress_bar, uploading, progress, line } = tailwind.main_body;

  return showProgress !== "0%" ? (
    <div style={{ width: showProgress }} className={progress_bar(show)}>
      <div className={uploading}>Uploading...</div>
      <div className={progress}>
        <span>{showProgress}</span>
        <div className={line}></div>
      </div>
    </div>
  ) : null;
};

export default ProgressBar;
