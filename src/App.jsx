import {useState} from 'react';
import './App.css';
import {Title, Input, CreateElement} from './assets/components/index';

function App () {
  const [content, setContent] = useState([]);

  return (
    <>
      <Title />
      <Input setContent={setContent} />
      <CreateElement content={content} />
    </>
  );
}

export default App;
