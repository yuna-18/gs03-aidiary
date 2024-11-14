import {useState, useEffect} from "react";

const Display = ({setDisplayItems, displayItems}) => {

  // ロード時に保存されてるものを表示
  useEffect(() => {
    const initDisplayItems = [];
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const id = localStorage.key(i);
      const value = localStorage.getItem(id);

      initDisplayItems.push(
        <div key={id} className="output__item">
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