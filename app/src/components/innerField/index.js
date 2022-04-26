import {
  innerFieldFöräldrarnas,
  innerFieldBarnets,
  innerFieldFamilj,
} from "../../config/data";

const InnerField = ({
  showBarnets,
  showFamily,
  showFöräldrarnas,
  setInnerValue,
  nykelordToggler,
}) => {
  return (
    <>
      <div className="inner-container">
        {showBarnets
          ? innerFieldBarnets.map((el) => (
              <div
                className="inner-field"
                onClick={(e) => {
                  setInnerValue(e.currentTarget.innerText);
                  nykelordToggler();
                }}
              >
                {el}
              </div>
            ))
          : null}
      </div>
      <div className="inner-container">
        {showFamily
          ? innerFieldFamilj.map((el) => (
              <div
                className="inner-field"
                onClick={(e) => {
                  setInnerValue(e.currentTarget.innerText);
                  nykelordToggler();
                }}
              >
                {el}
              </div>
            ))
          : null}
      </div>
      <div className="inner-container">
        {showFöräldrarnas
          ? innerFieldFöräldrarnas.map((el) => (
              <div
                className="inner-field"
                onClick={(e) => {
                  setInnerValue(e.currentTarget.innerText);
                  nykelordToggler();
                }}
              >
                {el}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default InnerField;
