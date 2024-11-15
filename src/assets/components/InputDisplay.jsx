import { useEffect } from "react";
import OutputStyles from '../css/Output.module.css';

const InputDisplay = ({ setDisplayItems, displayItems, loading, error }) => {
  useEffect(() => {
    const initDisplayItems = [];

    // ローカルストレージの内容を逆順に取得して initDisplayItems に格納
    for (let i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(id));
      initDisplayItems.push({ value });
    }
    // IDが大きい順にソート（降順）
    // IDの降順にソート
    setDisplayItems(initDisplayItems);
  }, []);

  if (displayItems.length === 0) {
    return null;
  }

  return (
    <>
      {displayItems.map((item) => (
        <div key={item.value.id} className={OutputStyles.output__item}>
          <p>{item.value.text}</p>
          {error ? (
              <p>{error}</p>
            ) : (
              <p>GeminiAI:<br />{item.value.reply}</p>
            )}
        </div>
      ))}
    </>
  );
};

export default InputDisplay;
