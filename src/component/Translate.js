// Google translate api key = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Hindi", value: "hi" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Afrikaans", value: "af" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

const Translate=()=>{
  const [language, setLanguage]=useState(options[0]);
  const [text, setText]=useState('');
  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label className="ui olive label"><h5>Enter Text</h5></label>
          <input value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
      </div>
      <Dropdown 
        label={'Select a Language'}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;