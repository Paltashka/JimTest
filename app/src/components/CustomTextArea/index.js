import React, { useEffect, useRef, useState } from "react";
import bold from "../../assets/bold-text.png";
import italicFont from "../../assets/italic.png";
import list from "../../assets/list.png";

const CustomTextArea = () => {
  const maxLength = 1500;
  const textRef = useRef();
  const [styleItalic, setStyleItalic] = useState(false);
  const [styleBold, setStyleBold] = useState(false);
  const [sizeArea, setSizeArea] = useState(0 + "");

  const showRefContent = () => {
    setSizeArea(textRef.current.value.length);
  };

  useEffect(() => {
    styleItalic
      ? (textRef.current.style.fontStyle = "italic")
      : (textRef.current.style.fontStyle = "normal");
    styleBold
      ? (textRef.current.style.fontWeight = "bold")
      : (textRef.current.style.fontWeight = "normal");
  }, [styleItalic, styleBold]);

  const hendleItalicText = () => {
    setStyleItalic((prev) => !prev);
  };
  const hendleBoltText = () => {
    setStyleBold((prev) => !prev);
  };
  const hendleStyleList = () => {
    textRef.current.value = textRef.current.value + `\n - `;
  };

  return (
    <>
      <div className="main-custom-area-container">
        <label className="main-text-area-title-field">Detalijer</label>
        <div className="main-custom-button">
          <button onClick={hendleBoltText}>
            <img src={bold} alt="bold" />
          </button>
          <button onClick={hendleItalicText}>
            <img src={italicFont} alt="italicFont" />
          </button>
          <button onClick={hendleStyleList}>
            <img src={list} alt="list" />
          </button>
        </div>
      </div>
      <div></div>
      <textarea
        maxLength={maxLength}
        onChange={showRefContent}
        ref={textRef}
        className="main-custom-textarea-field"
      ></textarea>
      <div className="main-custom-info-container">
        <label className="main-custom-undertitle-field">
          Journal: Social dokumentation
        </label>
        <label className="main-custom-counter-field">
          {sizeArea}/ {maxLength}
        </label>
      </div>
    </>
  );
};
export default CustomTextArea;
