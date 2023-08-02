import React from "react";
import { useState } from "react";
import "./Bg.css";

function Bg() {
  const [displayNoBgTab, setdisplayNoBgTab] = useState(false);

  const changeTab = () => {
    if (displayNoBgTab === true) {
      setdisplayNoBgTab(false);
    } else {
      setdisplayNoBgTab(true);
    }
  };

  return (
    <div className="bg">
      <header className="header">
        <span className="header-text">העלאת תמונה להסרת הרקע</span>
        <button className="header-btn">העלאת תמונה</button>
        <span className="header-subtext">פורמטים נתמכים: png, jpeg</span>
      </header>

      <div className="main-div">
        <div className="left-div">
          <div className="main-div-tabs-header">
            <span onClick={changeTab} className="no-bg">
              {" "}
              הסרת הרקע
            </span>
            <span onClick={changeTab} className="original">
              {" "}
              התמונה המקורית{" "}
            </span>
          </div>

          {displayNoBgTab === true ? (
            <div className="original-tab">original-tab</div>
          ) : (
            <div className="no-bg-tab">no-bg-tab</div>
          )}
        </div>

        <div className="right-div">
          <div className="right-div-middle-div">
            <div className="right-div-top">
              <div className="right-div-top-text"> ללא תשלום</div>
              <div className="right-div-top-subtext">
                {" "}
                612x408 תצוגה מקדימה של תמונה{" "}
              </div>
              <button className="right-div-top-btn"> הורדה</button>
              <div className="right-div-top-sub-sub-text">
                {" "}
                איכות טובה - עד 0.25 מגה פיקסל{" "}
              </div>
            </div>

            <div className="right-div-bottom">
              <div className="right-div-bottom-text">Pro</div>
              <div className="right-div-bottom-subtext">
                {" "}
                תמונה מלאה 1280x1920
              </div>
              <button className="right-div-top-btn">הורדה באיכות HD</button>
              <div className="right-div-top-sub-sub-text">
                {" "}
                האיכות הטובה ביותר - עד 25 מגה פיקסל
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bg;
