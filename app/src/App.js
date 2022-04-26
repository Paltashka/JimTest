import React, { useState } from "react";
import leftArrow from "./assets/left-arrow.png";
import CustomInput from "./components/CustomInput";
import CustomTextArea from "./components/CustomTextArea";
import CustomButton from "./components/CustomButton";
import CustomDropDownButton from "./components/CustomDropDownButton";
import { buttonData } from "./config/data";
import "./App.css";
import "./styles/global.css";

function App() {
  const [buttonToggler, setButtonToggler] = useState("");
  const [bakdatera, setBakdatera] = useState(false);

  const bakdateraToggler = () => {
    setBakdatera(!bakdatera);
  };

  return (
    <div className="main-wrapper">
      <header className="main-header">
        <button className="header-arrow-container">
          <img src={leftArrow} alt="left-arrow" />
        </button>
        <div className="header-title-container">
          <button>RENSA</button>
          <button>SPARA</button>
        </div>
      </header>

      <div className="main">
        <div className="main-social-dokumentation-container">
          <div className="main-social-dokumentation-field">
            Skriv social dokumentation
          </div>
        </div>
        <div className="main-container">
          <div className="main-container-input-container">
            <CustomInput title="Sammanfatta händelsen" />
          </div>
          <div className="main-text-area-container">
            <CustomTextArea />
          </div>
          <div className="main-select-button-container">
            <label className="main-select-button-field">Enhet</label>
            <div className="main-select-button-wrapper">
              {buttonData.map((el) => (
                <CustomButton
                  key={Date.now + el.title}
                  title={el.title}
                  className={
                    buttonToggler === el.title ? " active-button" : null
                  }
                  onClick={() => setButtonToggler(el.title)}
                />
              ))}
            </div>
          </div>
          <div className="main-select-wrapper">
            <div className="main-select-drop-down-container">
              <CustomDropDownButton
                label="Klient"
                downLabel="Vaij forst enhet"
              />
            </div>
            <div className="main-select-drop-down-container">
              <CustomDropDownButton label="Nykelord" />
            </div>
          </div>
          <div className="main-select-bakdatera-container">
            <input
              className="main-select-bakdatera-checkbox"
              onClick={() => bakdateraToggler}
              type="checkbox"
            />
            <div className="main-select-bakdatera-field">Bakdatera</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
