import {useState} from 'react';
import appStyles from './assets/css/App.module.css';
import {Title, Input, CreateElement, InputDisplay} from './assets/components/index';

function App () {
  // 新規作成
  // const [createContent, setCreateContent] = useState([]);
  const [textElement, setTextElement] = useState([]);
  // リロード表示
  const [displayItems, setDisplayItems] = useState([]);
  //API出力テキスト
  const [reply, setReply] = useState('');
  // フォーム入力データ
  const [inputValue, setInputValue] = useState('');

  // API管理
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className={appStyles.contents__wrapper}>
      <div className={appStyles.input__container}>
        <Title />
        <Input setTextElement={setTextElement} setDisplayItems={setDisplayItems} setInputValue={setInputValue} inputValue={inputValue} setLoading={setLoading} setError={setError} />
      </div>
      <div className={appStyles.output__container}>
          <CreateElement textElement={textElement} loading={loading} error={error} />
          <InputDisplay setDisplayItems={setDisplayItems} displayItems={displayItems} textElement={textElement} loading={loading} error={error}/>
      </div>
    </div>
  );
}

export default App;
