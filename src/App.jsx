import {useState} from 'react';
import appStyles from './assets/css/App.module.css';
import {Title, Input, CreateElement, Display} from './assets/components/index';

function App () {
  const [createContent, setCreateContent] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  return (
    <div className={appStyles.contents__wrapper}>
      <div className={appStyles.input__container}>
        <Title />
        <Input setCreateContent={setCreateContent} setDisplayItems={setDisplayItems} />
      </div>
      <div className={appStyles.output__container}>
        <CreateElement createContent={createContent} />
        <Display setDisplayItems={setDisplayItems} displayItems={displayItems} />
      </div>
    </div>
  );
}

export default App;
