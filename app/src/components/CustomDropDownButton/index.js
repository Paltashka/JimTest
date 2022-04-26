import React, { useState } from "react";
import downArrow from "../../assets/down-arrow.png";
import InnerCustomDropDown from "../InnerCustomDropDown";
import { klientDropDown, nykelordDropDown } from "../../config/data";

export default function CustomDropDownButton({ label, downLabel }) {
  const [showContent, setShowContent] = useState({
    klient: false,
    nykelord: false,
  });
  const [innerValue, setInnerValue] = useState("");

  const contentToggler = () => {
    setShowContent(
      label === "Klient"
        ? (prevState) => ({ ...prevState, klient: !prevState.klient })
        : (prevState) => ({ ...prevState, nykelord: !prevState.nykelord })
    );
  };

  const nykelordToggler = () => {
    setShowContent((prev) => ({
      ...prev,
      nykelord: false,
    }));
  };

  const showKlientContent = (el) => {
    setInnerValue(el.title);
    setShowContent((prev) => ({
      ...prev,
      klient: false,
    }));
  };
  return (
    <div className="main-select-container">
      <button className="main-select-inner-value">
        {innerValue}
        <label className="main-select-drop-down-title">{label}</label>
      </button>
      <button
        onClick={() => contentToggler()}
        className="main-select-drop-down-arrow"
      >
        <img src={downArrow} alt="down-arrow" />
      </button>

      <div className="main-select-klient-container">
        {(showContent.klient &&
          klientDropDown.map((el) => (
            <button
              key={Math.random() * 100}
              onClick={() => showKlientContent(el)}
              className={`main-select-klient-fields ${el.id}`}
            >
              {el.title}
            </button>
          ))) ||
          (showContent.nykelord &&
            nykelordDropDown.map((value) => (
              <InnerCustomDropDown
                key={Math.random() * 100}
                value={value}
                nykelordToggler={nykelordToggler}
                setInnerValue={setInnerValue}
              />
            )))}
      </div>
      <label className="main-select-drop-down-down-label-field">
        {downLabel}
      </label>
    </div>
  );
}
