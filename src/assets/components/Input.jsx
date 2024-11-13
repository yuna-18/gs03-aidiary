import {useState} from "react";

const Input = ({setCreateContent}) => {
  const [inputTextValue, setInputTextValue] = useState('');
  const [inputTitleValue, setInputTitleValue] = useState('');

  const handleTitleChange = (e) => {
    setInputTitleValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTitleValue && inputTextValue) {
      setCreateContent((prevcreateContent) => [...prevcreateContent, {title: inputTitleValue, text: inputTextValue}]);
      localStorage.setItem(inputTitleValue, inputTextValue);
      setInputTitleValue('');
      setInputTextValue('');
    }
  };

  const handleReset = () => {
    setInputTitleValue('');
    setInputTextValue('');
    localStorage.clear();
    setCreateContent([]);
  };

  return (
    <>
      <div className="form">
        <input
          type="text"
          id="user-title"
          className="input-text"
          value={inputTitleValue}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          id="user-text"
          className="input-text"
          value={inputTextValue}
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
