import {useState} from 'react';
import './App.css';
import {Title, Input, CreateElement} from './assets/components/index';

function App () {
  const [createContent, setCreateContent] = useState([]);

  return (
    <>
      <Title />
      <Input setCreateContent={setCreateContent} />
      <CreateElement createContent={createContent} />
    </>
  );
}

export default App;
