import {useState, useEffect} from "react";

const Display = ({setDisplayItems, displayItems}) => {

  // ロード時に保存されてるものを表示
  useEffect(() => {
    const initDisplayItems = [];
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const title = localStorage.key(i);
      const value = localStorage.getItem(title);

      initDisplayItems.push(
        <div key={title} className="output__item">
          <h2>{title}</h2>
          <p>{value}</p>
        </div>
      );
    }
    setDisplayItems(initDisplayItems);
  }, []);
  if (localStorage.length !== 0) {
    return (
      <>
        {displayItems}
      </>
    );
  }
};

export default Display;