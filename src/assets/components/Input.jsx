import {useState} from "react";

const Input = ({setCreateContent, setDisplayItems}) => {
  const [inputValue, setInputValue] = useState('');

  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setCreateContent((prevcreateContent) => [...prevcreateContent, {text: inputValue}].reverse());
      const id = generateId();
      localStorage.setItem(id, inputValue);
      setInputValue('');
    }
  };

  const handleReset = (e) => {
    // setInputTitleValue('');
    setInputValue('');
    localStorage.clear();
    setDisplayItems([]);
    setCreateContent([]);
  };
  
  const generateId = () => {
    return Math.floor(Math.random() * 100);
  }

  return (
    <>
      <div className="form">
        <input
          type="text"
          id="user-text"
          className="input-text"
          value={inputValue}
          onChange={handleTextChange}
        />
      </div>
      <div className="btn__wrapper">
        <button className="submit-btn" onClick={handleSubmit}>新規</button>
        <button className="reset-btn" onClick={handleReset}>リセット</button>
      </div>
    </>
  );
};

export default Input;
