import {useState} from "react";
import inputStyles from '../css/Input.module.css';

const Input = ({setCreateContent, setDisplayItems}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputId, setInputId] = useState(localStorage.length);

  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setCreateContent((prevcreateContent) => [...prevcreateContent, {text: inputValue}].reverse());
      setInputId((previnputId) => previnputId + 1);
      localStorage.setItem(inputId, inputValue);
      setInputValue('');
    }
  };

  const handleReset = (e) => {
    // setInputTitleValue('');
    setInputValue('');
    localStorage.clear();
    setInputId(0);
    setDisplayItems([]);
    setCreateContent([]);
  };
  
  return (
    <>
      <div className={inputStyles.form}>
        <input
          type="text"
          id="user-text"
          className="input-text"
          value={inputValue}
          onChange={handleTextChange}
        />
      </div>
      <div className={inputStyles.btn__wrapper}>
        <button className="submit-btn" onClick={handleSubmit}>新規作成</button>
        <button className="reset-btn" onClick={handleReset}>リセット</button>
      </div>
    </>
  );
};

export default Input;
