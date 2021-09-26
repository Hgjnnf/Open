import React from "react";
import "./HomeCheckbox.css";

const HomeCheckbox = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={checked} name="remember" className="checker" onChange={handleChange}/> 
      <span>Remember Me</span>
    </label>
  );
};

export default HomeCheckbox;
