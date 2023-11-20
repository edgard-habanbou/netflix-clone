import React from "react";
import translate from "../../assets/svgs/translate.svg";

const SelectLanguage = () => {
  return (
    <div className="change-language flex row space-between center">
      <img src={translate} alt="translate" />
      <select
        className="select-language flex row space-between center"
        name="Language"
        id="languageSelector"
      >
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
      </select>
    </div>
  );
};
export default SelectLanguage;
