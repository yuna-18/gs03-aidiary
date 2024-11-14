import {useState, useEffect} from "react";

const Display = () => {
  const [displayItems, setDisplayItems] = useState([]);
  
  // ロード時に保存されてるものを表示
  useEffect(() => {
    const initDisplayItems = [];
    for (let i = localStorage.length; i > 0; i--) {
      const title = localStorage.key(i);
      const value = localStorage.getItem(title);
  
      initDisplayItems.push(
        <div className="output__item">
          <h2>{title}</h2>
          <p>{value}</p>
        </div>
      );
    }
    setDisplayItems(initDisplayItems);
  }, [])

  return (
    <>
      {displayItems}
    </>
  );
};

export default Display;