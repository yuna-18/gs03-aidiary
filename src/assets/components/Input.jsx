import {useState} from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import inputStyles from '../css/Input.module.css';

const Input = ({setCreateContent, setDisplayItems, setInputValue, inputValue, setReply, setLoading, setError}) => {
  const [inputId, setInputId] = useState(localStorage.length);
  

  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue) {
      // 入力されたテキストを保存
      setCreateContent((prevCreateContent) => [...prevCreateContent, { text: inputValue }].reverse());
      setInputId((prevInputId) => prevInputId + 1);
      localStorage.setItem(inputId, inputValue);
      setInputValue('');

      // AIの返信を取得
      setLoading(true);
      setError(null);

      try {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `日本語で、以下の文章に対して30文字程度で相槌を打ってください。${inputValue}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        setReply(text);
      } catch (err) {
        setError("テキスト生成に失敗しました");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleReset = (e) => {
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
