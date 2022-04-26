import InnerField from "../innerField";
import React, { useState } from "react";

function InnerCustomDropDown({ value, setInnerValue, nykelordToggler }) {
  const [showBarnets, setShowBarnets] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  const [showFöräldrarnas, setShowFöräldrarnas] = useState(false);

  const click = (e) => {
    if (e === "Barnets utveckling") {
      setShowBarnets(true);
    }
    if (showBarnets === true) {
      setShowBarnets(false);
    }
    if (e === "Familj och miljö") {
      setShowFamily(true);
    }
    if (showFamily === true) {
      setShowFamily(false);
    }
    if (e === "Föräldrarnas förmåga") {
      setShowFöräldrarnas(true);
    }
    if (showFöräldrarnas === true) {
      setShowFöräldrarnas(false);
    }
  };
  return (
    <div className="drop-down-container">
      <button
        key={value.title}
        className={`main-select-klient-fields ${value.id}`}
        onClick={(e) => click(e.currentTarget.innerText)}
      >
        {value.title}
      </button>
      {showBarnets && (
        <InnerField
          showBarnets={showBarnets}
          setInnerValue={setInnerValue}
          nykelordToggler={nykelordToggler}
        />
      )}
      {showFamily && (
        <InnerField
          showFamily={showFamily}
          setInnerValue={setInnerValue}
          nykelordToggler={nykelordToggler}
        />
      )}
      {showFöräldrarnas && (
        <InnerField
          showFöräldrarnas={showFöräldrarnas}
          setInnerValue={setInnerValue}
          nykelordToggler={nykelordToggler}
        />
      )}
    </div>
  );
}

export default InnerCustomDropDown;
