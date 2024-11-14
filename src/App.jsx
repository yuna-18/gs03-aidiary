import {useState} from 'react';
import './App.css';
import {Title, Input, CreateElement, Display} from './assets/components/index';

function App () {
  const [createContent, setCreateContent] = useState([]);

  return (
    <>
      <Title />
      <Input setCreateContent={setCreateContent} />
      <div className='output__wrapper'>
        <CreateElement createContent={createContent} />
        <Display/>
      </div>
    </>
  );
}

export default App;
