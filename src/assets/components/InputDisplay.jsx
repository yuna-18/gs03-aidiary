import {useEffect} from "react";
import OutputStyles from '../css/Output.module.css';

const InputDisplay = ({ setDisplayItems, displayItems }) => {
  // ロード時にローカルストレージに保存された要素を読み込み、逆順にセット
  useEffect(() => {
    const initDisplayItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);
      const value = localStorage.getItem(id);

      initDisplayItems.push({ id, value });
    }
    // IDが大きい順にソート（降順）
    initDisplayItems.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    setDisplayItems(initDisplayItems);
  }, [setDisplayItems]);

  // displayItemsが空の場合は何も表示しない
  if (displayItems.length === 0) {
    return null;
  }

  return (
    <>
      {displayItems.map((item) => (
        <div key={item.id} className={OutputStyles.output__item}>
          <p>{item.value}</p>
        </div>
      ))}
    </>
  );
};

export default InputDisplay;
