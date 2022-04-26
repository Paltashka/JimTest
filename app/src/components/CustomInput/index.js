const CustomInput = ({ title }) => {
  return (
    <>
      <label className="main-container-text-field">{title}</label>
      <input className="input-field" type="text" maxLength="200" />
    </>
  );
};
export default CustomInput;
