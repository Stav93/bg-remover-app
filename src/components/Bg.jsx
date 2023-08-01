import React from "react";
import "./Bg.css";

function Bg() {
  return (
    <div className="bg">
      <header className="header">
        <span className="header-text">העלאת תמונה להסרת הרקע</span>
        <button className="header-btn">העלאת תמונה</button>
        <span className="header-subtext">פורמטים נתמכים: png, jpeg</span>
      </header>
    </div>
  );
}

export default Bg;
