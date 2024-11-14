import {useState} from 'react';
import './App.css';
import {Title, Input, CreateElement, Display} from './assets/components/index';

function App () {
  const [createContent, setCreateContent] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  return (
    <>
      <Title />
      <Input setCreateContent={setCreateContent} setDisplayItems={setDisplayItems}/>
      <div className='output__wrapper'>
        <CreateElement createContent={createContent} />
        <Display setDisplayItems={setDisplayItems} displayItems={displayItems}/>
      </div>
    </>
  );
}

export default App;
